using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using BridgeWithWCF.Web.DTO;

namespace BridgeWithWCF.Web.BLL
{
    public class UserBLL
    {
        /// <summary>
        /// Get all user from datatable
        /// </summary>
        /// <returns>Return the users list</returns>
        public static List<User> GetAll()
        {
            User usr1 = GetUser1();
            User usr2 = GetUser2();
            User usr3 = GetUser4();

            List<User> userDTOList = new List<User>();

            userDTOList.Add(usr1);
            userDTOList.Add(usr2);
            userDTOList.Add(usr3);


            return userDTOList;
        }

        /// <summary>
        /// Get all user from datatable
        /// </summary>
        /// <returns>Return with the associated users</returns>
        public static List<GroupUsers> GetGroupUsers()
        {
            User usr1 = GetUser1();
            User usr2 = GetUser2();
            User usr3 = GetUser3();
            User usr4 = GetUser4();

            List<User> userList1 = new List<User>();
            userList1.Add(usr1);
            userList1.Add(usr2);

            List<User> userList2 = new List<User>();
            userList2.Add(usr3);
            userList2.Add(usr4);
            
            List<User> userList3 = new List<User>();
            userList3.Add(usr1);
            userList3.Add(usr3);
            
            GroupUsers grUsers1 = new GroupUsers();
            grUsers1.GroupName = "First group";
            grUsers1.Users = userList1;

            GroupUsers grUsers2 = new GroupUsers();
            grUsers2.GroupName = "2nd grp";
            grUsers2.Users = userList2;

            GroupUsers grUsers3 = new GroupUsers();
            grUsers3.GroupName = "3rd GP";
            grUsers3.Users = userList3;

            List<GroupUsers> groupUsersList = new List<GroupUsers>();
            groupUsersList.Add(grUsers1);
            groupUsersList.Add(grUsers2);
            groupUsersList.Add(grUsers3);

            return groupUsersList;
        }

        #region User for demo
        
        private static User GetUser1()
        {
            User usr = new User();
            usr.IdUser = 1;
            usr.Firstname = "John";
            usr.Lastname = "Doe";
            usr.Username = "John.Doe";
            usr.Email = "John.Doe@email.comm";

            return usr;
        }

        private static User GetUser2()
        {
            User usr = new User();
            usr.IdUser = 2;
            usr.Firstname = "Jane";
            usr.Lastname = "DiDoe";
            usr.Username = "Jane.Doe";
            usr.Email = "Jane.Doe@email.comm";

            return usr;
        }

        private static User GetUser3()
        {
            User usr = new User();
            usr.IdUser = 3;
            usr.Firstname = "Tarzan";
            usr.Lastname = "Jungle";
            usr.Username = "Tarzan.Jungle";
            usr.Email = "Tarzan.Jungle@email.comm";

            return usr;
        }

        private static User GetUser4()
        {
            User usr = new User();
            usr.IdUser = 4;
            usr.Firstname = "Micki";
            usr.Lastname = "Mouse";
            usr.Username = "Micki.Mouse";
            usr.Email = "Micki.Mouse@email.comm";

            return usr;
        }

        #endregion User for demo
    }
}
