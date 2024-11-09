import React, { useState } from "react";
import { lazily } from "react-lazily";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const { PersonalInfo, CompanyInfo, PaymentFail } = lazily(() =>
  import("../../../components")
);

export const Signup = () => {
  // ---------- states ----------
  const [stepCount, setStepCount] = useState(2);
  const [stepActive, setStepActive] = useState(1);

  // ---------- hooks ----------
  const { t } = useTranslation();

  // ---------- functions ----------
  const signupFormHandler = (title) => {
    if (title === "next") {
      setStepActive(stepActive + 1);
    } else {
      setStepActive(stepActive - 1);
    }
  };

  // ---------- render jsx ----------
  return (
    <>
      <div className="absolute w-[120%] rounded-b-50 h-[600px] left-1/2 -translate-x-1/2 -top-[400px] bg-gradient-orange"></div>
      <div className="z-50 mt-24 flex flex-col items-center gap-y-8 w-full no-scroll">
        {/* steps progress */}
        <div className="flex items-center mx-auto gap-x-4">
          <span
            className={`h-5 bg-white rounded-3xl duration-200 ease-in-out ${
              stepActive === 1 ? "w-20" : "w-7 bg-opacity-60"
            }`}
          ></span>
          <span
            className={`h-5 bg-white rounded-3xl duration-200 ease-in-out ${
              stepActive === 2 ? "w-20" : "w-7 bg-opacity-60"
            }`}
          ></span>
        </div>

        <div className="mt-16 flex flex-col justify-center items-center w-full">
          <p className="text-custom-dark text-19 text-opacity-30">
            {stepActive} / {stepCount}
          </p>
          {/* forms render */}
          <div className="w-full flex justify-center">
            {stepActive === 1 && (
              <PersonalInfo
                stepFormHandler={(status) => signupFormHandler(status)}
              />
            )}
            {stepActive === 2 && (
              <CompanyInfo
                stepFormHandler={(status) => signupFormHandler(status)}
              />
            )}
            {/* <SystemSelectionForm /> */}
            {/* <PaymentFail /> */}
          </div>

          <p className="w-1/3 text-base text-left mt-6">
            {t("login.dont_account_title")}{" "}
            <Link to="/login" className="text-custom-orange underline">
              {t("signup.login_link_title")}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
