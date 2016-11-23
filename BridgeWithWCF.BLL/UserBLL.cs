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
            User usr1 = new User();
            usr1.IdUser = 1;
            usr1.Firstname = "John";
            usr1.Lastname = "Doe";
            usr1.Username = "John.Doe";
            usr1.Email = "John.Doe@email.comm";


            User usr2 = new User();
            usr2.IdUser = 2;
            usr2.Firstname = "Jane";
            usr2.Lastname = "Doe";
            usr2.Username = "Jane.Doe";
            usr2.Email = "Jane.Doe@email.comm";


            List<User> userDTOList = new List<User>();

            userDTOList.Add(usr1);
            userDTOList.Add(usr2);
            
            return userDTOList;
        }
        
    }
}
