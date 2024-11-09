import TimesIcon from "../../assets/images/times.png";

export const Tags = ({ tags }) => {
  // ---------- render jsx ----------
  return (
    <div className="flex items-center gap-x-4">
      {tags?.map((tag) => (
        <div className="relative p-3 bg-white rounded-10">
          <p className="text-14">{tag}</p>
          <span className="absolute -top-2 -right-2 cursor-pointer bg-custom-gray-muted rounded-md">
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.5"
                x="6"
                y="17.3137"
                width="16"
                height="2"
                rx="1"
                transform="rotate(-45 6 17.3137)"
                fill="#fff"
              ></rect>
              <rect
                x="7.41422"
                y="6"
                width="16"
                height="2"
                rx="1"
                transform="rotate(45 7.41422 6)"
                fill="#fff"
              ></rect>
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
};
