"use strict";
const InitialConvertCase = (str, upperLower = "") => {
  const initial = str.charAt(0);
  const upperArr = ["upper", "Upper", "\u5927\u5199", "\u9996\u5B57\u6BCD\u5927\u5199"];
  const lowerArr = ["lower", "Lower", "\u5C0F\u5199", "\u9996\u5B57\u6BCD\u5C0F\u5199"];
  if (upperArr.indexOf(upperLower) !== -1) {
    return str = initial.toUpperCase() + str.slice(1);
  }
  if (lowerArr.indexOf(upperLower) !== -1) {
    return str = initial.toLowerCase() + str.slice(1);
  }
  if (initial === initial.toUpperCase()) {
    return str = initial.toLowerCase() + str.slice(1);
  }
  if (initial === initial.toLowerCase()) {
    return str = initial.toUpperCase() + str.slice(1);
  }
  return "";
};
exports.InitialConvertCase = InitialConvertCase;
