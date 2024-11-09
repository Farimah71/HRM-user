import axios from "axios";
import { api } from "../../../api/Index";
import { startLoading, endLoading } from "../../reducers/UI/loading/Index";
import {
  successNotification,
  errorNotification,
} from "../../../helpers/notification";
import { setEditInfo } from "../../reducers/company-project"
import { t } from "i18next";

const headers = {
  "Content-Type": "application/json",
  Authorization: localStorage.token
};
export const getAllCompanyProjects = (setState) => (dispatch) => {
  dispatch(startLoading());
  axios
    .get(api.CompanyProjectApi.getAllCompanyProjects, { headers })
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

export const createCompanyProject = (data, navigate) => (dispatch) => {
  dispatch(startLoading());
  axios
    .post(api.CompanyProjectApi.createCompanyProject, data, { headers })
    .then((res) => {
      if (res.data.statusCode === "200") {
        dispatch(endLoading());
        navigate("/companyProject");
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

export const getByIdCompanyProject = (id) => (dispatch) => {
  dispatch(startLoading());
  axios
    .get(api.CompanyProjectApi.getCompanyProject + id, { headers })
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

export const editCompanyProject = (id, data, navigate) => (dispatch) => {
  dispatch(startLoading());
  axios
    .put(api.CompanyProjectApi.editCompanyProject + id, data, { headers })
    .then((res) => {
      if (res.data.statusCode === "200") {
        dispatch(endLoading());
        successNotification(t("notification.data_success"));
        navigate("/companyProject");
      } else {
        dispatch(endLoading());
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(endLoading());
    });
};
