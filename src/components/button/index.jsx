import { ClipLoader } from "react-spinners";

export const Button = ({
  children,
  title,
  type,
  classes,
  theme,
  icon,
  loading,
  onClick,
}) => {
  // ---------- functions ----------
  const clickHandler = () => {
    type === "button" && onClick()
};

  // ---------- render jsx ----------
  return (
    <button
      type={type}
      className={`h-10 px-6 rounded-md text-16 duration-150 ease-in-out flex items-center justify-center gap-x-2 ${
        theme === "light"
          ? "bg-custom-orange-light border-none text-custom-orange hover:bg-custom-orange hover:text-white"
          : "bg-custom-orange text-white"
      } ${classes}`}
      onClick={clickHandler}
    >
      {!loading && children}
      {title && !loading && <span>{title}</span>}
      {icon && !loading && <img src={icon} alt="icon" />}
      {loading && <ClipLoader color="#fff" size={22} />}
    </button>
  );
};
