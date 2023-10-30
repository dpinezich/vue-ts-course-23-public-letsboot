"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserStore = exports.isAuthorized = exports.userStorage = void 0;
var pinia_1 = require("pinia");
var services_1 = require("src/services");
var storage_1 = require("src/utils/storage");
var vue_1 = require("vue");
exports.userStorage = new storage_1.default('user');
var isAuthorized = function () { return !!exports.userStorage.get(); };
exports.isAuthorized = isAuthorized;
exports.useUserStore = (0, pinia_1.defineStore)('user', function () {
    var user = (0, vue_1.ref)(exports.userStorage.get());
    var isAuthorized = (0, vue_1.computed)(function () { return user.value !== null; });
    function updateUser(userData) {
        if (userData === undefined || userData === null) {
            exports.userStorage.remove();
            services_1.api.setSecurityData(null);
            user.value = null;
        }
        else {
            exports.userStorage.set(userData);
            services_1.api.setSecurityData(userData.token);
            user.value = userData;
        }
    }
    return {
        user: user,
        isAuthorized: isAuthorized,
        updateUser: updateUser,
    };
});
