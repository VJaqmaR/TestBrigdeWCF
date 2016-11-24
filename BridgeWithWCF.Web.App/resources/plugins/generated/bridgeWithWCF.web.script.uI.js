Bridge.assembly("BridgeWithWCF.Web.Script", function ($asm, globals) {
    "use strict";

    Bridge.define("BridgeWithWCF.Web.Script.UI.UsersListUI", {
        usersListTableSelector: "div._userlist table#userList tbody",
        groupUsersTableSelector: "div._userlistGoup table#userListGroup tbody",
        errorDivSelector: "div#errorMessageDiv",
        errorSpanSelector: "div#errorMessageDiv.errorSpan",
        ctor: function () {
            this.$initialize();
        },
        loadUser: function () {
            this.loadUserIntoTable();
            this.loadGroupUserIntoTable();
        },
        loadUserIntoTable: function () {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                $returnValue, 
                result, 
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
                                    $task1 = this.callUsersWS();
                                        $step = 2;
                                        $task1.continueWith($asyncBody);
                                        return;
                                }
                                case 2: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    result = $taskResult1;

                                        this.writeTableUserList(result);
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
        callUsersWS: function () {
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
        loadGroupUserIntoTable: function () {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                $returnValue, 
                result, 
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
                                    this.clearTableGroupUserList();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    $task1 = this.callGroupUsersWS();
                                        $step = 2;
                                        $task1.continueWith($asyncBody);
                                        return;
                                }
                                case 2: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    result = $taskResult1;

                                        this.writeTableUserGroupList(result);
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
        callGroupUsersWS: function () {
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

                                        UserManager._staticInstance.GetAllUserWithGroup(function (r) {
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
        writeTableUserGroupList: function (usergroupRespData) {
            var $t, $t1;

            $t = Bridge.getEnumerator(usergroupRespData);
            while ($t.moveNext()) {
                var grp = $t.getCurrent();
                $t1 = Bridge.getEnumerator(grp.Users);
                while ($t1.moveNext()) {
                    var usr = $t1.getCurrent();
                    this.writeTableUserGroupListTemplate(grp.GroupName, usr);
                }
            }

        },
        writeTableUserGroupListTemplate: function (groupeName, user) {

            var temp = "";
            temp = System.String.concat(temp, "<tr>");

            temp = System.String.concat(temp, (System.String.format("<td>{0}</td>", groupeName)));
            temp = System.String.concat(temp, (System.String.format("<td>{0}</td>", user.Lastname)));
            temp = System.String.concat(temp, (System.String.format("<td>{0}</td>", user.Firstname)));
            temp = System.String.concat(temp, (System.String.format("<td>{0}</td>", user.Username)));
            temp = System.String.concat(temp, (System.String.format("<td>{0}</td>", user.Email)));

            temp = System.String.concat(temp, "</tr>");

            $(this.groupUsersTableSelector).append(temp);
        },
        writeTableUserList: function (userRespData) {
            var $t;

            $t = Bridge.getEnumerator(userRespData);
            while ($t.moveNext()) {
                var usr = $t.getCurrent();
                this.writeTableUserListTemplate(usr);
            }
        },
        writeTableUserListTemplate: function (user) {

            var temp = "";
            temp = System.String.concat(temp, "<tr>");

            temp = System.String.concat(temp, (System.String.format("<td>{0}</td>", user.Lastname)));
            temp = System.String.concat(temp, (System.String.format("<td>{0}</td>", user.Firstname)));
            temp = System.String.concat(temp, (System.String.format("<td>{0}</td>", user.Username)));
            temp = System.String.concat(temp, (System.String.format("<td>{0}</td>", user.Email)));

            temp = System.String.concat(temp, "</tr>");

            $(this.usersListTableSelector).append(temp);
        },
        clearTableUserList: function () {
            $(this.usersListTableSelector).empty();

        },
        clearTableGroupUserList: function () {
            $(this.groupUsersTableSelector).empty();

        }
    });
});
