/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2016
 * @compiler Bridge.NET 15.4.0
 */
Bridge.assembly("LinkEvent.Web.Script", function ($asm, globals) {
    "use strict";

    Bridge.define("LinkEvent.Web.Script.App", {
        statics: {
            linkEventUrl: "http://localhost:61095/api/LinkEvent/",
            config: {
                init: function () {
                    Bridge.ready(this.main);
                }
            },
            main: function () {



                // Create a new Button
                var button = Bridge.merge(document.createElement('button'), {
                    innerHTML: "Click Me",
                    onclick: $_.LinkEvent.Web.Script.App.f1
                } );

                // Add the Button to the page
                document.body.appendChild(button);

                // To confirm Bridge.NET is working: 
                // 1. Build this project (Ctrl + Shift + B)
                // 2. Browse to file /Bridge/www/demo.html
                // 3. Right-click on file and select "View in Browser" (Ctrl + Shift + W)
                // 4. File should open in a browser, click the "Submit" button
                // 5. Success!

                var selector = "._mydatatable"; //the table classe name

                var columnsOptions = LinkEvent.Web.Script.App.getColumnsDefinitions();

                var options = { paging: false, info: false, autoWidth: false, searching: true, columnDefs: columnsOptions, order: System.Array.init(0, null) };

                var table = $(selector);
                table.width("50%");
                table.addClass("display dataTable");
                table.DataTable(options);
            },
            getColumnsDefinitions: function () {
                var columnIndexes = [0, 1, 2, 3];
                var widthColumns = ["25%", "10%", "15%", "10%"];
                var orderableColumn = [true, true, true, false];

                var options = LinkEvent.Web.Script.Wrapper.Datatable.Helper.getByCustomOptions(columnIndexes, widthColumns, orderableColumn);

                return options;
            }
        },
        $entryPoint: true
    });

    var $_ = {};

    Bridge.ns("LinkEvent.Web.Script.App", $_);

    Bridge.apply($_.LinkEvent.Web.Script.App, {
        f1: function (ev) {
            // When Button is clicked, 
            // the Bridge Console should open.
            Bridge.Console.log("Success!");
        }
    });
});
