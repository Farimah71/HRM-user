import { useState } from "react";
import { Field } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { setTenantInfo } from "../../../../redux/actions/auth";
import { MyForm, Input, Button, Error, UploadFile } from "../../.."
// ++++++++++ images import ++++++++++
import BackIcon from "../../../../assets/images/back.png";

export const CompanyInfo = ({ stepFormHandler }) => {
  // ---------- store ----------
  const userInfoId = useSelector(state => state.authSlice.userInfo.userInfoId);
  const isLoading = useSelector(state => state.loadingSlice.isLoading);

  // ---------- states ----------
  const [companyInfo, setCompanyInfo] = useState({
    userId: userInfoId,
    title: "",
    inviteKey: "",
    IsDemo: false,
    description: "",
    logo: "",
  });

  // ---------- hooks ----------
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ---------- variables ----------
  const companyInfoSchema = Yup.object().shape({
    title: Yup.string().required(t("error.business_title_required")),
    inviteKey: Yup.string().required(t("error.business_invite_key_required")),
  });

  // ---------- functions ----------
  const onSubmit = (data) => {
    dispatch(setTenantInfo(data, navigate));
  };

  // ---------- render jsx ----------
  return (
    <section className="w-full flex flex-col gap-y-28">
      <div className="mt-8 flex flex-col items-center">
        <h4 className="text-custom-dark text-4xl">
          {t("signup.company_info_title")}
        </h4>
        <p className="text-custom-dark text-19 mt-3">
          {t("signup.company_info_sub_title")}
        </p>
      </div>
      <MyForm
        initialValues={companyInfo}
        validation={companyInfoSchema}
        submit={onSubmit}
        classes="!w-1/3 mx-auto"
      >
        <div className="flex flex-col gap-y-6">
          <div className="w-full flex flex-col gap-y-2">
            <Field
              name="logo"
              component={UploadFile}
              label={t("input.upload_logo_title")}
              fileFormats=".png, .jpg, .jpeg files"
              size="2MB"
            />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <Field
              component={Input}
              name="title"
              placeholder={t("input.companyTitle_title.placeholder")}
              label={t("input.companyTitle_title.label")}
            />
            <Error name="title" />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <Field
              component={Input}
              name="inviteKey"
              placeholder={t("input.invite_key_title.placeholder")}
              label={t("input.invite_key_title.label")}
            />
            <Error name="inviteKey" />
          </div>
          <div className="flex justify-between items-center">
            <h4 className="text-custom-dark text-16 font-semibold">
              {t("signup.preview_demo_title")}
            </h4>
            <Field
              component={Button}
              theme="light"
              title={t("button.is_demo_title")}
              classes="!w-1/3"
            />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <Field
              component={Input}
              type="textarea"
              name="description"
              placeholder={t("input.description.placeholder")}
              label={t("input.description.label")}
            />
            <Error name="description" />
          </div>
          <div className="w-full flex items-center gap-x-4 mt-4">
            <Field
              component={Button}
              type="button"
              theme="light"
              icon={BackIcon}
              classes="!w-auto px-6"
              onClick={() => stepFormHandler("back")}
            />
            <Field
              component={Button}
              type="submit"
              theme="dark"
              classes="w-full uppercase"
              title={t("button.next_title")}
              loading={isLoading}
            />
          </div>
        </div>
      </MyForm>
    </section>
  );
};
