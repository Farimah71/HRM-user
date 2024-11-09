export const getDataFromSessionStorage = (key) => {
    if (sessionStorage.getItem("admin-info")) {
        return JSON.parse(sessionStorage.getItem("admin-info"))[key];
    }
}