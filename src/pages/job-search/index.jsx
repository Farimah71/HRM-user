import { useState } from "react";
import {
  MyForm,
  Input,
  Button,
  Error,
  AutoComplete,
  SelectBox,
} from "../../components";
import * as Yup from "yup";
import { Field } from "formik";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

export const JobSearch = () => {
  // ---------- state ----------
  const [data, setData] = useState({
    title: "",
    industry: "",
    city: "",
  });

  // ---------- hooks ----------
  const { t } = useTranslation();
  const navigate = useNavigate();

  // ---------- variables ----------
  const dataSchema = Yup.object({
    // title: Yup.string().required(),
  });
  const options = [
    {
      id: 1,
      title: "Programming",
    },
    {
      id: 2,
      title: "IT",
    },
    {
      id: 3,
      title: "Design",
    },
  ];

  // ---------- functions ----------
  const onSubmit = (values) => {
    console.log(values);
  };

  // ---------- render jsx ----------
  return (
    <div className="w-1400 max-w-98 px-20 py-32 bg-white rounded-11 flex flex-col items-center shadow-md gap-y-10 z-50 mt-14">
      <MyForm
        initialValues={data}
        validation={dataSchema}
        submit={onSubmit}
        classes="flex flex-col gap-y-8 items-center"
      >
        <div className="w-full flex justify-center gap-x-4">
          <div className="flex w-full flex-col gap-y-1">
            <Field
              component={Input}
              label={t("input.job_position.label")}
              placeholder={t("input.job_position.placeholder")}
              name="title"
            />
            <Error name="title" />
          </div>
          <div className="flex w-full flex-col gap-y-1">
            <Field
              component={SelectBox}
              label={t("input.job_industry.label")}
              placeholder={t("input.job_industry.placeholder")}
              name="industry"
              options={options}
            />
            <Error name="industry" />
          </div>
          <div className="flex w-full flex-col gap-y-1">
            <Field
              component={AutoComplete}
              label={t("input.job_industry.label")}
              placeholder={t("input.job_industry.placeholder")}
              name="city"
            />
            <Error name="city" />
          </div>
        </div>
        <Field
          component={Button}
          title={t("button.search_title")}
          type="button"
          onClick={() => navigate("/dashboard")}
          classes="uppercase w-1/3"
        />
      </MyForm>
      <p>
        {!localStorage.token && (
          <>
            <Link to="/login" className="text-custom-orange">
              {t("login.link_title")}
            </Link>{" "}
            {t("text.or")}{" "}
            <Link to="/signup" className="text-custom-orange">
              {t("signup.link_title")}
            </Link>
          </>
        )}
      </p>
    </div>
  );
};
