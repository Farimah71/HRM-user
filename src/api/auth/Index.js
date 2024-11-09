import { API_URL } from "../../config"

export const AuthApi = {
    requestLogin: `${ API_URL }/Security/LoginRequest`,
    loginWithPass: `${ API_URL }/Security/UserLogin`,
    loginWithActiveCode: `${ API_URL }/Security/MobileLogin`,

    createUserInfo: `${ API_URL }/UserInfo/Post`,
    createTenantInfo: `${ API_URL }/Tenant/Post`
}