Bridge.assembly("BridgeWithWCF.Web.Script", function ($asm, globals) {
    "use strict";

    Bridge.define("UserManager", {
        statics: {
            _staticInstance: null,
            config: {
                init: function () {
                    this._staticInstance = new UserManager();
                }
            }
        },
        GetAllUser: function (onCompleteEvent, onErrorEvent) {
        }
    });

    Bridge.define("BridgeWithWCF.Web.Script.ServiceProxy.UsersResponseData", {
        userList: null
    });
});
