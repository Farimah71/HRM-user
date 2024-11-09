import { useState } from "react";
import { Field } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { requestLogin } from "../../../redux/actions/auth";
import { MyForm, Input, Button, SelectBox, Error } from "../.."
import { Link } from "react-router-dom";

export const RequestLogin = ({ onSetUserName }) => {
  // ---------- store ----------
  const isLoading = useSelector(state => state.loadingSlice.isLoading);
  
  // ---------- states ----------
  const [userInfo, setUserInfo] = useState({
    userInfo: "",
  });
  // ---------- hooks ----------
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // ---------- variables ----------
  const requestLoginSchema = Yup.object({
    userInfo: Yup.string().required(t("error.email_required")),
  });

  // ---------- functions ----------
  const onSubmit = (data) => {
    onSetUserName(data.userInfo);
    dispatch(requestLogin(data));
  };

  // ---------- render jsx ----------
  return (
    <section className="w-full flex flex-col items-center">
      <MyForm
        initialValues={userInfo}
        validation={requestLoginSchema}
        submit={onSubmit}
      >
        <div className="w-full flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-2">
            <Field
              component={Input}
              placeholder={t("input.login_title.placeholder")}
              type="text"
              name="userInfo"
            />
            <Error
              name="userInfo"
            />
          </div>

          <Field
            component={Button}
            type="submit"
            theme="dark"
            classes="w-full uppercase"
            title={t("button.submit_title")}
            loading={isLoading}
          />
        </div>
      </MyForm>
    </section>
  );
};
