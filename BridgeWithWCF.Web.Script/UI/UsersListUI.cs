using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;
using Bridge.jQuery2;
using BridgeWithWCF.Web.DTO;
using BridgeWithWCF.Web.Script.ServiceProxy;

namespace BridgeWithWCF.Web.Script.UI
{
    public class UsersListUI
    {
        private readonly string usersListTableSelector = "div._userlist table#userList tbody";
        private readonly string errorDivSelector = "div#errorMessageDiv";
        private readonly string errorSpanSelector = "div#errorMessageDiv.errorSpan";
        
        public UsersListUI()
        {
        }

        public void LoadUser()
        {
            LoadUserIntoTable();
        }

        private async Task LoadUserIntoTable()
        {
            ClearTableUserList();

            try
            {
                var result = await CallWS();

// ERROR20161112 : 
// Unable to access the Userlist in the generated bridge javascript => the "result" is not typed in bridge javascript
                Console.WriteLine("Count nb result {0}", result.UserList.Count);
                
                foreach (User usr in result.UserList)
                {
                    Console.WriteLine("Writing to table", usr.Username);
                    //WriteTableUserListTemplate(usr);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("{0}<br>{1}", e.Message, e.StackTrace);

                jQuery errorMessageTarget = jQuery.Select(errorSpanSelector);
                errorMessageTarget.Html(string.Format("{0}<br>{1}", e.Message, e.StackTrace));

                jQuery errorTarget = jQuery.Select(errorDivSelector);
                errorTarget.Show();
            }
        }
        
        private async Task<UsersResponseData> CallWS()
        {
            var tcs = new TaskCompletionSource<UsersResponseData>();
            
            UserProxy.Instance.GetAllUsers(
                (r) => tcs.TrySetResult(r),
                (dynamic e) => {
                    tcs.TrySetException(new Exception(e._message));
                });

            return await tcs.Task;
        }

        private void WriteTableUserListTemplate(User user)
        {

            string temp = string.Empty;
            temp += "<tr>";

            temp += string.Format("<td>{0}</td>", user.Lastname);
            temp += string.Format("<td>{0}</td>", user.Firstname);
            temp += string.Format("<td>{0}</td>", user.Username);
            temp += string.Format("<td>{0}</td>", user.Email);

            temp += "</tr>";

            jQuery.Select(usersListTableSelector).Append(temp);
        }


        private void ClearTableUserList()
        {
            jQuery.Select(usersListTableSelector).Empty(); ;
        }
    }
}
