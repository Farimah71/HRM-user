import { useState } from "react";
import {
  PageHeader,
  Tags,
  PositionCard,
  Button,
  FilterSearch,
} from "../../../components";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CompanyLogoOne from "../../../assets/images/company-1.png";
import CompanyLogoTwo from "../../../assets/images/company-2.png";

export const Dashboard = () => {
  // ---------- state ----------
  const [isShowFilter, setIsShowFilter] = useState(false);

  // ---------- hooks ----------
  const { t } = useTranslation();

  // ---------- variables ----------
  const tags = [
    t("tags.marketing"),
    t("tags.antalya"),
    t("tags.full_time"),
    t("tags.experience"),
    t("tags.more_than"),
  ];
  const positions = [
    {
      id: 1,
      title: t("positions.graphic_designer"),
      company: t("positions.luna_company"),
      salary: `$ 2k - 5k / ${t("positions.month")}`,
      location: "London",
      logo: CompanyLogoTwo,
      features: [t("positions.full_time"), `20-50 ${t("positions.employee")}`],
    },
    {
      id: 2,
      title: t("positions.frontend_developer"),
      company: t("positions.linaux_comapny"),
      salary: `$ 15k - 20k / ${t("positions.month")}`,
      location: "Canada",
      logo: CompanyLogoOne,
      features: [
        t("positions.full_time"),
        `1500-5000 ${t("positions.employee")}`,
      ],
    },
    {
      id: 3,
      title: t("positions.graphic_designer"),
      company: t("positions.luna_company"),
      salary: `$ 2k - 5k / ${t("positions.month")}`,
      location: "London",
      logo: CompanyLogoTwo,
      features: [t("positions.full_time"), `20-50 ${t("positions.employee")}`],
    },
    {
      id: 4,
      title: t("positions.frontend_developer"),
      company: t("positions.linaux_comapny"),
      salary: `$ 15k - 20k / ${t("positions.month")}`,
      location: "Canada",
      logo: CompanyLogoOne,
      features: [
        t("positions.full_time"),
        `1500-5000 ${t("positions.employee")}`,
      ],
    },
  ];

  // ---------- functions ----------
  const toggleFilterHandler = () => {
    setIsShowFilter(!isShowFilter);
  };

  // ---------- render jsx ----------
  return (
    <div className="flex flex-col gap-y-12 overflow-y-auto pb-8">
      <h2 className="text-custom-orange text-18">
        654 results were found that match your need.
      </h2>
      <div className="flex items-center justify-between">
        <Tags tags={tags} />
        <Button
          theme="light"
          title={t("button.change_title")}
          type="button"
          onClick={toggleFilterHandler}
        />
      </div>
      {isShowFilter && <FilterSearch />}
      <div className="flex flex-col gap-y-8">
        <PositionCard positions={positions} />
      </div>
    </div>
  );
};
