import { toast } from "react-toastify";

export const successNotification = (title) => {
  return toast.success(title, {
    position: "bottom-left",
    theme: "colored",
  });
};
export const errorNotification = (title) => {
  return toast.error(title, {
    position: "bottom-left",
    theme: "colored",
  });
};
