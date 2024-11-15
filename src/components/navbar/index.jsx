import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/actions/auth";
import { Button } from "..";

export const Navbar = () => {
  // ---------- hooks ----------
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ---------- functions ----------
  const logOutHandler = () => {
    dispatch(logOut(navigate));
  };

  // ---------- render jsx ----------
  return (
    <nav className="flex flex-col px-4">
      <ul className="flex flex-col gap-y-1">
        <li className="h-12">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-2 pl-5 text-16 rounded-md py-2 bg-custom-orange text-white"
                : "flex items-center gap-x-2 pl-5 text-16 rounded-md py-2 text-custom-dark"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g id="humbleicons:dashboard">
                <path
                  id="Vector"
                  d="M4 5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H9C9.26522 4 9.51957 4.10536 9.70711 4.29289C9.89464 4.48043 10 4.73478 10 5V10C10 10.2652 9.89464 10.5196 9.70711 10.7071C9.51957 10.8946 9.26522 11 9 11H5C4.73478 11 4.48043 10.8946 4.29289 10.7071C4.10536 10.5196 4 10.2652 4 10V5ZM14 5C14 4.73478 14.1054 4.48043 14.2929 4.29289C14.4804 4.10536 14.7348 4 15 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V7C20 7.26522 19.8946 7.51957 19.7071 7.70711C19.5196 7.89464 19.2652 8 19 8H15C14.7348 8 14.4804 7.89464 14.2929 7.70711C14.1054 7.51957 14 7.26522 14 7V5ZM4 16C4 15.7348 4.10536 15.4804 4.29289 15.2929C4.48043 15.1054 4.73478 15 5 15H9C9.26522 15 9.51957 15.1054 9.70711 15.2929C9.89464 15.4804 10 15.7348 10 16V19C10 19.2652 9.89464 19.5196 9.70711 19.7071C9.51957 19.8946 9.26522 20 9 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V16ZM14 13C14 12.7348 14.1054 12.4804 14.2929 12.2929C14.4804 12.1054 14.7348 12 15 12H19C19.2652 12 19.5196 12.1054 19.7071 12.2929C19.8946 12.4804 20 12.7348 20 13V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H15C14.7348 20 14.4804 19.8946 14.2929 19.7071C14.1054 19.5196 14 19.2652 14 19V13Z"
                  stroke="#FFF"
                  stroke-width="2"
                />
              </g>
            </svg>
            {t("navbar.dashboard_title")}
          </NavLink>
        </li>
        <li className="h-12">
          <NavLink
            to="/apply-jobs"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-2 pl-5 text-16 rounded-md py-2 bg-custom-orange text-white"
                : "flex items-center gap-x-2 pl-5 text-16 rounded-md py-2 text-custom-dark"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g id="fluent:form-multiple-24-regular">
                <g id="Group">
                  <path
                    id="Vector"
                    d="M6 12.25C6 11.9545 6.0582 11.6619 6.17127 11.389C6.28434 11.116 6.45008 10.8679 6.65901 10.659C6.86794 10.4501 7.11598 10.2843 7.38896 10.1713C7.66194 10.0582 7.95453 10 8.25 10C8.54547 10 8.83806 10.0582 9.11104 10.1713C9.38402 10.2843 9.63206 10.4501 9.84099 10.659C10.0499 10.8679 10.2157 11.116 10.3287 11.389C10.4418 11.6619 10.5 11.9545 10.5 12.25C10.5 12.8467 10.2629 13.419 9.84099 13.841C9.41903 14.2629 8.84674 14.5 8.25 14.5C7.65326 14.5 7.08097 14.2629 6.65901 13.841C6.23705 13.419 6 12.8467 6 12.25ZM8.25 11.5C8.05109 11.5 7.86032 11.579 7.71967 11.7197C7.57902 11.8603 7.5 12.0511 7.5 12.25C7.5 12.4489 7.57902 12.6397 7.71967 12.7803C7.86032 12.921 8.05109 13 8.25 13C8.44891 13 8.63968 12.921 8.78033 12.7803C8.92098 12.6397 9 12.4489 9 12.25C9 12.0511 8.92098 11.8603 8.78033 11.7197C8.63968 11.579 8.44891 11.5 8.25 11.5ZM11.5 12.25C11.5 12.0511 11.579 11.8603 11.7197 11.7197C11.8603 11.579 12.0511 11.5 12.25 11.5H14.75C14.9489 11.5 15.1397 11.579 15.2803 11.7197C15.421 11.8603 15.5 12.0511 15.5 12.25C15.5 12.4489 15.421 12.6397 15.2803 12.7803C15.1397 12.921 14.9489 13 14.75 13H12.25C12.0511 13 11.8603 12.921 11.7197 12.7803C11.579 12.6397 11.5 12.4489 11.5 12.25ZM6 7.75C6 7.55109 6.07902 7.36032 6.21967 7.21967C6.36032 7.07902 6.55109 7 6.75 7H14.75C14.9489 7 15.1397 7.07902 15.2803 7.21967C15.421 7.36032 15.5 7.55109 15.5 7.75C15.5 7.94891 15.421 8.13968 15.2803 8.28033C15.1397 8.42098 14.9489 8.5 14.75 8.5H6.75C6.55109 8.5 6.36032 8.42098 6.21967 8.28033C6.07902 8.13968 6 7.94891 6 7.75Z"
                    fill="#2D3C4D"
                    stroke="#2D3C4D"
                    stroke-width="0.4"
                  />
                  <path
                    id="Vector_2"
                    d="M6.25 3C5.38805 3 4.5614 3.34241 3.9519 3.9519C3.34241 4.5614 3 5.38805 3 6.25V15.25C3 16.112 3.34241 16.9386 3.9519 17.5481C4.5614 18.1576 5.38805 18.5 6.25 18.5H15.25C16.112 18.5 16.9386 18.1576 17.5481 17.5481C18.1576 16.9386 18.5 16.112 18.5 15.25V6.25C18.5 5.38805 18.1576 4.5614 17.5481 3.9519C16.9386 3.34241 16.112 3 15.25 3H6.25ZM4.5 6.25C4.5 5.284 5.284 4.5 6.25 4.5H15.25C16.216 4.5 17 5.284 17 6.25V15.25C17.0008 15.624 16.8814 15.9884 16.6594 16.2895C16.4374 16.5905 16.1246 16.8123 15.767 16.922C15.604 16.972 15.43 17 15.25 17H6.25C6.02011 17.0003 5.79243 16.9552 5.57999 16.8673C5.36755 16.7795 5.17453 16.6506 5.01198 16.488C4.84942 16.3255 4.72053 16.1324 4.63267 15.92C4.54482 15.7076 4.49974 15.4799 4.5 15.25V6.25Z"
                    fill="#2D3C4D"
                    stroke="#2D3C4D"
                    stroke-width="0.4"
                  />
                  <path
                    id="Vector_3"
                    d="M8.74977 21.0007C8.20377 21.0012 7.66646 20.864 7.18753 20.6019C6.70861 20.3397 6.30353 19.961 6.00977 19.5007H15.7498C16.7443 19.5007 17.6982 19.1056 18.4014 18.4024C19.1047 17.6991 19.4998 16.7453 19.4998 15.7507V6.01172C19.9599 6.30555 20.3386 6.71064 20.6008 7.18956C20.863 7.66847 21.0002 8.20574 20.9998 8.75172V15.7517C20.9995 17.1439 20.4463 18.479 19.4617 19.4634C18.4772 20.4477 17.142 21.0007 15.7498 21.0007H8.74977Z"
                    fill="#2D3C4D"
                    stroke="#2D3C4D"
                    stroke-width="0.4"
                  />
                </g>
              </g>
            </svg>
            {t("navbar.apply_jobs_title")}
          </NavLink>
        </li>
        <li className="h-12">
          <NavLink
            to="/job-alerts"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-2 pl-5 text-16 rounded-md py-2 bg-custom-orange text-white"
                : "flex items-center gap-x-2 pl-5 text-16 rounded-md py-2 text-custom-dark"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g id="fluent:alert-12-regular">
                <path
                  id="Vector"
                  d="M5.99997 10V13C5.99996 13.1555 5.96366 13.3089 5.89397 13.448L4.61997 16H19.384L18.108 13.448C18.0376 13.3091 18.0006 13.1557 18 13V10C18 8.4087 17.3678 6.88258 16.2426 5.75736C15.1174 4.63214 13.5913 4 12 4C10.4087 4 8.88254 4.63214 7.75733 5.75736C6.63211 6.88258 5.99997 8.4087 5.99997 10ZM7.99997 18H2.99997C2.82944 18 2.66174 17.9564 2.51282 17.8733C2.3639 17.7902 2.2387 17.6704 2.14911 17.5253C2.05952 17.3802 2.00853 17.2146 2.00098 17.0443C1.99343 16.8739 2.02957 16.7045 2.10597 16.552L3.99997 12.764V10C3.99997 7.87827 4.84282 5.84344 6.34311 4.34315C7.8434 2.84285 9.87823 2 12 2C14.1217 2 16.1565 2.84285 17.6568 4.34315C19.1571 5.84344 20 7.87827 20 10V12.764L21.894 16.552C21.9704 16.7045 22.0065 16.8739 21.999 17.0443C21.9914 17.2146 21.9404 17.3802 21.8508 17.5253C21.7612 17.6704 21.636 17.7902 21.4871 17.8733C21.3382 17.9564 21.1705 18 21 18H16C16 19.0609 15.5785 20.0783 14.8284 20.8284C14.0782 21.5786 13.0608 22 12 22C10.9391 22 9.92168 21.5786 9.17154 20.8284C8.42139 20.0783 7.99997 19.0609 7.99997 18ZM14 18H9.99997C9.99997 18.5304 10.2107 19.0391 10.5858 19.4142C10.9608 19.7893 11.4695 20 12 20C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18Z"
                  fill="#2D3C4D"
                />
              </g>
            </svg>
            {t("navbar.job_alerts_title")}
          </NavLink>
        </li>
        <li className="h-12">
          <NavLink
            to="/saved-job"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-2 pl-5 text-16 rounded-md py-2 bg-custom-orange text-white"
                : "flex items-center gap-x-2 pl-5 text-16 rounded-md py-2 text-custom-dark"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g id="gg:bookmark">
                <path
                  id="Vector"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 20H17.172L12.707 15.535C12.5195 15.3475 12.2652 15.2422 12 15.2422C11.7348 15.2422 11.4805 15.3475 11.293 15.535L6.828 20H5V7C5 6.20435 5.31607 5.44129 5.87868 4.87868C6.44129 4.31607 7.20435 4 8 4H16C16.7956 4 17.5587 4.31607 18.1213 4.87868C18.6839 5.44129 19 6.20435 19 7V20ZM17 7C17 6.73478 16.8946 6.48043 16.7071 6.29289C16.5196 6.10536 16.2652 6 16 6H8C7.73478 6 7.48043 6.10536 7.29289 6.29289C7.10536 6.48043 7 6.73478 7 7V17L9.879 14.121C10.4416 13.5586 11.2045 13.2426 12 13.2426C12.7955 13.2426 13.5584 13.5586 14.121 14.121L17 17V7Z"
                  fill="#2D3C4D"
                />
              </g>
            </svg>
            {t("navbar.saved_job_title")}
          </NavLink>
        </li>
        <li className="h-12">
          <NavLink
            to="/recomended-jobs"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-2 pl-5 text-16 rounded-md py-2 bg-custom-orange text-white"
                : "flex items-center gap-x-2 pl-5 text-16 rounded-md py-2 text-custom-dark"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g id="iconoir:suggestion">
                <g id="Group">
                  <path
                    id="Vector"
                    d="M3 3.6C3 3.44087 3.06321 3.28826 3.17574 3.17574C3.28826 3.06321 3.44087 3 3.6 3H20.4C20.5591 3 20.7117 3.06321 20.8243 3.17574C20.9368 3.28826 21 3.44087 21 3.6V17.4C21 17.4788 20.9845 17.5568 20.9543 17.6296C20.9242 17.7024 20.88 17.7685 20.8243 17.8243C20.7685 17.88 20.7024 17.9242 20.6296 17.9543C20.5568 17.9845 20.4788 18 20.4 18H16.26C16.1779 17.9999 16.0967 18.0166 16.0214 18.0491C15.9461 18.0816 15.8782 18.1292 15.822 18.189L12.437 21.786C12.3809 21.8456 12.3132 21.8931 12.238 21.9256C12.1629 21.9581 12.0819 21.9749 12 21.9749C11.9181 21.9749 11.8371 21.9581 11.762 21.9256C11.6868 21.8931 11.6191 21.8456 11.563 21.786L8.178 18.189C8.1218 18.1292 8.05393 18.0816 7.97859 18.0491C7.90325 18.0166 7.82205 17.9999 7.74 18H3.6C3.44087 18 3.28826 17.9368 3.17574 17.8243C3.06321 17.7117 3 17.5591 3 17.4V3.6Z"
                    stroke="#2D3C4D"
                    stroke-width="2"
                  />
                  <path
                    id="Vector_2"
                    d="M12 7L13.425 9.575L16 11L13.425 12.425L12 15L10.575 12.425L8 11L10.575 9.575L12 7Z"
                    stroke="#2D3C4D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>
            {t("navbar.recommended_jobs_title")}
          </NavLink>
        </li>
        <li className="h-12">
          <NavLink
            to="/my-cv"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-2 pl-5 text-16 rounded-md py-2 bg-custom-orange text-white"
                : "flex items-center gap-x-2 pl-5 text-16 rounded-md py-2 text-custom-dark"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g id="solar:documents-minimalistic-linear">
                <g id="Group">
                  <path
                    id="Vector"
                    d="M5 8C5 5.172 5 3.757 5.879 2.879C6.757 2 8.172 2 11 2H13C15.828 2 17.243 2 18.121 2.879C19 3.757 19 5.172 19 8V16C19 18.828 19 20.243 18.121 21.121C17.243 22 15.828 22 13 22H11C8.172 22 6.757 22 5.879 21.121C5 20.243 5 18.828 5 16V8Z"
                    stroke="#2D3C4D"
                    stroke-width="2"
                  />
                  <path
                    id="Vector_2"
                    d="M10.1339 7.1335C10.2768 7.13787 10.419 7.11352 10.5522 7.06189C10.6854 7.01027 10.8069 6.93241 10.9095 6.83294C11.012 6.73348 11.0936 6.61443 11.1492 6.48286C11.2049 6.35128 11.2336 6.20987 11.2336 6.067C11.2336 5.92413 11.2049 5.78272 11.1492 5.65114C11.0936 5.51957 11.012 5.40052 10.9095 5.30106C10.8069 5.20159 10.6854 5.12373 10.5522 5.07211C10.419 5.02048 10.2768 4.99613 10.1339 5.0005C9.85675 5.00899 9.59374 5.12507 9.40067 5.32415C9.20759 5.52324 9.09961 5.78967 9.09961 6.067C9.09961 6.34433 9.20759 6.61076 9.40067 6.80985C9.59374 7.00893 9.85675 7.12501 10.1339 7.1335Z"
                    fill="#2D3C4D"
                  />
                  <path
                    id="Vector_3"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.266 9.44328C12.266 8.30928 11.311 7.48828 10.133 7.48828C8.955 7.48828 8 8.30828 8 9.44328V9.97728C8.00026 10.0715 8.03789 10.1618 8.10462 10.2284C8.17136 10.2949 8.26176 10.3323 8.356 10.3323H11.911C12.0051 10.332 12.0952 10.2945 12.1617 10.228C12.2283 10.1615 12.2657 10.0714 12.266 9.97728V9.44328Z"
                    fill="#2D3C4D"
                  />
                  <path
                    id="Vector_4"
                    d="M9 13H15M9 17H12"
                    stroke="#2D3C4D"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </g>
              </g>
            </svg>
            {t("navbar.my_cv_title")}
          </NavLink>
        </li>
        <li className="rounded-11 h-12">
          <NavLink
            to="/timesheet"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-2 pl-5 text-16 rounded-md py-2 bg-custom-orange text-white"
                : "flex items-center gap-x-2 pl-5 text-16 rounded-md py-2 text-custom-dark"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g id="fluent-mdl2:time-sheet">
                <path
                  id="Subtract"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 3H3C1.89543 3 1 3.89543 1 5V21C1 22.1046 1.89543 23 3 23H21C22.1046 23 23 22.1046 23 21V5C23 3.89543 22.1046 3 21 3H19V5H21V21H3L3 5H5V3Z"
                  fill="#2D3C4D"
                />
                <rect
                  id="Rectangle 127"
                  x="7"
                  y="1"
                  width="10"
                  height="6"
                  rx="1"
                  stroke="#2D3C4D"
                  stroke-width="2"
                />
                <circle
                  id="Ellipse 47"
                  cx="12"
                  cy="14"
                  r="4"
                  stroke="#2D3C4D"
                  stroke-width="2"
                />
                <line
                  id="Line 58"
                  x1="11.75"
                  y1="12"
                  x2="11.75"
                  y2="14"
                  stroke="#2D3C4D"
                  stroke-width="1.5"
                />
                <line
                  id="Line 59"
                  x1="14"
                  y1="13.75"
                  x2="11"
                  y2="13.75"
                  stroke="#2D3C4D"
                  stroke-width="1.5"
                />
              </g>
            </svg>
            {t("navbar.timesheet_title")}
          </NavLink>
        </li>
        <li className="rounded-11 h-12">
          <NavLink
            to="/cv-creator"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-2 pl-5 text-16 rounded-md py-2 bg-custom-orange text-white"
                : "flex items-center gap-x-2 pl-5 text-16 rounded-md py-2 text-custom-dark"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g id="fluent:wand-16-regular">
                <path
                  id="Vector"
                  d="M21.9372 1.625C22.1526 1.625 22.3593 1.7106 22.5117 1.86298C22.6641 2.01535 22.7497 2.22201 22.7497 2.4375V3.25H23.5622C23.7776 3.25 23.9843 3.3356 24.1367 3.48798C24.2891 3.64035 24.3747 3.84701 24.3747 4.0625C24.3747 4.27799 24.2891 4.48465 24.1367 4.63702C23.9843 4.7894 23.7776 4.875 23.5622 4.875H22.7497V5.6875C22.7497 5.90299 22.6641 6.10965 22.5117 6.26202C22.3593 6.4144 22.1526 6.5 21.9372 6.5C21.7217 6.5 21.515 6.4144 21.3626 6.26202C21.2103 6.10965 21.1247 5.90299 21.1247 5.6875V4.875H20.3122C20.0967 4.875 19.89 4.7894 19.7376 4.63702C19.5853 4.48465 19.4997 4.27799 19.4997 4.0625C19.4997 3.84701 19.5853 3.64035 19.7376 3.48798C19.89 3.3356 20.0967 3.25 20.3122 3.25H21.1247V2.4375C21.1247 2.22201 21.2103 2.01535 21.3626 1.86298C21.515 1.7106 21.7217 1.625 21.9372 1.625ZM5.68716 4.875C5.90265 4.875 6.10931 4.9606 6.26168 5.11298C6.41406 5.26535 6.49966 5.47201 6.49966 5.6875V6.5H7.31216C7.52765 6.5 7.73431 6.5856 7.88668 6.73798C8.03906 6.89035 8.12466 7.09701 8.12466 7.3125C8.12466 7.52799 8.03906 7.73465 7.88668 7.88702C7.73431 8.0394 7.52765 8.125 7.31216 8.125H6.49966V8.9375C6.49966 9.15299 6.41406 9.35965 6.26168 9.51202C6.10931 9.6644 5.90265 9.75 5.68716 9.75C5.47167 9.75 5.26501 9.6644 5.11263 9.51202C4.96026 9.35965 4.87466 9.15299 4.87466 8.9375V8.125H4.06216C3.84667 8.125 3.64001 8.0394 3.48763 7.88702C3.33526 7.73465 3.24966 7.52799 3.24966 7.3125C3.24966 7.09701 3.33526 6.89035 3.48763 6.73798C3.64001 6.5856 3.84667 6.5 4.06216 6.5H4.87466V5.6875C4.87466 5.47201 4.96026 5.26535 5.11263 5.11298C5.26501 4.9606 5.47167 4.875 5.68716 4.875ZM20.3122 19.5C20.5276 19.5 20.7343 19.4144 20.8867 19.262C21.0391 19.1097 21.1247 18.903 21.1247 18.6875C21.1247 18.472 21.0391 18.2653 20.8867 18.113C20.7343 17.9606 20.5276 17.875 20.3122 17.875H19.4997V17.0625C19.4997 16.847 19.4141 16.6403 19.2617 16.488C19.1093 16.3356 18.9026 16.25 18.6872 16.25C18.4717 16.25 18.265 16.3356 18.1126 16.488C17.9603 16.6403 17.8747 16.847 17.8747 17.0625V17.875H17.0622C16.8467 17.875 16.64 17.9606 16.4876 18.113C16.3353 18.2653 16.2497 18.472 16.2497 18.6875C16.2497 18.903 16.3353 19.1097 16.4876 19.262C16.64 19.4144 16.8467 19.5 17.0622 19.5H17.8747V20.3125C17.8747 20.528 17.9603 20.7347 18.1126 20.887C18.265 21.0394 18.4717 21.125 18.6872 21.125C18.9026 21.125 19.1093 21.0394 19.2617 20.887C19.4141 20.7347 19.4997 20.528 19.4997 20.3125V19.5H20.3122ZM14.1859 7.41488C14.7694 6.83155 15.5608 6.50392 16.3859 6.50408C17.211 6.50423 18.0023 6.83214 18.5856 7.41569C19.1689 7.99923 19.4965 8.7906 19.4964 9.6157C19.4962 10.4408 19.1683 11.232 18.5848 11.8154L6.93353 23.4666C6.34999 24.05 5.55862 24.3776 4.73352 24.3774C3.90842 24.3773 3.11717 24.0494 2.53385 23.4658C1.95052 22.8823 1.62289 22.0909 1.62305 21.2658C1.6232 20.4407 1.95112 19.6495 2.53466 19.0661L14.1859 7.41488ZM13.4059 10.4926L3.68353 20.215C3.40491 20.4936 3.24838 20.8715 3.24838 21.2656C3.24838 21.6596 3.40491 22.0375 3.68353 22.3161C3.96216 22.5948 4.34006 22.7513 4.7341 22.7513C5.12813 22.7513 5.50603 22.5948 5.78466 22.3161L15.507 12.5938L13.4059 10.4926ZM16.6559 11.4449L17.4359 10.6649C17.5765 10.5275 17.6884 10.3636 17.7651 10.1827C17.8419 10.0018 17.8819 9.80742 17.883 9.61089C17.8841 9.41437 17.8462 9.21958 17.7715 9.03782C17.6967 8.85605 17.5867 8.69093 17.4476 8.55201C17.3086 8.4131 17.1434 8.30316 16.9616 8.22856C16.7798 8.15396 16.5849 8.11619 16.3884 8.11743C16.1919 8.11867 15.9976 8.15891 15.8167 8.2358C15.6358 8.31269 15.472 8.42471 15.3348 8.56537L14.5548 9.34538L16.6559 11.4449Z"
                  fill="#2D3C4D"
                  stroke="#2D3C4D"
                  stroke-width="0.4"
                />
              </g>
            </svg>
            {t("navbar.CV_creator_title")}
          </NavLink>
        </li>
        <li className="rounded-11 h-12">
          <NavLink
            to="/messages"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-2 pl-5 text-16 rounded-md py-2 bg-custom-orange text-white"
                : "flex items-center gap-x-2 pl-5 text-16 rounded-md py-2 text-custom-dark"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g id="ri:message-3-line">
                <path
                  id="Vector"
                  d="M2 8.99401C1.99947 8.20621 2.15435 7.42605 2.45577 6.69819C2.75718 5.97034 3.19921 5.30909 3.75655 4.75231C4.31388 4.19553 4.97558 3.75416 5.70373 3.45348C6.43189 3.15279 7.21221 2.99869 8 3.00001H16C19.313 3.00001 22 5.69501 22 8.99401V21H8C4.687 21 2 18.305 2 15.006V8.99401ZM20 19V8.99401C19.9974 7.93451 19.5749 6.91925 18.8251 6.17063C18.0754 5.42201 17.0595 5.00106 16 5.00001H8C7.47485 4.99869 6.9546 5.10106 6.4691 5.30123C5.98359 5.50141 5.54238 5.79546 5.17076 6.16652C4.79914 6.53758 4.50443 6.97835 4.30353 7.46356C4.10262 7.94876 3.99947 8.46886 4 8.99401V15.006C4.00265 16.0655 4.42511 17.0808 5.17486 17.8294C5.9246 18.578 6.9405 18.999 8 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z"
                  fill="#2D3C4D"
                />
              </g>
            </svg>
            {t("navbar.messages_title")}
          </NavLink>
        </li>
        <li className="rounded-11 h-12">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-2 pl-5 text-16 rounded-md py-2 bg-custom-orange text-white"
                : "flex items-center gap-x-2 pl-5 text-16 rounded-md py-2 text-custom-dark"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g id="ep:setting">
                <path
                  id="Vector"
                  d="M14.0794 1.5C14.2382 1.50001 14.3929 1.55041 14.5212 1.64394C14.6495 1.73748 14.7448 1.86933 14.7934 2.0205L15.6184 4.584C15.9649 4.7535 16.2964 4.944 16.6129 5.1585L19.2469 4.5915C19.4022 4.55834 19.564 4.57534 19.7091 4.64003C19.8541 4.70473 19.9748 4.81379 20.0539 4.9515L22.1329 8.55C22.2123 8.68763 22.2459 8.84693 22.2289 9.0049C22.212 9.16288 22.1452 9.31139 22.0384 9.429L20.2309 11.424C20.2572 11.8065 20.2572 12.1905 20.2309 12.573L22.0384 14.571C22.1452 14.6886 22.212 14.8371 22.2289 14.9951C22.2459 15.1531 22.2123 15.3124 22.1329 15.45L20.0539 19.05C19.9746 19.1874 19.8538 19.2962 19.7088 19.3606C19.5638 19.425 19.4021 19.4418 19.2469 19.4085L16.6129 18.8415C16.2979 19.0545 15.9649 19.2465 15.6199 19.416L14.7934 21.9795C14.7448 22.1307 14.6495 22.2625 14.5212 22.3561C14.3929 22.4496 14.2382 22.5 14.0794 22.5H9.92141C9.76262 22.5 9.60793 22.4496 9.47962 22.3561C9.35131 22.2625 9.256 22.1307 9.20741 21.9795L8.38391 19.4175C8.03834 19.2485 7.70502 19.0555 7.38641 18.84L4.75391 19.4085C4.5986 19.4417 4.43678 19.4247 4.29176 19.36C4.14673 19.2953 4.02598 19.1862 3.94691 19.0485L1.86791 15.45C1.78852 15.3124 1.75489 15.1531 1.77188 14.9951C1.78886 14.8371 1.85558 14.6886 1.96241 14.571L3.76991 12.573C3.74372 12.1914 3.74372 11.8086 3.76991 11.427L1.96241 9.429C1.85558 9.31139 1.78886 9.16288 1.77188 9.0049C1.75489 8.84693 1.78852 8.68763 1.86791 8.55L3.94691 4.95C4.0262 4.81256 4.14704 4.70381 4.29205 4.63939C4.43706 4.57497 4.59876 4.55821 4.75391 4.5915L7.38641 5.16C7.70441 4.9455 8.03741 4.752 8.38391 4.5825L9.20891 2.0205C9.25734 1.86982 9.3522 1.73832 9.47991 1.64482C9.60762 1.55133 9.76163 1.50064 9.91991 1.5H14.0779H14.0794ZM13.5304 3H10.4704L9.61841 5.6505L9.04391 5.931C8.76148 6.06921 8.48885 6.22657 8.22791 6.402L7.69691 6.762L4.97291 6.174L3.44291 8.826L5.31041 10.893L5.26541 11.529C5.24385 11.8426 5.24385 12.1574 5.26541 12.471L5.31041 13.107L3.43991 15.174L4.97141 17.826L7.69541 17.2395L8.22641 17.598C8.48735 17.7734 8.75998 17.9308 9.04241 18.069L9.61691 18.3495L10.4704 21H13.5334L14.3884 18.348L14.9614 18.069C15.2435 17.9311 15.5157 17.7737 15.7759 17.598L16.3054 17.2395L19.0309 17.826L20.5609 15.174L18.6919 13.107L18.7369 12.471C18.7585 12.1569 18.7585 11.8416 18.7369 11.5275L18.6919 10.8915L20.5624 8.826L19.0309 6.174L16.3054 6.759L15.7759 6.402C15.5157 6.22622 15.2435 6.06884 14.9614 5.931L14.3884 5.652L13.5319 3H13.5304ZM12.0004 7.5C13.1939 7.5 14.3385 7.97411 15.1824 8.81802C16.0263 9.66193 16.5004 10.8065 16.5004 12C16.5004 13.1935 16.0263 14.3381 15.1824 15.182C14.3385 16.0259 13.1939 16.5 12.0004 16.5C10.8069 16.5 9.66234 16.0259 8.81843 15.182C7.97451 14.3381 7.50041 13.1935 7.50041 12C7.50041 10.8065 7.97451 9.66193 8.81843 8.81802C9.66234 7.97411 10.8069 7.5 12.0004 7.5ZM12.0004 9C11.2048 9 10.4417 9.31607 9.87909 9.87868C9.31648 10.4413 9.00041 11.2044 9.00041 12C9.00041 12.7956 9.31648 13.5587 9.87909 14.1213C10.4417 14.6839 11.2048 15 12.0004 15C12.7961 15 13.5591 14.6839 14.1217 14.1213C14.6843 13.5587 15.0004 12.7956 15.0004 12C15.0004 11.2044 14.6843 10.4413 14.1217 9.87868C13.5591 9.31607 12.7961 9 12.0004 9Z"
                  fill="#2D3C4D"
                  stroke="#2D3C4D"
                  stroke-width="0.5"
                />
              </g>
            </svg>
            {t("navbar.settings_title")}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
