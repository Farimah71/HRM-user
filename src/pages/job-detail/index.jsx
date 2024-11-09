import { PageHeader, Button, MyForm, Input, Error } from "../../components";
import { useState } from "react";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { Field } from "formik";
import CompanyLogo from "../../assets/images/company-2.png";
import OfflineIcon from "../../assets/images/offline.png";
import SaveIcon from "../../assets/images/save.png";

export const JobDetail = () => {
  // ---------- state ----------
  const [tab, setTab] = useState("detail");
  const [applyInfo, setApplyInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    cv: "",
  });

  // ---------- hooks ----------
  const { t } = useTranslation();
  // ---------- variables ----------
  const applyInfoSchema = Yup.object({
    firstName: Yup.string().required(),
  });

  // ---------- functions ----------
  const changeTabHandler = (title) => {
    setTab(title);
  };
  const onSubmit = (data) => {
    console.log(data);
  };

  // ---------- render jsx ----------
  return (
    <div className="w-full bg-white rounded-11 overflow-hidden h-700">
      <div className="bg-[url('./src/assets/images/bg-gradient.png')] bg-center bg-cover p-8 h-48">
        <div className="flex items-end gap-x-8">
          <img
            src={CompanyLogo}
            alt="logo"
            className="rounded-11 w-32 translate-y-[70px] border-2 border-custom-gray-light"
          />
          <h4 className="text-3xl text-custom-orange">
            {t("positions.luna_company")}
          </h4>
        </div>
      </div>
      <div className="px-8 h-[calc(100%-220px)] pb-8 overflow-hidden">
        <div className="w-full flex justify-end items-center gap-x-4 py-4">
          <p className="text-18 text-custom-dark text-opacity-30">
            2 {t("positions.hours_ago")}
          </p>
          <div className="flex items-center gap-x-4">
            <img src={OfflineIcon} alt="offline" />{" "}
            <img src={SaveIcon} alt="save" />
          </div>
        </div>

        <div className="pt-8 h-full flex justify-between">
          {tab === "detail" ? (
            <div className="overflow-y-auto h-full pr-6 pb-8 w-4/6">
              <h2 className="text-21 font-bold text-custom-dark">
                {t("positions.graphic_designer")}
              </h2>
              <div className="mt-4 pb-12">
                <p className="leading-6 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Tristique risus nec feugiat in fermentum posuere urna. Sit
                  amet aliquam id diam maecenas ultricies mi. Risus in hendrerit
                  gravida rutrum quisque non tellus. Et leo duis ut diam quam
                  nulla porttitor massa id. Massa id neque aliquam vestibulum
                  morbi. Volutpat blandit aliquam etiam erat. Et malesuada fames
                  ac turpis. Condimentum id venenatis a condimentum vitae sapien
                  pellentesque habitant morbi. Nisl nisi scelerisque eu ultrices
                  vitae. Mi tempus imperdiet nulla malesuada pellentesque elit
                  eget gravida com.{" "}
                </p>
                <ul className="mt-4 pl-5 list-disc list-outside">
                  <li>
                    risus nec feugiat in fermentum posuere urna. Sit amet
                    aliquam id diam maecenas ultricies mi. Risus in hendrerit
                    gravida rutrum quisque non tellus. Et leo duis ut diam quam
                    nulla{" "}
                  </li>
                  <li>
                    etiam erat. Et malesuada fames ac turpis. Condimentum id
                    venenatis a condimentum vitae sapien pellentesque habitant
                    morbi.
                  </li>
                  <li>
                    scelerisque eu ultrices vitae. Mi tempus imperdiet nulla
                    malesuada
                  </li>
                </ul>

                <h4 className="pt-4 text-21 text-custom-dark font-bold">
                  Job requirement
                </h4>

                <p className="leading-6 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Tristique risus nec feugiat in fermentum posuere urna. Sit
                  amet aliquam id diam maecenas ultricies mi. Risus in hendrerit
                  gravida rutrum quisque non tellus. Et leo duis ut diam quam
                  nulla porttitor massa id. Massa id neque aliquam vestibulum
                  morbi. Volutpat blandit aliquam etiam erat. Et malesuada fames
                  ac turpis. Condimentum id venenatis a condimentum vitae sapien
                  pellentesque habitant morbi. Nisl nisi scelerisque eu ultrices
                  vitae. Mi tempus imperdiet nulla malesuada pellentesque elit
                  eget gravida com.{" "}
                </p>
                <ul className="mt-4 pl-5 list-disc list-outside">
                  <li>
                    risus nec feugiat in fermentum posuere urna. Sit amet
                    aliquam id diam maecenas ultricies mi. Risus in hendrerit
                    gravida rutrum quisque non tellus. Et leo duis ut diam quam
                    nulla{" "}
                  </li>
                  <li>
                    etiam erat. Et malesuada fames ac turpis. Condimentum id
                    venenatis a condimentum vitae sapien pellentesque habitant
                    morbi.
                  </li>
                  <li>
                    scelerisque eu ultrices vitae. Mi tempus imperdiet nulla
                    malesuada
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="pr-6 pb-8 overflow-y-auto h-full w-4/6">
              <h2 className="text-21 font-bold text-custom-dark">
                {t("positions.graphic_designer")}
              </h2>
              <div className="mt-4 pb-12">
                <p className="leading-6 text-16 w-3/4">
                  You are applying for the “Graphic Designer” position in “Luna
                  Company”. Please enter your personal information and upload
                  your CV,
                </p>
                <MyForm
                  initialValues={applyInfo}
                  validation={applyInfoSchema}
                  submit={onSubmit}
                  classes="mt-6 flex items-end gap-x-2"
                >
                  <div className="w-3/4 flex flex-col gap-y-4">
                    <div className="w-full flex gap-x-4">
                      <div className="w-1/2">
                        <Field
                          component={Input}
                          placeholder={t("input.first_name_title.placeholder")}
                          label={t("input.first_name_title.label")}
                          name="firstName"
                        />
                        <Error name="firstName" />
                      </div>
                      <div className="w-1/2">
                        <Field
                          component={Input}
                          placeholder={t("input.last_name_title.placeholder")}
                          label={t("input.last_name_title.label")}
                          name="lastName"
                        />
                      </div>
                    </div>
                    <div className="w-full flex gap-x-4">
                      <div className="w-1/2">
                        <Field
                          component={Input}
                          placeholder={t(
                            "input.phone_number_title.placeholder"
                          )}
                          label={t("input.phone_number_title.label")}
                          name="phoneNumber"
                        />
                      </div>
                      <div className="w-1/2">
                        <Field
                          component={Input}
                          placeholder={t("input.email.placeholder")}
                          label={t("input.email.label")}
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <Field
                        component={Input}
                        type="file"
                        name="cv"
                        id="cv"
                        placeholder="Select your CV file"
                      />
                    </div>
                  </div>
                  <Button theme="light" title="Upload" classes="px-12" />
                </MyForm>
              </div>
            </div>
          )}
          <div className="w-2/5 h-full flex flex-col justify-between pl-8 pb-8">
            <div className="flex flex-col gap-y-2 items-start">
              <div className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5.84341 4.56789C7.47635 2.93495 9.69109 2.01758 12.0004 2.01758C14.3097 2.01758 16.5245 2.93495 18.1574 4.56789C19.7903 6.20083 20.7077 8.41557 20.7077 10.7249C20.7077 13.0342 19.7903 15.249 18.1574 16.8819L16.9704 18.0559C16.0954 18.9139 14.9604 20.0179 13.5644 21.3679C13.1448 21.7736 12.584 22.0004 12.0004 22.0004C11.4168 22.0004 10.856 21.7736 10.4364 21.3679L6.94541 17.9719C6.50541 17.5409 6.13941 17.1779 5.84341 16.8819C5.03483 16.0734 4.39342 15.1135 3.95581 14.0571C3.5182 13.0006 3.29297 11.8684 3.29297 10.7249C3.29297 9.58142 3.5182 8.44914 3.95581 7.39272C4.39342 6.3363 5.03483 5.37642 5.84341 4.56789ZM17.0964 5.62789C16.4271 4.95861 15.6324 4.42772 14.7579 4.06553C13.8834 3.70334 12.9461 3.51695 11.9996 3.517C11.053 3.51704 10.1157 3.70353 9.24124 4.0658C8.36676 4.42807 7.57219 4.95904 6.90291 5.62839C6.23363 6.29774 5.70274 7.09236 5.34055 7.96688C4.97836 8.8414 4.79197 9.77869 4.79202 10.7252C4.79206 11.6718 4.97855 12.6091 5.34082 13.4836C5.70309 14.358 6.23406 15.1526 6.90341 15.8219L8.39141 17.2899C9.20941 18.0909 10.2394 19.0909 11.4794 20.2899C11.6192 20.4249 11.806 20.5004 12.0004 20.5004C12.1948 20.5004 12.3816 20.4249 12.5214 20.2899L15.9164 16.9899C16.3864 16.5289 16.7794 16.1399 17.0964 15.8219C18.4479 14.4703 19.2072 12.6372 19.2072 10.7259C19.2072 8.81453 18.4479 6.98146 17.0964 5.62989V5.62789ZM12.0004 7.99889C12.3946 7.99889 12.785 8.07654 13.1492 8.2274C13.5134 8.37827 13.8444 8.5994 14.1231 8.87816C14.4019 9.15692 14.623 9.48786 14.7739 9.85208C14.9248 10.2163 15.0024 10.6067 15.0024 11.0009C15.0024 11.3951 14.9248 11.7855 14.7739 12.1497C14.623 12.5139 14.4019 12.8449 14.1231 13.1236C13.8444 13.4024 13.5134 13.6235 13.1492 13.7744C12.785 13.9252 12.3946 14.0029 12.0004 14.0029C11.2139 13.9885 10.4644 13.666 9.91318 13.1047C9.36201 12.5433 9.0532 11.7881 9.0532 11.0014C9.0532 10.2147 9.36201 9.45944 9.91318 8.89812C10.4644 8.33679 11.2139 8.01425 12.0004 7.99989V7.99889ZM12.0004 9.49889C11.6021 9.49889 11.22 9.65714 10.9383 9.93882C10.6567 10.2205 10.4984 10.6025 10.4984 11.0009C10.4984 11.3992 10.6567 11.7813 10.9383 12.063C11.22 12.3446 11.6021 12.5029 12.0004 12.5029C12.3919 12.4928 12.764 12.3302 13.0373 12.0497C13.3107 11.7692 13.4637 11.393 13.4637 11.0014C13.4637 10.6097 13.3107 10.2336 13.0373 9.95311C12.764 9.67262 12.3919 9.51 12.0004 9.49989V9.49889Z"
                    fill="#FE6601"
                  />
                </svg>{" "}
                <span className="text-16">{t("positions.location")}</span>
              </div>
              <span className="py-2 px-3 text-14 rounded-30 bg-custom-gray-light">
                London
              </span>
            </div>
            <div className="flex flex-col gap-y-2 items-start">
              <div className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g id="fluent:style-guide-24-regular">
                    <path
                      id="Vector"
                      d="M14.0343 2.77726C14.3831 2.6838 14.747 2.65998 15.1051 2.70715C15.4631 2.75432 15.8084 2.87156 16.1211 3.05217C16.4339 3.23278 16.708 3.47323 16.9278 3.75979C17.1476 4.04634 17.3089 4.37339 17.4023 4.72226L20.1203 14.8643C20.2137 15.2131 20.2376 15.577 20.1904 15.935C20.1432 16.2931 20.026 16.6384 19.8454 16.9511C19.6648 17.2639 19.4243 17.538 19.1378 17.7578C18.8512 17.9776 18.5241 18.1388 18.1753 18.2323L11.8973 19.9143C11.1929 20.103 10.4423 20.0043 9.81071 19.6397C9.17911 19.2751 8.71817 18.6746 8.52928 17.9703L5.81028 7.82726C5.71685 7.47833 5.69307 7.11442 5.7403 6.7563C5.78754 6.39819 5.90486 6.05289 6.08557 5.74012C6.26628 5.42736 6.50684 5.15326 6.79351 4.93349C7.08017 4.71371 7.40733 4.55257 7.75628 4.45926L14.0343 2.77726ZM5.80128 11.6573L7.56328 18.2283C7.73656 18.8792 8.0828 19.4711 8.56528 19.9413L8.12228 19.9183C7.39402 19.88 6.71077 19.5541 6.22281 19.0121C5.73486 18.4701 5.48215 17.7565 5.52028 17.0283L5.80128 11.6583V11.6573ZM14.4223 4.22626L8.14428 5.90826C7.9857 5.95073 7.83705 6.02402 7.7068 6.12395C7.57655 6.22388 7.46726 6.34849 7.38517 6.49066C7.30308 6.63282 7.2498 6.78977 7.22837 6.95253C7.20695 7.11529 7.21779 7.28068 7.26028 7.43926L9.97828 17.5813C10.0641 17.9013 10.2734 18.1742 10.5603 18.3399C10.8472 18.5057 11.1882 18.5508 11.5083 18.4653L17.7873 16.7833C17.9459 16.7408 18.0945 16.6675 18.2248 16.5676C18.355 16.4676 18.4643 16.343 18.5464 16.2009C18.6285 16.0587 18.6818 15.9017 18.7032 15.739C18.7246 15.5762 18.7138 15.4108 18.6713 15.2523L15.9533 5.11026C15.8675 4.79022 15.6581 4.51733 15.3713 4.35157C15.0844 4.18581 14.7434 4.14074 14.4233 4.22626H14.4223ZM4.87628 10.1793L4.52128 16.9753C4.48428 17.6743 4.64128 18.3383 4.94528 18.9153L4.53128 18.7553C4.1941 18.6259 3.88571 18.4313 3.62373 18.1827C3.36174 17.9341 3.15128 17.6364 3.00438 17.3064C2.85747 16.9765 2.777 16.6209 2.76754 16.2598C2.75809 15.8988 2.81984 15.5394 2.94928 15.2023L4.87628 10.1793ZM9.74028 7.03426C9.86714 7.00024 9.99945 6.99155 10.1297 7.00867C10.2599 7.0258 10.3855 7.0684 10.4992 7.13405C10.613 7.1997 10.7127 7.28711 10.7926 7.3913C10.8726 7.49548 10.9313 7.6144 10.9653 7.74126C10.9993 7.86811 11.008 8.00043 10.9909 8.13064C10.9737 8.26086 10.9311 8.38643 10.8655 8.50018C10.7998 8.61393 10.7124 8.71364 10.6082 8.79361C10.5041 8.87358 10.3851 8.93224 10.2583 8.96626C10.0021 9.03495 9.72909 8.99905 9.49936 8.86646C9.26963 8.73387 9.10197 8.51545 9.03328 8.25926C8.96459 8.00306 9.00049 7.73006 9.13308 7.50033C9.26566 7.2706 9.48408 7.10295 9.74028 7.03426Z"
                      fill="#FE6601"
                    />
                  </g>
                </svg>{" "}
                <span className="text-16">{t("positions.format")}</span>
              </div>
              <div className="flex items-center gap-x-4">
                <span className="py-2 px-3 text-14 rounded-30 bg-custom-gray-light">
                  {t("positions.full_time")}
                </span>
                <span className="py-2 px-3 text-14 rounded-30 bg-custom-gray-light">
                  In Site
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-y-2 items-start">
              <div className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g id="fluent-emoji-high-contrast:money-bag">
                    <g id="Group">
                      <path
                        id="Vector"
                        d="M11.8802 14.507H11.9327C13.0577 14.537 13.9577 15.452 13.9577 16.577C13.9577 17.537 13.3052 18.3395 12.4202 18.5795V19.4195C12.4202 19.7195 12.1802 19.9595 11.8802 19.9595C11.5802 19.9595 11.3402 19.7195 11.3402 19.4195V18.5795C10.8995 18.461 10.5102 18.2006 10.2323 17.8387C9.95435 17.4767 9.8034 17.0333 9.80273 16.577C9.80273 16.277 10.0427 16.037 10.3427 16.037C10.6427 16.037 10.8827 16.277 10.8827 16.577C10.8827 17.132 11.3252 17.5745 11.8727 17.5745C12.4202 17.5745 12.8702 17.1245 12.8702 16.577C12.8702 16.0295 12.4202 15.5795 11.8727 15.5795H11.8202C11.2807 15.5648 10.7681 15.3404 10.3914 14.9539C10.0147 14.5674 9.80351 14.0492 9.80273 13.5095C9.80273 12.5495 10.4552 11.747 11.3402 11.507V10.667C11.3402 10.367 11.5802 10.127 11.8802 10.127C12.1802 10.127 12.4202 10.367 12.4202 10.667V11.507C13.3052 11.747 13.9577 12.5495 13.9577 13.5095C13.9577 13.8095 13.7177 14.0495 13.4177 14.0495C13.1177 14.0495 12.8777 13.8095 12.8777 13.5095C12.8777 12.962 12.4277 12.512 11.8802 12.512C11.3327 12.512 10.8827 12.962 10.8827 13.5095C10.8827 14.057 11.3327 14.507 11.8802 14.507Z"
                        fill="#FE6601"
                      />
                      <path
                        id="Vector_2"
                        d="M7.899 3.82416L9.9885 6.26916L9.76275 6.52116C5.46225 7.48566 2.25 11.3264 2.25 15.9179C2.25 19.9544 5.526 23.2304 9.5625 23.2304H14.19C18.2265 23.2304 21.5025 19.9552 21.5025 15.9187C21.51 11.3264 18.2978 7.48566 13.9973 6.52116C14.0147 6.36268 13.9861 6.20251 13.9148 6.05991L15.6923 4.02516L15.807 3.84816C15.941 3.55591 15.9753 3.22773 15.9046 2.9141C15.8338 2.60046 15.6621 2.31874 15.4156 2.11227C15.1692 1.90579 14.8617 1.78599 14.5406 1.77129C14.2194 1.75659 13.9023 1.84781 13.638 2.03091L13.0058 1.28091C12.8639 1.1222 12.6902 0.995151 12.496 0.908049C12.3018 0.820947 12.0914 0.775747 11.8786 0.775393C11.6657 0.775039 11.4552 0.81954 11.2607 0.905996C11.0662 0.992451 10.8921 1.11892 10.7498 1.27716L10.0875 2.01666C9.82391 1.82975 9.50608 1.7349 9.18317 1.74677C8.86025 1.75865 8.55025 1.8766 8.3011 2.08237C8.05196 2.28814 7.87755 2.57027 7.80487 2.88512C7.73218 3.19997 7.76527 3.53 7.899 3.82416ZM10.7483 4.86291L9.47625 3.39291C9.77176 3.53531 10.1061 3.57574 10.4271 3.50789C10.748 3.44004 11.0374 3.26773 11.25 3.01791L11.85 2.23941L12.516 3.02841C12.7237 3.2699 13.0038 3.43782 13.3146 3.50715C13.6255 3.57648 13.9504 3.54352 14.241 3.41316L12.975 4.86291H10.7483ZM3.75 15.9179C3.75 11.4269 7.389 7.78791 11.88 7.78791C16.371 7.78791 20.01 11.4269 20.0025 15.9164V15.9179C20.0019 17.4593 19.3893 18.9374 18.2994 20.0273C17.2095 21.1172 15.7314 21.7298 14.19 21.7304H9.5625C8.02111 21.7298 6.54303 21.1172 5.4531 20.0273C4.36317 18.9374 3.7506 17.4593 3.75 15.9179Z"
                        fill="#FE6601"
                      />
                    </g>
                  </g>
                </svg>{" "}
                <span className="text-16">{t("positions.salary")}</span>
              </div>
              <span className="py-2 px-3 text-14 rounded-30 bg-custom-gray-light">
                $2,000/{t("positions.month")} - $5,000/{t("positions.month")}
              </span>
            </div>

            <Button
              theme="dark"
              title={t("button.apply_title")}
              classes="w-full uppercase"
              type="button"
              onClick={() => changeTabHandler("upload_cv")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
