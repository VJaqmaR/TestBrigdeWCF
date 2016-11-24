/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2016
 * @compiler Bridge.NET 15.4.0
 */
Bridge.assembly("BridgeWithWCF.Web.Script", function ($asm, globals) {
    "use strict";

    Bridge.define("BridgeWithWCF.Web.Script.App", {
        statics: {
            config: {
                init: function () {
                    Bridge.ready(this.main);
                }
            },
            main: function () {
                // Create a new Button
                var button = Bridge.merge(document.createElement('button'), {
                    innerHTML: "Click Me",
                    onclick: $_.BridgeWithWCF.Web.Script.App.f1
                } );

                // Add the Button to the page
                document.body.appendChild(button);

                // To confirm Bridge.NET is working: 
                // 1. Build this project (Ctrl + Shift + B)
                // 2. Browse to file /Bridge/www/demo.html
                // 3. Right-click on file and select "View in Browser" (Ctrl + Shift + W)
                // 4. File should open in a browser, click the "Submit" button
                // 5. Success!

                //string selector = "._mydatatable"; //the table classe name

                //ColumnOptions[] columnsOptions = App.GetColumnsDefinitions();

                //var options = new Options
                //{
                //    Paging = false,
                //    Info = false,
                //    AutoWidth = false,
                //    Searching = true,
                //    ColumnDefs = columnsOptions,
                //    Order = new object[0],
                //};

                //jQuery table = jQuery.Select(selector);
                //table.Width("50%");
                //table.AddClass("display dataTable");
                //DataTableBase.Create(table, options);


                var usersList = new BridgeWithWCF.Web.Script.UI.UsersListUI();
                usersList.loadUser();
            },
            getColumnsDefinitions: function () {
                var columnIndexes = [0, 1, 2, 3];
                var widthColumns = ["25%", "10%", "15%", "10%"];
                var orderableColumn = [true, true, true, false];

                var options = BridgeWithWCF.Web.Script.Wrapper.Datatable.Helper.getByCustomOptions(columnIndexes, widthColumns, orderableColumn);

                return options;
            }
        },
        $entryPoint: true
    });

    var $_ = {};

    Bridge.ns("BridgeWithWCF.Web.Script.App", $_);

    Bridge.apply($_.BridgeWithWCF.Web.Script.App, {
        f1: function (ev) {
            // When Button is clicked, 
            // the Bridge Console should open.
            Bridge.Console.log("Success!");
        }
    });
});
