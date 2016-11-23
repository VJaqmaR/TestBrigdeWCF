using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using System.Text;
using BridgeWithWCF.Web.BLL;
using BridgeWithWCF.Web.DTO;

namespace BridgeWithWCF.Web.App.Service
{
    [ServiceContract(Namespace = "")]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    public class UserManager
    {
        #region Service to get all the users

        [OperationContract]
        public List<User> GetAllUser()
        {
            List<User> userList = new List<User>();
            userList = UserBLL.GetAll();

            return userList;
        }
        #endregion
        
    }
}
