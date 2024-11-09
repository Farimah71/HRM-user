import axios from "axios";
import { api } from "../../../api/Index";
import { startLoading, endLoading } from "../../reducers/UI/loading/Index";
import {
  successNotification,
  errorNotification,
} from "../../../helpers/notification";
import { setEditInfo } from "../../reducers/company-position"
import { t } from "i18next";

const headers = {
  "Content-Type": "application/json",
  Authorization: localStorage.token
};
export const getAllCompanyPositions = (setState) => (dispatch) => {
  dispatch(startLoading());
  axios
    .get(api.CompanyPositionApi.getAllCompanyPositions, { headers })
    .then((res) => {
      if (res.data.statusCode === "200") {
        dispatch(endLoading());
        setState(res.data);
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(endLoading());
    });
};

export const createCompanyPosition = (data, navigate) => (dispatch) => {
  dispatch(startLoading());
  axios
    .post(api.CompanyPositionApi.createCompanyPosition, data, { headers })
    .then((res) => {
      if (res.data.statusCode === "200") {
        dispatch(endLoading());
        navigate("/companyPosition");
        successNotification(t("notification.data_success"));
      } else {
        dispatch(endLoading());
        console.log(res.data);
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(endLoading());
    });
};

export const getByIdCompanyPosition = (id) => (dispatch) => {
  dispatch(startLoading());
  axios
    .get(api.CompanyPositionApi.getCompanyPosition + id, { headers })
    .then((res) => {
      if (res.data.statusCode === "200") {
        dispatch(setEditInfo(res.data.data));
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

export const editCompanyPosition = (id, data, navigate) => (dispatch) => {
  dispatch(startLoading());
  axios
    .put(api.CompanyPositionApi.editCompanyPosition + id, data, { headers })
    .then((res) => {
      if (res.data.statusCode === "200") {
        dispatch(endLoading());
        successNotification(t("notification.data_success"));
        navigate("/companyPosition");
      } else {
        dispatch(endLoading());
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(endLoading());
    });
};
