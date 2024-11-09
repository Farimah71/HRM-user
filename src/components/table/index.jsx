import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from ".."
import { Link } from "react-router-dom";
import { BiSolidEditAlt } from "react-icons/bi";
// import Button from "../common/Button/Index";
import MoreIcon from "../../assets/images/more.png";

export const Table = ({ cols, countData, data, buttons, actions }) => {
  // ========== i18next =========
  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  // ========== variables =========
  const sortValues = [
    {
      value: "",
      label: "sort by",
    },
    {
      value: "sort-1",
      label: "sort 1",
    },
    {
      value: "sort-2",
      label: "sort 2",
    },
    {
      value: "sort-3",
      label: "sort 3",
    },
  ];

  // ========== render jsx =========
  return (
    <div>
      {/* Table items count: */}
      <div className="flex justify-between items-center">
        <h4 className="text-base flex gap-x-3 text-custom-orange">
          {t("table.result")}
          <span className="text-custom-gray-200 font-bold">{countData}</span>
        </h4>
        <div>
          {buttons.map((button) => (
            <Link to={button.path}>
              <Button title={button.title} classes="px-6" />
            </Link>
          ))}
        </div>
        {/* <CustomSelect
          width="max"
          options={sortValues}
          onSelect={() => console.log("sort by")}
        /> */}
      </div>

      {/* Table: */}
      <table className="w-full mt-4 table-auto">
        <thead>
          <tr
            className={`h-14 block ${
              lng === "fa" || lng === "ar" ? "text-right" : "text-left"
            }`}
          >
            <div className="flex justify-between h-full items-center bg-custom-gray px-2 rounded-10">
              {cols.map((col) => (
                <th
                  key={col.key}
                  className="text-sm text-custom-gray-200 text-left"
                >
                  <div className="flex items-center gap-x-2 justify-start text-custom-dark text-opacity-30">
                    {col.col}
                  </div>
                </th>
              ))}
              <th className="text-sm text-custom-gray-200 text-left">
                <div className="flex items-center gap-x-2 text-custom-dark text-opacity-30">
                  {t("table.col.action")}
                </div>
              </th>
              {/* {actions?.map((action: string) => (
                <th className="text-sm text-custom-gray-200">{action}</th>
              ))} */}
            </div>
          </tr>
        </thead>

        <tbody className="flex flex-col mt-4">
          {data.map((row, index) => (
            <div key={row.Id} className="flex p-0.5 rounded-xl overflow-hidden">
              <tr
                key={row.Id + index}
                className={`flex justify-between items-center w-full p-3 z-40 bg-custom-gray-450 border-b-2 border-custom-gray-300 text-custom-primary-900 h-16 text-sm ${
                  lng === "fa" || lng === "ar" ? "text-right" : "text-left"
                }`}
              >
                {cols.map((col) => (
                  <td
                    className={`rounded-lg ${
                      col.key === "id" &&
                      "bg-white w-8 h-8 flex items-center justify-center"
                    }`}
                    key={col.key}
                  >
                    {row[col.key]}
                  </td>
                ))}
                <td className="group relative flex items-center justify-center">
                  <img
                    src={MoreIcon}
                    alt="more"
                    className="cursor-pointer p-2"
                  />

                  <div className="absolute w-10 py-2 bg-white invisible duration-200 ease-out -left-6 opacity-0 shadow-md rounded-10 flex justify-center items-center gap-x-2 group-hover:visible group-hover:-left-10 group-hover:opacity-100">
                    {actions.map((action, index) => (
                      <>
                        {action.type === "edit" && (
                          <Link key={index} to={`${action.path}${row.id}`}>
                            <BiSolidEditAlt size={20} color="#FE6601" />
                          </Link>
                        )}
                      </>
                    ))}
                  </div>
                </td>
                {/* {actions?.map((action) => (
                  <td>
                    <Button
                      title={action}
                      type="button"
                      theme="light"
                      classes="text-sm h-auto shadow-custom-shadow-table-btn border-0 py-1 px-2"
                    />
                  </td>
                ))} */}
              </tr>
            </div>
          ))}
        </tbody>
      </table>
    </div>
  );
};
