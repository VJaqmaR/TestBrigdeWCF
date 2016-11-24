using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BridgeWithWCF.Web.DTO
{
    public class GroupUsers
    {
        public string GroupName { get; set; }
        public List<User> Users { get; set; }
    }
}
