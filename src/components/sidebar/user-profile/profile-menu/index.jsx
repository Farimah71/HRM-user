import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageBox } from "../../..";
import { useDispatch } from "react-redux";
import { logOut } from "../../../../redux/actions/auth";
import UserProfileImage from "../../../../assets/images/avatars/user.jpg";

export const ProfileMenu = ({ fullName, userEmail, isShow }) => {
  // ---------- hooks ----------
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ---------- functions ----------
  const logOutHandler = () => dispatch(logOut(navigate));

  // ---------- render jsx ----------
  return (
    <div className={`fixed bg-white duration-200 ease-in-out w-72 rounded-md shadow-custom-box inset-box translate-x-52 z-50 ${ isShow ? "visible opacity-100 translate-y-6" : "translate-y-12 opacity-0 invisible" }`}>
      <div className="flex items-start gap-x-2 border-b border-custom-gray-light p-4">
        <img
          src={UserProfileImage}
          alt="user"
          className="w-12 h-12 rounded-md"
        />
        <div className="flex flex-col gap-y-1">
          <h4 className="text-16 text-custom-dark font-bold">{fullName}</h4>
          <span className="text-14 text-custom-gray-muted">
            { userEmail }
          </span>
        </div>
      </div>
      <div>
        <ul className="flex flex-col gap-y-1 border-b border-custom-gray-light p-4">
          <li>
            <Link to="" className="block p-2 rounded-md text-16 text-custom-dark duration-200 ease-in-out hover:bg-custom-gray-light hover:text-custom-orange">{t("profile_menu.my_profile")}</Link>
          </li>
          <li>
            <Link to="" className="block p-2 rounded-md text-16 text-custom-dark duration-200 ease-in-out hover:bg-custom-gray-light hover:text-custom-orange">{t("profile_menu.my_projects")}</Link>
          </li>
          <li>
            <Link to="" className="block p-2 rounded-md text-16 text-custom-dark duration-200 ease-in-out hover:bg-custom-gray-light hover:text-custom-orange">{t("profile_menu.my_statements")}</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-y-1 p-4">
            <li className="w-full p-2 flex items-center justify-between">{t("profile_menu.language")} <LanguageBox /></li>
            <li><Link to="" className="block p-2 rounded-md text-16 text-custom-dark duration-200 ease-in-out hover:bg-custom-gray-light hover:text-custom-orange">{t("profile_menu.account_setting")}</Link></li>
            <li onClick={logOutHandler} className="cursor-pointer"><div className="block p-2 rounded-md text-16 text-custom-dark duration-200 ease-in-out hover:bg-custom-gray-light hover:text-custom-orange">{t("profile_menu.sign_out")}</div></li>
        </ul>
      </div>
    </div>
  );
};
