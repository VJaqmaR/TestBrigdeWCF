Bridge.assembly("BridgeWithWCF.Web.Script", function ($asm, globals) {
    "use strict";

    Bridge.define("BridgeWithWCF.Web.Script.Wrapper.Datatable.Helper", {
        statics: {
            getByCustomOptions: function (columnIndexes, widths, orderables) {
                var $t;
                var colOptList = new (System.Collections.Generic.List$1(Object))();

                var index = 0;
                $t = Bridge.getEnumerator(columnIndexes);
                while ($t.moveNext()) {
                    var colIndex = $t.getCurrent();

                    var colOPt = {  };
                    colOPt.targets = [colIndex];
                    colOPt.width = widths[index];
                    colOPt.orderable = orderables[index];

                    colOptList.add(colOPt);

                    index = (index + 1) | 0;
                }

                return colOptList.toArray();
            }
        }
    });
});
