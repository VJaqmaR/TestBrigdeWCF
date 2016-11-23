using Bridge;

namespace BridgeWithWCF.Web.Script.Wrapper.Datatable
{
    [ObjectLiteral]
    public class Options
    {
        [Name("paging")]
        public bool Paging;

        [Name("info")]
        public bool Info;

        [Name("autoWidth")]
        public bool AutoWidth;

        [Name("searching")]
        public bool Searching;

        [Name("columnDefs")]
        public ColumnOptions[] ColumnDefs;

        [Name("order")]
        public object[] Order;
    }
}
