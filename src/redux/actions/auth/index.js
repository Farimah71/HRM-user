import axios from "axios";
import { api } from "../../../api/Index";
import { startLoading, endLoading } from "../../reducers/UI/loading/Index";
import {
  setRequestLoginInfo,
  setLoginInfo,
  setUserInfoSignup,
  setLogOut,
  setStep,
} from "../../reducers/auth";
import { saveDataToLocalStorage } from "../../../helpers/save-data-to-localstorage";
import { errorNotification } from "../../../helpers/notification";
import { t } from "i18next";

const headers = {
  "Content-Type": "application/json",
};
export const requestLogin = (data) => (dispatch) => {
  dispatch(startLoading());
  axios
    .post(api.AuthApi.requestLogin, data, { headers })
    .then((res) => {
      if (res.data.statusCode === "200") {
        dispatch(setRequestLoginInfo(res.data.data));
        dispatch(endLoading());
      } else if (
        res.data.statusCode === "400" &&
        res.data.message[0] === "USERNOTFOUND"
      ) {
        errorNotification(t("error.user_not_found"));
        dispatch(endLoading());
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(endLoading());
    });
};

export const loginWithPass = (data, navigate) => (dispatch) => {
  dispatch(startLoading());
  console.log(data);
  axios
    .post(api.AuthApi.loginWithPass, data, { headers })
    .then((res) => {
      if (res.data.statusCode === "200") {
        localStorage.token = `bearer ${res.data.data.token}`;
        sessionStorage.setItem("admin-info", JSON.stringify(res.data.data));
        dispatch(setLoginInfo(res.data.data));
        dispatch(endLoading());
        navigate("/");
      } else if (
        res.data.statusCode === "400" &&
        res.data.message[0] === "UsernameOrPasswordIsInvalid"
      ) {
        errorNotification(t("error.password_is_invalid"));
        dispatch(endLoading());
      }
      dispatch(endLoading());
    })
    .catch((err) => {
      console.log(err);
      dispatch(endLoading());
    });
};

export const loginWithActiveCode = (data, navigate) => (dispatch) => {
  dispatch(startLoading());
  console.log(data);
  axios
    .post(api.AuthApi.loginWithActiveCode, data, { headers })
    .then((res) => {
      if (res.data.statusCode === "200") {
        localStorage.token = `bearer ${res.data.data.token}`;
        sessionStorage.setItem("admin-info", JSON.stringify(res.data.data));
        dispatch(setLoginInfo(res.data.data));
        dispatch(endLoading());
        navigate("/");
      } else if (
        res.data.statusCode === "400" &&
        res.data.message[0] === "UsernameOrPasswordIsInvalid"
      ) {
        errorNotification(t("error.password_is_invalid"));
        dispatch(endLoading());
      }
      dispatch(endLoading());
    })
    .catch((err) => {
      console.log(err);
      dispatch(endLoading());
    });
};


export const setUserInfo = (dataSend, dataCache, status) => (dispatch) => {
  dispatch(startLoading());
  axios
    .post(api.AuthApi.createUserInfo, dataSend, { headers })
    .then((res) => {
      if (res.data.statusCode === "200") {
        saveDataToLocalStorage("signupFormPersonal", dataCache);
        dispatch(setUserInfoSignup(res.data.data));
        status(true);
        dispatch(endLoading());
      }
    })
    .catch(() => {
      status(false);
      dispatch(endLoading());
    });
};

export const setTenantInfo = (data, navigate) => (dispatch) => {
  console.log(data);
  dispatch(startLoading());
  axios
    .post(api.AuthApi.createTenantInfo, data, { headers })
    .then((res) => {
      if (res.data.statusCode === "200") {
        localStorage.removeItem("signupFormPersonal");
        dispatch(endLoading());
        navigate("/login");
      } else {
        dispatch(endLoading());
      }
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      dispatch(endLoading());
    });
};

export const logOut = (navigate) => (dispatch) => {
    dispatch(setLogOut());
    navigate("/login")
}

export const setStepForm = (step) => (dispatch) => {
  dispatch(setStep(step))
}
