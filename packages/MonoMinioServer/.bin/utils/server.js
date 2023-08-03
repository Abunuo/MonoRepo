"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatJSONResponse = void 0;
const formatJSONResponse = (response) => {
    const defaultData = {
        code: 0,
        data: {},
        msg: "response success"
    };
    return Object.assign(defaultData, response);
};
exports.formatJSONResponse = formatJSONResponse;
