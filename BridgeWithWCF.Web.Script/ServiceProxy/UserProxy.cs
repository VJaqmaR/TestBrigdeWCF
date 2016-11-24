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
        public delegate void GetResultCompleteDelegateUsers(List<User> results);

        [Name("GetAllUserWithGroup")]
        public void GetAllUserWithGroup(GetResultCompleteDelegateGroupUsers onCompleteEvent, ErrorDelegate onErrorEvent) { }        
        public delegate void GetResultCompleteDelegateGroupUsers(List<GroupUsers> results);


        public delegate void ErrorDelegate(object error);        
    }

    public class GroupUsers
    {
        [Name("GroupName")]
        public string GroupName;
        [Name("Users")]
        public List<User> Users;
    }

    public class User
    {
        [Name("IdUser")]
        public int IdUser;
        [Name("Lastname")]
        public string Lastname;
        [Name("Firstname")]
        public string Firstname;
        [Name("Username")]
        public string Username;
        [Name("Email")]
        public string Email;
    }

}
