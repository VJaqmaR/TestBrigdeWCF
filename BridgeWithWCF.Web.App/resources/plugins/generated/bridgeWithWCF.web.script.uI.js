Bridge.assembly("BridgeWithWCF.Web.Script", function ($asm, globals) {
    "use strict";

    Bridge.define("BridgeWithWCF.Web.Script.UI.UsersListUI", {
        usersListTableSelector: "div._userlist table#userList tbody",
        errorDivSelector: "div#errorMessageDiv",
        errorSpanSelector: "div#errorMessageDiv.errorSpan",
        ctor: function () {
            this.$initialize();
        },
        loadUser: function () {
            this.loadUserIntoTable();
        },
        loadUserIntoTable: function () {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                $returnValue, 
                result, 
                $t, 
                usr, 
                e, 
                errorMessageTarget, 
                errorTarget, 
                $async_e, 
                $async_e1, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = System.Array.min([0,1,2,3,4], $step);
                            switch ($step) {
                                case 0: {
                                    this.clearTableUserList();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    $task1 = this.callWS();
                                        $step = 2;
                                        $task1.continueWith($asyncBody);
                                        return;
                                }
                                case 2: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    result = $taskResult1;

                                        // ERROR20161112 : 
                                        // Unable to access the Userlist in the generated bridge javascript => the "result" is not typed in bridge javascript
                                        Bridge.Console.log(System.String.format("Count nb result {0}", result.userList.getCount()));

                                        $t = Bridge.getEnumerator(result.userList);
                                        while ($t.moveNext()) {
                                            usr = $t.getCurrent();
                                            Bridge.Console.log(System.String.format("Writing to table", usr.getUsername()));
                                            //WriteTableUserListTemplate(usr);
                                        }
                                    $step = 4;
                                    continue;
                                }
                                case 3: {
                                    Bridge.Console.log(System.String.format("{0}<br>{1}", e.getMessage(), e.getStackTrace()));

                                        errorMessageTarget = $(this.errorSpanSelector);
                                        errorMessageTarget.html(System.String.format("{0}<br>{1}", e.getMessage(), e.getStackTrace()));

                                        errorTarget = $(this.errorDivSelector);
                                        errorTarget.show();
                                        $async_e = null;
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    $tcs.setResult(null);
                                    return;
                                }
                                default: {
                                    $tcs.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        if ( $step >= 1 && $step <= 2 ){
                            e = $async_e;
                            $step = 3;
                            $asyncBody();
                            return;
                        }
                        $tcs.setException($async_e);
                    }
                }, arguments);

            $asyncBody();
            return $tcs.task;
        },
        callWS: function () {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                $returnValue, 
                tcs, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    tcs = new System.Threading.Tasks.TaskCompletionSource();

                                        UserManager._staticInstance.GetAllUser(function (r) {
                                            tcs.trySetResult(r);
                                        }, function (e) {
                                            tcs.trySetException(new System.Exception(e._message));
                                        });

                                        $task1 = tcs.task;
                                        $step = 1;
                                        $task1.continueWith($asyncBody);
                                        return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    $tcs.setResult($taskResult1);
                                        return;
                                }
                                default: {
                                    $tcs.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);

            $asyncBody();
            return $tcs.task;
        },
        writeTableUserListTemplate: function (user) {

            var temp = "";
            temp = System.String.concat(temp, "<tr>");

            temp = System.String.concat(temp, (System.String.format("<td>{0}</td>", user.getLastname())));
            temp = System.String.concat(temp, (System.String.format("<td>{0}</td>", user.getFirstname())));
            temp = System.String.concat(temp, (System.String.format("<td>{0}</td>", user.getUsername())));
            temp = System.String.concat(temp, (System.String.format("<td>{0}</td>", user.getEmail())));

            temp = System.String.concat(temp, "</tr>");

            $(this.usersListTableSelector).append(temp);
        },
        clearTableUserList: function () {
            $(this.usersListTableSelector).empty();
            ;
        }
    });
});
