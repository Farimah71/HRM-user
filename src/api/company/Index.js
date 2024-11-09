import { API_URL } from "../../config";

export const CompanyApi = {
    createCompany: `${ API_URL }/Company/Post`,
    getAllCompanies: `${ API_URL }/Company/GetAll`,
    getCompany: `${ API_URL }/Company/Get/`,
    editCompany: `${ API_URL }/Company/Put/`,
    getSuggestionCompany: `${ API_URL }/Company/Suggestion`
}