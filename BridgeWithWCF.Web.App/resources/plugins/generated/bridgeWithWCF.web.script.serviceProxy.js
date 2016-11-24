Bridge.assembly("BridgeWithWCF.Web.Script", function ($asm, globals) {
    "use strict";

    Bridge.define("BridgeWithWCF.Web.Script.ServiceProxy.GroupUsers", {
        GroupName: null,
        Users: null
    });

    Bridge.define("BridgeWithWCF.Web.Script.ServiceProxy.User", {
        IdUser: 0,
        Lastname: null,
        Firstname: null,
        Username: null,
        Email: null
    });

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
        },
        GetAllUserWithGroup: function (onCompleteEvent, onErrorEvent) {
        }
    });
});
