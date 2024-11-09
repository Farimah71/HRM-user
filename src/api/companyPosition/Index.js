import { API_URL } from "../../config";

export const CompanyPositionApi = {
    createCompanyPosition: `${API_URL}/CompanyPosition/Post`,
    getAllCompanyPositions: `${API_URL}/CompanyPosition/GetAll`,
    getCompanyPosition: `${API_URL}/CompanyPosition/Get/`,
    editCompanyPosition: `${API_URL}/CompanyPosition/Put/`
}