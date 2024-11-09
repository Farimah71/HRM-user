import { useState } from "react";
import { useTranslation } from "react-i18next";
// ++++++++++ images import ++++++++++
import EmptyFileIcon from "../../../../assets/images/no-image.png";

export const UploadFile = ({ field, form, fileFormats, size, label }) => {
  // ---------- states ----------
  const [avatarSrc, setAvatarSrc] = useState("");
  const [avatarName, setAvatarName] = useState("");

  // ---------- hooks ----------
  const { t } = useTranslation();

  // ---------- variables ----------
  const { name } = field;
  const { setFieldValue } = form;

  // ---------- functions ----------
  const onChangeImage = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const avatarUrl = event.target.result.toString();
      setAvatarSrc(avatarUrl);
      setFieldValue(name, avatarUrl)
    };
    fileReader.readAsDataURL(file);
    fileNameHandler(e);
  };
  const fileNameHandler = (file) => {
    const fileNameArr = file.currentTarget.value.split("\\");
    const fileName = fileNameArr[fileNameArr.length - 1];
    if (fileName.length > 15) {
      shortFileNameHandler(fileName);
    } else {
      setAvatarName(fileName);
    }
  };
  const shortFileNameHandler = (fileName) => {
    const shortFileName = fileName.split(".")[0].slice(0, 9);
    setAvatarName(`(${shortFileName}...).${fileName.split(".")[1]}`);
  }

  // ---------- render jsx ----------
  return (
    <div className="w-full flex items-center gap-x-8">
      <div className="w-28">
        <img
          src={avatarSrc ? avatarSrc : EmptyFileIcon}
          alt="avatar-image"
          className="bg-white rounded-30 w-full"
        />
      </div>
      <div className="flex flex-col gap-y-4">
        <label
          htmlFor={name}
          className="uppercase text-14 p-2 bg-white border border-custom-orange rounded-10 text-custom-orange cursor-pointer text-center"
        >
          {label}
        </label>
        <input
          type="file"
          id={name}
          hidden
          onChange={(e) => onChangeImage(e)}
          value={undefined}
        />
        {avatarName ? (
          avatarName
        ) : fileFormats && size ? (
          <p className="text-custom-dark text-opacity-30">
            {fileFormats} {t("input.up_to_title")} {size}
          </p>
        ) : null}
      </div>
    </div>
  );
};
