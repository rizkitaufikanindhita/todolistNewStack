"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var statusCode;
(function (statusCode) {
    statusCode[statusCode["OK"] = 200] = "OK";
    statusCode[statusCode["Created"] = 201] = "Created";
    statusCode[statusCode["Accepted"] = 202] = "Accepted";
    statusCode[statusCode["Non_Authoritative_Information"] = 203] = "Non_Authoritative_Information";
    statusCode[statusCode["No_Content"] = 204] = "No_Content";
    statusCode[statusCode["Reset_Content"] = 205] = "Reset_Content";
    statusCode[statusCode["Partial_Content"] = 206] = "Partial_Content";
    statusCode[statusCode["Multiple_Choices"] = 300] = "Multiple_Choices";
    statusCode[statusCode["Moved_Permanently"] = 301] = "Moved_Permanently";
    statusCode[statusCode["Found"] = 302] = "Found";
    statusCode[statusCode["See_Other"] = 303] = "See_Other";
    statusCode[statusCode["Not_Modified"] = 304] = "Not_Modified";
    statusCode[statusCode["Temporary_Redirect"] = 307] = "Temporary_Redirect";
    statusCode[statusCode["Permanent_Redirect"] = 308] = "Permanent_Redirect";
    statusCode[statusCode["Bad_Request"] = 400] = "Bad_Request";
    statusCode[statusCode["Unauthorized"] = 401] = "Unauthorized";
    statusCode[statusCode["Forbidden"] = 403] = "Forbidden";
    statusCode[statusCode["Not_Found"] = 404] = "Not_Found";
    statusCode[statusCode["Method_Not_Allowed"] = 405] = "Method_Not_Allowed";
    statusCode[statusCode["Not_Acceptable"] = 406] = "Not_Acceptable";
    statusCode[statusCode["Proxy_Authentication_Required"] = 407] = "Proxy_Authentication_Required";
    statusCode[statusCode["Request_Timeout"] = 408] = "Request_Timeout";
    statusCode[statusCode["Conflict"] = 409] = "Conflict";
    statusCode[statusCode["Gone"] = 410] = "Gone";
    statusCode[statusCode["Length_Required"] = 411] = "Length_Required";
    statusCode[statusCode["Precondition_Failed"] = 412] = "Precondition_Failed";
    statusCode[statusCode["Payload_Too_Large"] = 413] = "Payload_Too_Large";
    statusCode[statusCode["URI_Too_Long"] = 414] = "URI_Too_Long";
    statusCode[statusCode["Unsupported_Media_Type"] = 415] = "Unsupported_Media_Type";
    statusCode[statusCode["Range_Not_Satisfiable"] = 416] = "Range_Not_Satisfiable";
    statusCode[statusCode["Expectation_Failed"] = 417] = "Expectation_Failed";
    statusCode[statusCode["I_m_a_teapot"] = 418] = "I_m_a_teapot";
    statusCode[statusCode["Unprocessable_Entity"] = 422] = "Unprocessable_Entity";
    statusCode[statusCode["Locked"] = 423] = "Locked";
    statusCode[statusCode["Failed_Dependency"] = 424] = "Failed_Dependency";
    statusCode[statusCode["Upgrade_Required"] = 426] = "Upgrade_Required";
    statusCode[statusCode["Precondition_Required"] = 428] = "Precondition_Required";
    statusCode[statusCode["Too_Many_Requests"] = 429] = "Too_Many_Requests";
    statusCode[statusCode["Request_Header_Fields_Too_Large"] = 431] = "Request_Header_Fields_Too_Large";
    statusCode[statusCode["Internal_Server_Error"] = 500] = "Internal_Server_Error";
    statusCode[statusCode["Not_Implemented"] = 501] = "Not_Implemented";
    statusCode[statusCode["Bad_Gateway"] = 502] = "Bad_Gateway";
    statusCode[statusCode["Service_Unavailable"] = 503] = "Service_Unavailable";
    statusCode[statusCode["Gateway_Timeout"] = 504] = "Gateway_Timeout";
    statusCode[statusCode["HTTP_Version_Not_Supported"] = 505] = "HTTP_Version_Not_Supported";
    statusCode[statusCode["Variant_Also_Negotiates"] = 506] = "Variant_Also_Negotiates";
    statusCode[statusCode["Insufficient_Storage"] = 507] = "Insufficient_Storage";
    statusCode[statusCode["Loop_Detected"] = 508] = "Loop_Detected";
    statusCode[statusCode["Not_Extended"] = 510] = "Not_Extended";
    statusCode[statusCode["Network_Authentication_Required"] = 511] = "Network_Authentication_Required";
})(statusCode || (statusCode = {}));
exports.default = statusCode;
