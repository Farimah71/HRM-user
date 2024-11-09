export const Input = ({
  field,
  placeholder,
  label,
  type = "text",
  classes,
  disabled,
}) => {
  // ---------- render jsx ----------
  return (
    <>
      {type === "textarea" ? (
        <div>
          <label className="text-16 text-custom-dark">
            {label}
          </label>
          <textarea
            {...field}
            className={`w-full bg-white resize-none border border-custom-gray rounded-md text-16 placeholder:text-14 text-custom-gray-muted p-2 mt-2 outline-none ${classes}`}
            placeholder={placeholder}
            rows={5}
            disabled={disabled}
          ></textarea>
        </div>
      ) : (
        <div className="w-full">
          <label className="text-16 text-custom-dark">
            {label}
          </label>
          <input
            {...field}
            type={type}
            placeholder={placeholder}
            className={`w-full h-10 bg-white rounded-md border border-custom-gray text-custom-dark text-16 placeholder:text-14 placeholder:text-custom-gray-muted p-2 outline-none ${classes} ${
              label && "mt-2"
            }`}
            disabled={disabled}
          />
        </div>
      )}
    </>
  );
};
