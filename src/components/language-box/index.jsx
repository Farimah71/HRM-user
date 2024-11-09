import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import EnFlag from "../../assets/icons/flags/united-kingdom.svg";
import TrFlag from "../../assets/icons/flags/turkey.svg";
import ArrowIcon from "../../assets/images/down.png"

export const LanguageBox = ({ classes }) => {
  // ---------- variables ----------
  const languages = [
    {
      id: 1,
      title: "English",
      code: "en",
      icon: EnFlag,
    },
    {
      id: 2,
      title: "Turkey",
      code: "tr",
      icon: TrFlag,
    },
  ];
  // ---------- states ----------
  const [activeLng, setActiveLng] = useState("en");
  const [currentLanguage, setCurrentLanguage] = useState();
  const [isShowLanguages, setIsShowLanguages] = useState(false);

  // ---------- hooks ----------
  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  // ---------- functions ----------
  const onChangeLng = (code, languageTitle) => {
    setActiveLng(code);
    setCurrentLanguage(languageTitle);
  };
  const toggleLanguages = () => {
    setIsShowLanguages(currState => !currState)
  }

  // ---------- lifeCycle ----------
  useEffect(() => {
    i18n.changeLanguage(activeLng);
  }, [activeLng]);
  useEffect(() => {
    const currLng = lng === "en" ? "English" : "Turkey";
    setCurrentLanguage(currLng);
  }, []);

  // ---------- render jsx ----------
  return (
    <div
      className={`relative text-base flex items-center gap-x-2 px-3 cursor-pointer ${classes}`}
      onClick={toggleLanguages}
    >
      {isShowLanguages && (
        <div className="absolute bg-white w-44 p-2 rounded-11 -top-[90px] flex flex-col gap-y-2 shadow-custom-gray">
          {languages.map((language) => (
            <div
              key={language.id}
              className="flex items-center gap-x-2 py-1 px-2 rounded-11 cursor-pointer duration-100 ease-in-out hover:bg-custom-gray-light"
              onClick={() => onChangeLng(language.code, language.title)}
            >
              {" "}
              <img
                src={language.icon}
                alt="flag"
                className="w-5 h-5 rounded-11"
              />{" "}
              <p>{language.title}</p>
            </div>
          ))}
        </div>
      )}
      <img
        src={activeLng === "en" ? EnFlag : TrFlag}
        alt="flag"
        className="w-5 h-5 rounded-11"
      />
      <p>{currentLanguage}</p>
      <img src={ArrowIcon} alt="arrow" className={`duration-200 ease-in-out ${ isShowLanguages ? "rotate-180": "rotate-0" }`}/>
    </div>
  );
};
