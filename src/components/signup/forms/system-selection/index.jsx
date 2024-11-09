import { Field } from "formik";
import { useTranslation } from "react-i18next";
import { Button, MyForm } from "../../.."
// ++++++++++ images import ++++++++++
import BackIcon from "../../../../assets/images/back.png";

export const SystemSelection = () => {
  // ---------- hooks ----------
  const { t } = useTranslation();

  // ---------- render jsx ----------
  return (
    <section className="w-full flex flex-col gap-y-28">
      <div className="mt-8 flex flex-col items-center">
        <h4 className="text-custom-dark text-49">
          {t("signup.selection_system_title")}
        </h4>
        <p className="text-custom-dark text-19">
          {t("signup.selection_system_sub_title")}
        </p>
      </div>

      <div className="flex gap-x-6 justify-center items-start">
        <div className="w-1/5 max-h-[600px] rounded-48 bg-white p-6 overflow-y-auto">
          <ul>
            <li className="h-16 rounded-3xl leading-[64px] bg-custom-orange bg-opacity-20 text-center text-19 cursor-pointer">
              Items
            </li>
            <li className=" h-16 leading-[64px] rounded-48 text-center text-19 cursor-pointer border-b border-custom-gray-light">
              Items
            </li>
            <li className=" h-16 leading-[64px] rounded-48 text-center text-19 cursor-pointer border-b border-custom-gray-light">
              Items
            </li>
            <li className=" h-16 leading-[64px] rounded-48 text-center text-19 cursor-pointer border-b border-custom-gray-light">
              Items
            </li>
            <li className=" h-16 leading-[64px] rounded-48 text-center text-19 cursor-pointer border-b border-custom-gray-light">
              Items
            </li>
            <li className=" h-16 leading-[64px] rounded-48 text-center text-19 cursor-pointer border-b border-custom-gray-light">
              Items
            </li>
            <li className=" h-16 leading-[64px] rounded-48 text-center text-19 cursor-pointer border-b border-custom-gray-light">
              Items
            </li>
          </ul>
        </div>
        <div className="w-2/3 max-h-[600px] bg-white rounded-48 p-8">
          <MyForm>
            <div className="h-5/6 overflow-y-auto"></div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-y-3">
                <p className="text-21 text-custom-dark font-semibold">
                  {t("signup.total_title")} :
                </p>
                <h4 className="text-49 text-custom-orange">$ 275.80</h4>
              </div>
              <div className="w-1/2 flex items-center gap-x-4 mt-4">
                <Field
                  component={Button}
                  type="button"
                  theme="light"
                  icon={BackIcon}
                  classes="!w-auto px-6"
                />
                <Field
                  component={Button}
                  type="submit"
                  theme="dark"
                  title={t("button.submit_title")}
                />
              </div>
            </div>
          </MyForm>
        </div>
      </div>
    </section>
  );
};
