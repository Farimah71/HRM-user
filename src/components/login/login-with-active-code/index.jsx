import { useEffect, useState } from "react";
import { Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { loginWithActiveCode, setStepForm } from "../../../redux/actions/auth";
import { MyForm, Input, Button, SelectBox, Error } from "../..";
// ++++++++++ images import ++++++++++
import BackIcon from "../../../assets/images/back.png";

export const LoginWithActiveCode = ({ mobileNumber }) => {
  // ---------- store ----------
  const tenants = useSelector(
    (state) => state.authSlice.requestLoginInfo.tenants
  );
  const isLoading = useSelector((state) => state.loadingSlice.isLoading);

  // ---------- states ----------
  const [selectOptions, setSelectOptions] = useState();
  const [loginInfo, setLoginInfo] = useState({
    mobileNumber: mobileNumber,
    tenantId: null,
    activeCode: "",
  });
  // ---------- hooks ----------
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ---------- variables ----------
  const loginSchema = Yup.object({
    tenantId: Yup.number().required(t("error.center_required")),
    activeCode: Yup.string().required(t("error.active_code_required")),
  });

  // ---------- functions ----------
  const onSubmit = (data) => {
    dispatch(loginWithActiveCode(data, navigate));
  };
  const stepHandler = () => {
    dispatch(setStepForm(0));
  };

  // ---------- lifeCycle ----------
  useEffect(() => {
    const options = tenants.map((tenant) => ({
      value: tenant.tenantId,
      label: tenant.title,
    }));
    setSelectOptions(options);
  }, [tenants]);

  // ---------- render jsx ----------
  return (
    <section className="w-full flex flex-col items-center">
      <MyForm
        initialValues={loginInfo}
        validation={loginSchema}
        submit={onSubmit}
      >
        <div className="w-full flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <Field
              component={SelectBox}
              placeholder={t("input.center_title.placeholder")}
              type="text"
              name="tenantId"
              options={selectOptions}
            />
            <Error name="tenantId" />
          </div>

          <div className="flex flex-col gap-y-2">
            <Field
              component={Input}
              placeholder={t("input.active_code_title.placeholder")}
              label={t("input.active_code_title.label")}
              type="text"
              name="activeCode"
              classes="h-16"
            />
            <Error name="activeCode" />
          </div>

          {/* <Link to="/forgot-password" className="text-custom-orange text-base">
            {t("login.forgot_password_title")}
          </Link> */}

          <div className="flex gap-x-4 mt-4">
            <Field
              component={Button}
              type="button"
              theme="light"
              icon={BackIcon}
              classes="!w-auto px-6"
              onClick={stepHandler}
            />
            <Field
              component={Button}
              type="submit"
              theme="dark"
              classes="w-full"
              title={t("button.submit_title")}
              loading={isLoading}
            />
          </div>
        </div>
      </MyForm>
    </section>
  );
};
