import { API_URL } from "../../config";

export const CompanyProjectApi = {
    getAllCompanyProjects: `${ API_URL }/CompanyProject/GetAll`,
    createCompanyProject: `${ API_URL }/CompanyProject/Post`,
    getCompanyProject: `${ API_URL }/CompanyProject/Get/`,
    editCompanyProject: `${ API_URL }/CompanyProject/Put/`
}