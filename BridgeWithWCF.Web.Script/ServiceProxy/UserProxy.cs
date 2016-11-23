using System.Collections.Generic;
using Bridge;
using Bridge.Html5;
using BridgeWithWCF.Web.DTO;

namespace BridgeWithWCF.Web.Script.ServiceProxy
{

    [Name("UserManager")]
    public class UserProxy
    {
        [Name("_staticInstance")]
        public static UserProxy Instance = new UserProxy();

        [Name("GetAllUser")]
        public void GetAllUsers(GetResultCompleteDelegateUsers onCompleteEvent, ErrorDelegate onErrorEvent) { }

        public delegate void GetResultCompleteDelegateUsers(UsersResponseData results);
        public delegate void ErrorDelegate(object error);        
    }

    public class UsersResponseData
    {
        public List<User> UserList;
    }
    
}
