import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "f83fc595-38d7-4a68-89eb-62ee21cf9047",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  getProfile(userId) {
    console.log("Warn! use ProfileAPI object!");
    return profileAPI.getProfile(userId);
  },
};

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`);
  },
  authLogin(email, password, rememberMe=false) {
    return instance.post(`auth/login`, {email, password, rememberMe});
  },
  authLogout() {
    return instance.delete(`auth/login`);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status: status});
  },
};
