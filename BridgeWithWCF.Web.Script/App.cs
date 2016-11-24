using System;
using Bridge;
using Bridge.Html5;
using Bridge.jQuery2;
using BridgeWithWCF.Web.Script.UI;
using BridgeWithWCF.Web.Script.Wrapper.Datatable;

namespace BridgeWithWCF.Web.Script
{
    public class App
    {
        [Ready]
        public static void Main()
        {
            // Create a new Button
            var button = new HTMLButtonElement
            {
                InnerHTML = "Click Me",
                OnClick = (ev) =>
                {
                    // When Button is clicked, 
                    // the Bridge Console should open.
                    Console.WriteLine("Success!");
                }
            };

            // Add the Button to the page
            Document.Body.AppendChild(button);

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


            UsersListUI usersList = new UsersListUI();
            usersList.LoadUser();
        }

        private static ColumnOptions[] GetColumnsDefinitions()
        {            
            var columnIndexes = new int[] { 0, 1, 2, 3};
            var widthColumns = new string[] {"25%", "10%", "15%", "10%"};
            var orderableColumn = new bool[] { true, true, true, false };

            ColumnOptions[] options = Helper.GetByCustomOptions(columnIndexes, widthColumns, orderableColumn);

            return options;
        }
    }
}