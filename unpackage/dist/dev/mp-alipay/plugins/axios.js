"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var common_vendor = require("../common/vendor.js");
class HttpRequest {
  constructor() {
    this.baseURL = "http://127.0.0.1:3000/api/data";
    this.timeout = 3e3;
    this.headers = {
      "content-type": "application/x-www-form-urlencoded"
    };
  }
  setInterceptors(instance) {
    instance.interceptors.request.use((config) => {
      return config;
    });
    instance.interceptors.response.use((res) => {
      if (res.status == 200) {
        return Promise.resolve(res.data);
      } else {
        return Promise.reject(res.data);
      }
    }, (err) => {
      switch (err.response.status) {
        case "401":
          console.log(err);
          break;
      }
      return Promise.reject(err);
    });
  }
  mergeOptions(options) {
    return __spreadValues({
      baseURL: this.baseURL,
      timeout: this.timeout,
      headers: this.headers
    }, options);
  }
  request(options) {
    const instance = common_vendor.axios.create();
    this.setInterceptors(instance);
    const opts = this.mergeOptions(options);
    return instance(opts);
  }
  get(url, params) {
    return this.request({
      method: "get",
      url,
      params
    });
  }
  post(url, data) {
    return this.request({
      method: "post",
      url,
      data
    });
  }
}
var axios = new HttpRequest();
exports.axios = axios;
