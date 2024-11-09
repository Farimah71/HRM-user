import { useTranslation } from "react-i18next";
import UserAvatar from "../../../assets/images/user-avatar.png";
import { Link } from "react-router-dom";

export const NotLogin = () => {
  // ---------- hooks ----------
  const { t } = useTranslation();

  // ---------- render jsx ----------
  return (
    <div className="h-full flex flex-col items-center justify-between">
      <div className="flex flex-col gap-y-8 text-center">
        <img src={UserAvatar} alt="avatar" />
        <p>{t("text.not_login_title")}</p>
        <Link to="/login" className="flex items-center justify-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <rect width="30" height="30" fill="#1E1E1E" />
            <g
              id="User Dashoard - Jobs (not login)"
              clip-path="url(#clip0_0_1)"
            >
              <rect
                width="1920"
                height="1080"
                transform="translate(-119 -315)"
                fill="#F2F2F2"
              />
              <g id="Menu">
                <rect
                  id="Rectangle 9"
                  x="-119"
                  y="-315"
                  width="334"
                  height="1080"
                  fill="white"
                />
                <g id="Group 166">
                  <g id="solar:logout-outline">
                    <g id="Group">
                      <path
                        id="Vector"
                        d="M15 4.0625C14.7514 4.0625 14.5129 4.16127 14.3371 4.33709C14.1613 4.5129 14.0625 4.75136 14.0625 5C14.0625 5.24864 14.1613 5.4871 14.3371 5.66291C14.5129 5.83873 14.7514 5.9375 15 5.9375C17.4035 5.9375 19.7086 6.8923 21.4082 8.59185C23.1077 10.2914 24.0625 12.5965 24.0625 15C24.0625 17.4035 23.1077 19.7086 21.4082 21.4082C19.7086 23.1077 17.4035 24.0625 15 24.0625C14.7514 24.0625 14.5129 24.1613 14.3371 24.3371C14.1613 24.5129 14.0625 24.7514 14.0625 25C14.0625 25.2486 14.1613 25.4871 14.3371 25.6629C14.5129 25.8387 14.7514 25.9375 15 25.9375C17.9008 25.9375 20.6828 24.7852 22.734 22.734C24.7852 20.6828 25.9375 17.9008 25.9375 15C25.9375 12.0992 24.7852 9.3172 22.734 7.26602C20.6828 5.21484 17.9008 4.0625 15 4.0625Z"
                        fill="#2D3C4D"
                        stroke="#2D3C4D"
                        stroke-width="0.3"
                      />
                      <path
                        id="Vector_2"
                        d="M13.0885 11.9126C12.9229 11.7348 12.8327 11.4998 12.837 11.2569C12.8413 11.014 12.9397 10.7823 13.1115 10.6105C13.2832 10.4388 13.5149 10.3404 13.7578 10.3361C14.0007 10.3318 14.2358 10.422 14.4135 10.5876L18.1635 14.3376C18.339 14.5133 18.4377 14.7516 18.4377 15.0001C18.4377 15.2485 18.339 15.4868 18.1635 15.6626L14.4135 19.4126C14.3277 19.5047 14.2242 19.5785 14.1092 19.6298C13.9942 19.681 13.87 19.7086 13.7441 19.7108C13.6183 19.713 13.4932 19.6899 13.3765 19.6427C13.2597 19.5956 13.1537 19.5254 13.0647 19.4363C12.9757 19.3473 12.9055 19.2413 12.8583 19.1245C12.8112 19.0078 12.788 18.8828 12.7902 18.7569C12.7925 18.631 12.82 18.5069 12.8713 18.3919C12.9225 18.2769 12.9964 18.1734 13.0885 18.0876L15.2385 15.9376H5.00098C4.75234 15.9376 4.51388 15.8388 4.33806 15.663C4.16225 15.4871 4.06348 15.2487 4.06348 15.0001C4.06348 14.7514 4.16225 14.513 4.33806 14.3371C4.51388 14.1613 4.75234 14.0626 5.00098 14.0626H15.2385L13.0885 11.9126Z"
                        fill="#2D3C4D"
                        stroke="#2D3C4D"
                        stroke-width="0.3"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_0_1">
                <rect
                  width="1920"
                  height="1080"
                  fill="white"
                  transform="translate(-119 -315)"
                />
              </clipPath>
            </defs>
          </svg>{" "}
          <span>{t("login.link_title")}</span>
        </Link>
      </div>
      <div className="text-center">
        <p className="text-base">{t("login.dont_account_title")}</p>
        <Link to="/signup" className="text-custom-orange text-base">
          {t("signup.link_title")}
        </Link>
      </div>
    </div>
  );
};
