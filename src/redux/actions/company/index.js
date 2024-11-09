import axios from "axios";
import { api } from "../../../api/Index";
import { startLoading, endLoading } from "../../reducers/UI/loading/Index";
import {
  successNotification,
  errorNotification,
} from "../../../helpers/notification";
import { setEditInfo } from "../../reducers/company";
import { t } from "i18next";

const headers = {
  "Content-Type": "application/json",
  Authorization: localStorage.token,
};

export const getAllCompanies = (setState) => (dispatch) => {
  dispatch(startLoading());
  axios
    .get(api.CompanyApi.getAllCompanies, { headers })
    .then((res) => {
      if (res.data.statusCode === "200") {
        dispatch(endLoading());
        setState(res.data);
      }
    })
    .catch((err) => {
      dispatch(startLoading());
      console.log(err);
    });
};

export const createCompany = (data, navigate) => (dispatch) => {
  dispatch(startLoading());
  axios
    .post(api.CompanyApi.createCompany, data, { headers })
    .then((res) => {
      if (res.data.statusCode === "200") {
        dispatch(endLoading());
        navigate("/company");
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

export const getByIdCompany = (id) => (dispatch) => {
  dispatch(startLoading());
  axios
    .get(api.CompanyApi.getCompany + id, { headers })
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

export const editCompany = (id, data, navigate) => (dispatch) => {
  dispatch(startLoading());
  axios
    .put(api.CompanyApi.editCompany + id, data, { headers })
    .then((res) => {
      if (res.data.statusCode === "200") {
        dispatch(endLoading());
        successNotification(t("notification.data_success"));
        navigate("/company");
      } else {
        dispatch(endLoading());
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(endLoading());
    });
};

export const getSuggestionCompany = (options, setData) => (dispatch) => {
  dispatch(startLoading());
  axios
    .post(api.CompanyApi.getSuggestionCompany, options, { headers })
    .then((res) => {
      if (res.data.statusCode === "200") {
        setData(res.data.data);
        dispatch(endLoading())
      } else {
        console.log(res)
        dispatch(endLoading());
      }
    })
    .catch(() => {
      dispatch(endLoading());
    });
};
