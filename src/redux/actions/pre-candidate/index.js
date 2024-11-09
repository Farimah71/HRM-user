import axios from "axios";
import { startLoading, endLoading } from "../../reducers/UI/loading/Index";
import { api } from "../../../api/Index";
import { errorNotification, successNotification } from "../../../helpers/notification";

const headers = {
  "Content-Type": "application/json",
  Authorization: localStorage.token,
};
export const getAllPreCandidates = (setState) => (dispatch) => {
  dispatch(startLoading());
  axios
    .get(api.PreCandidateApi.getAllPreCandidates, { headers })
    .then((res) => {
      if (res.data.statusCode === "200") {
        setState(res.data.data);
        dispatch(endLoading());
      } else {
        dispatch(endLoading());
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(endLoading());
    });
};

export const createPreCandidate = (data, navigate) => (dispatch) => {
  dispatch(startLoading());
  axios
    .post(api.PreCandidateApi.createPreCandidate, data, { headers })
    .then((res) => {
      if (res.data.statusCode === "200") {
        dispatch(endLoading());
        navigate("/preCandidate");
        successNotification(t("toast.success"));
      }
    })
    .catch(err => {
      dispatch(endLoading());
      errorNotification(t("toast.error"))
    })
};
