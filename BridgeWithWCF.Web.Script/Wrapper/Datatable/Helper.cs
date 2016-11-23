using System.Collections.Generic;
using Bridge;

namespace BridgeWithWCF.Web.Script.Wrapper.Datatable
{
    public class Helper
    {
        public static ColumnOptions[] GetByCustomOptions(int[] columnIndexes, string[] widths, bool[] orderables)
        {
            List<ColumnOptions> colOptList = new List<ColumnOptions>();

            int index = 0;
            foreach (int colIndex in columnIndexes)
            {

                ColumnOptions colOPt = new ColumnOptions();
                colOPt.Targets = new int[] { colIndex };
                colOPt.Width = widths[index];
                colOPt.Orderable = orderables[index];

                colOptList.Add(colOPt);

                index++;
            }

            return colOptList.ToArray();
        }
    }
}
