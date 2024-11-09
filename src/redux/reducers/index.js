import { combineReducers } from "redux";

import authSlice from "./auth/index";
import loadingSlice from "./ui/loading/index";
import companySlice from "./company/index";
import companyProjectSlice from "./company-project/index";
import companyPositionSlice from "./company-position/index";

export const reducers = combineReducers({
    authSlice,
    loadingSlice,
    companySlice,
    companyProjectSlice,
    companyPositionSlice
});