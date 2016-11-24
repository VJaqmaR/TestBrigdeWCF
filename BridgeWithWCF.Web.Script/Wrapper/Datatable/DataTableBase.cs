using Bridge;
using Bridge.jQuery2;

namespace BridgeWithWCF.Web.Script.Wrapper.Datatable
{
    [External]
    [Namespace(false)]
    public static class DataTableBase
    {

        [Template("DataTable")]
        public static jQuery Create(this jQuery entity)
        {
            return null;
        }

        [Template("{0}.DataTable({1})")]
        public static jQuery Create(this jQuery entity, Options options)
        {
            return null;
        }
        
        [Template("destroy")]
        public static void Destroy(this jQuery entity) { }
        
    }

    
}