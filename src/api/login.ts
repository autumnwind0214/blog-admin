import { http } from "@/utils/http";

const prefix = "/auth-api";

export type UserResult = {
  /** 用户名 */
  username: string;
  /** 当前登陆用户的角色 */
  roles: Array<string>;
  /** `token` */
  accessToken: string;
  /** 用于调用刷新`accessToken`的接口时所需的`token` */
  refreshToken: string;
  /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
  expires: Date;
};

export type RefreshTokenResult = {
  /** `token` */
  accessToken: string;
  /** 用于调用刷新`accessToken`的接口时所需的`token` */
  refreshToken: string;
  /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
  expires: Date;
};

export type Captcha = {
  captchaId: string;
  code: string;
  imageData: string;
};

/** 登录 */
export const getLogin = (data?: object) => {
  return http.post(`${prefix}/login`, {
    data,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};

/** 刷新token */
export const refreshTokenApi = (data?: object) => {
  return http.request<RefreshTokenResult>("post", "/refresh-token", { data });
};

// 获取图形验证码
export const getCaptcha = () => {
  return http.request<Captcha>("get", `${prefix}/getCaptcha`, {});
};

export const getAccessToken = () => {
  return http.request("get", `/auth/token`, {});
};
