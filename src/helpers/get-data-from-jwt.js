import jwtDecode from "jwt-decode";

export const getDataFromJwtToken = (key) => {
  if (sessionStorage.getItem("admin-info")) {
    const getData = JSON.parse(sessionStorage.getItem("admin-info"));
    const token_decoded = jwtDecode(getData.token);
    return token_decoded[key];
  } else {
    localStorage.token = "";
  }
};
