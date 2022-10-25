"use strict";
var plugins_axios = require("./axios.js");
var plugins_method = require("./method.js");
class Reqs {
  constructor(_information, callback) {
    this._information = _information;
    this.callback = callback;
    this.reqUrl = plugins_axios.axios.baseURL + "/" + plugins_method.InitialConvertCase(this._information.command, "\u5C0F\u5199");
    this.data = this._information.data;
    this._information.data.operation === "get" ? this.Get() : this.Post();
  }
  Get() {
    plugins_axios.axios.get(this.reqUrl, JSON.stringify(this.data)).then((data) => {
      if (this._information.renderInfo) {
        for (const i of this._information.renderInfo) {
          i.renderList = data.data[i.name];
        }
      }
      if (this._information.dialogSwitch) {
        this._information.dialogSwitch = false;
      }
      if (this.callback) {
        this.callback(data.data);
      }
    }).catch((err) => {
      console.log(err);
    });
  }
  Post() {
    plugins_axios.axios.post(this.reqUrl, JSON.stringify(this.data)).then((data) => {
      console.log(data);
      this.Get();
    }).catch((err) => {
      console.log(err);
    });
  }
}
exports.Reqs = Reqs;
