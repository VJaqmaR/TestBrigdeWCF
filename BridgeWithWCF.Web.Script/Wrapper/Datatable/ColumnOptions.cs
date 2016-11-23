using Bridge;

namespace BridgeWithWCF.Web.Script.Wrapper.Datatable
{
    [ObjectLiteral]
    public class ColumnOptions
    {
        [Name("orderable")]
        public bool Orderable;

        [Name("targets")]
        public int[] Targets;

        [Name("width")]
        public string Width;
        
    }
}
