import { useState, useEffect } from "react";
import { Field } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { setUserInfo } from "../../../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { omit } from "lodash";
import { MyForm, Input, Button, Error, UploadFile } from "../../.."
// ++++++++++ images import ++++++++++

export const PersonalInfo = ({ stepFormHandler }) => {
  // ---------- states ----------
  const [statusSubmit, setStatusSubmit] = useState(false);
  const [readOnlyInput, setReadOnlyInput] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    repeatPassword: "",
    email: "",
    mobileNo: "",
    nationalCode: "",
    avatar: "",
    activationCode: "",
    isActive: true,
    isLock: false,
    fromTime: null,
    toTime: null,
    fromDate: null,
    toDate: null,
  });

  // ---------- store ----------
  const isLoading = useSelector(state => state.loadingSlice.isLoading);

  // ---------- hooks ----------
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // ---------- variables ----------
  const personalInfoSchema = Yup.object().shape({
    firstName: Yup.string().required(t("error.first_name_required")),
    lastName: Yup.string().required(t("error.last_name_required")),
    userName: Yup.string().required(t("error.user_name_required")),

    password: Yup.string()
      .required(t("error.password_required"))
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        t("error.password_invalid")
      ),

    repeatPassword: Yup.string()
      .required(t("error.repeat_password_required"))
      .oneOf([Yup.ref("password")], t("error.password_match_not")),

    email: Yup.string()
      .required(t("error.email_required"))
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        t("error.email_invalid")
      ),

    mobileNo: Yup.string()
      .min(7, t("error.mobileNo_invalid"))
      .required(t("error.mobileNo_required")),
  });

  
  // ---------- functions ----------
  const onSubmit = (data) => {
    const dataSend = omit(data, "repeatPassword");
    const dataCache = omit(data, "password", "repeatPassword");
    dispatch(setUserInfo(dataSend, dataCache, (status) => setStatusSubmit(status)))
  };
  
  // ---------- lifeCycle ----------
  useEffect(() => {
    if (statusSubmit) {
      console.log(statusSubmit)
      stepFormHandler("next");
    }
  }, [statusSubmit])
  useEffect(() => {
    if ("signupFormPersonal" in localStorage) {
      setPersonalInfo(JSON.parse(localStorage.getItem("signupFormPersonal")))
      setReadOnlyInput(true)
    }
  }, []);

  // ---------- render jsx ----------
  return (
    <section className="w-full flex flex-col gap-y-28">
      <div className="mt-8 flex flex-col items-center">
        <h4 className="text-custom-dark text-4xl">
          {t("signup.personal_info_title")}
        </h4>
        <p className="text-custom-dark text-19 mt-3">
          {t("signup.personal_info_sub_title")}
        </p>
      </div>
      <MyForm
        initialValues={personalInfo}
        validation={personalInfoSchema}
        submit={onSubmit}
        classes="!w-1/3 mx-auto"
      >
        <div className="flex flex-col gap-y-6">
          <div className="w-full flex flex-col gap-y-2">
            <Field
              name="avatar"
              component={UploadFile}
              label={t("input.upload_avatar_title")}
              fileFormats=".png, .jpg, .jpeg files"
              size="2MB"
            />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <Field
              component={Input}
              name="firstName"
              placeholder={t("input.first_name_title.placeholder")}
              label={t("input.first_name_title.label")}
              disabled={readOnlyInput}
            />
            <Error name="firstName" />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <Field
              component={Input}
              name="lastName"
              placeholder={t("input.last_name_title.placeholder")}
              label={t("input.last_name_title.label")}
              disabled={readOnlyInput}
            />
            <Error name="lastName" />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <Field
              component={Input}
              name="userName"
              placeholder={t("input.user_name_title.placeholder")}
              label={t("input.user_name_title.label")}
              disabled={readOnlyInput}
            />
            <Error name="userName" />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <Field
              component={Input}
              name="password"
              type="password"
              placeholder={t("input.password_title.placeholder")}
              label={t("input.password_title.label")}
              disabled={readOnlyInput}
            />
            <Error name="password" />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <Field
              component={Input}
              name="repeatPassword"
              type="password"
              placeholder={t("input.repeat_password_title.placeholder")}
              label={t("input.repeat_password_title.label")}
              disabled={readOnlyInput}
            />
            <Error name="repeatPassword" />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <Field
              component={Input}
              name="email"
              placeholder={t("input.email.placeholder")}
              label={t("input.email.label")}
              disabled={readOnlyInput}
            />
            <Error name="email" />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <Field
              component={Input}
              name="mobileNo"
              placeholder={t("input.phone_number_title.placeholder")}
              label={t("input.phone_number_title.label")}
              disabled={readOnlyInput}
            />
            <Error name="mobileNo" />
          </div>
          <div className="w-full">
            <Field
              component={Input}
              name="nationalCode"
              placeholder={t("input.national_code_title.placeholder")}
              label={t("input.national_code_title.label")}
              disabled={readOnlyInput}
            />
            <Error name="nationalCode" />
          </div>
          <div className="w-full flex items-center gap-x-4 mt-4">
            <Field
              component={Button}
              type={readOnlyInput ? "button" : "submit"}
              theme="dark"
              title={t("button.next_title")}
              loading={isLoading}
              classes="w-full uppercase"
              onClick={() => stepFormHandler("next")}
            />
          </div>
        </div>
      </MyForm>
    </section>
  );
};
