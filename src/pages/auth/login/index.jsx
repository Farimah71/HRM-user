import React, { useState } from "react";
import { lazily } from "react-lazily";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const { RequestLogin, LoginWithPassword, LoginWithActiveCode } = lazily(() =>
  import("../../../components")
);

export const Login = () => {
  // ---------- store ----------
  const userInfoType = useSelector(
    (state) => state.authSlice.requestLoginInfo.userInfoType
  );

  // ---------- states ----------
  const [userName, setUserName] = useState("");

  // ---------- hooks ----------
  const { t } = useTranslation();

  // ---------- render jsx ----------
  return (
    <div className="w-[600px] max-w-full px-20 py-16 bg-white rounded-11 flex flex-col gap-y-10 z-50 shadow-md mt-28">
      <div className="flex flex-col items-center gap-y-4">
        <h2 className="text-custom-dark text-19 font-bold">
          {t("login.welcome_title")}
        </h2>
        <p className="text-custom-dark text-base">{t("login.sub_title")}</p>
      </div>

      {/* render login forms */}
      {userInfoType !== 1 && userInfoType !== 2 && (
        <RequestLogin onSetUserName={(name) => setUserName(name)} />
      )}

      {userInfoType === 1 && <LoginWithActiveCode mobileNumber={userName} />}
      {userInfoType === 2 && <LoginWithPassword username={userName} />}

      <p className="text-14 text-center">
        {t("login.dont_account_title")}{" "}
        <Link to="/signup" className="text-custom-orange">
          {t("login.signup_link_title")}
        </Link>
      </p>
    </div>
  );
};
