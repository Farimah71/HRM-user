import { useState } from "react";
import * as Yup from "yup";
import { Button, Error, Input, MyForm, SelectBox } from "..";
import { Field } from "formik";
import { useTranslation } from "react-i18next";

export const FilterSearch = () => {
  // ---------- state ----------
  const [searchItems, setSearchItems] = useState({
    job: "",
    industry: "",
    city: "",
  });

  // ---------- hooks ----------
  const { t } = useTranslation();

  // ---------- variables ----------
  const searchSchema = Yup.object({
    job: Yup.string().required(),
  });

  // ---------- functions ----------
  const onSubmit = (data) => {
    console.log(data);
  };

  // ---------- render jsx ----------
  return (
    <div className="w-full">
      <MyForm
        initialValues={searchItems}
        validation={searchSchema}
        submit={onSubmit}
      >
        <div className="flex flex-col gap-y-6 items-center">
          <div className="w-full flex gap-x-4">
            <div className="w-full">
              <Field
                component={Input}
                placeholder={t("input.job_position.placeholder")}
                label={t("input.job_position.label")}
                name="job"
              />
              <Error name="job" />
            </div>
            <div className="w-full">
              <Field
                component={SelectBox}
                placeholder={t("input.job_industry.placeholder")}
                label={t("input.job_industry.label")}
                name="industry"
              />
            </div>
            <div className="w-full">
              <Field
                component={Input}
                placeholder={t("input.city.placeholder")}
                label={t("input.city.label")}
                name="city"
              />
            </div>
          </div>
          <div className="w-full flex gap-x-4">
            <div className="w-full">
              <Field
                component={SelectBox}
                placeholder={t("input.contract_format.placeholder")}
                label={t("input.contract_format.label")}
                name="contract"
              />
            </div>
            <div className="w-full">
              <Field
                component={SelectBox}
                placeholder={t("input.years_experience.placeholder")}
                label={t("input.years_experience.label")}
                name="experience"
              />
            </div>
            <div className="w-full">
              <Field
                component={SelectBox}
                placeholder={t("input.salary_range.placeholder")}
                label={t("input.salary_range.label")}
                name="salary"
              />
            </div>
          </div>
          <Button theme="dark" title={t("button.search_title")} classes="w-1/3 mt-6 uppercase"/>
        </div>
      </MyForm>
    </div>
  );
};
