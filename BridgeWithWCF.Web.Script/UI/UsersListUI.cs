using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;
using Bridge.jQuery2;
using BridgeWithWCF.Web.Script.ServiceProxy;

namespace BridgeWithWCF.Web.Script.UI
{
    public class UsersListUI
    {
        private readonly string usersListTableSelector = "div._userlist table#userList tbody";
        private readonly string groupUsersTableSelector = "div._userlistGoup table#userListGroup tbody";
        private readonly string errorDivSelector = "div#errorMessageDiv";
        private readonly string errorSpanSelector = "div#errorMessageDiv.errorSpan";
        
        public UsersListUI()
        {
        }

        public void LoadUser()
        {
            LoadUserIntoTable();
            LoadGroupUserIntoTable();
        }

        private async Task LoadUserIntoTable()
        {
            ClearTableUserList();

            try
            {
                var result = await CallUsersWS();

                WriteTableUserList(result);
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

        private async Task<List<User>> CallUsersWS()
        {
            var tcs = new TaskCompletionSource<List<User>>();

            UserProxy.Instance.GetAllUsers(
                (r) => tcs.TrySetResult(r),
                (dynamic e) => {
                    tcs.TrySetException(new Exception(e._message));
                });

            return await tcs.Task;
        }

        private async Task LoadGroupUserIntoTable()
        {
            ClearTableGroupUserList();

            try
            {
                var result = await CallGroupUsersWS();

                WriteTableUserGroupList(result);
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

        private async Task<List<GroupUsers>> CallGroupUsersWS()
        {
            var tcs = new TaskCompletionSource<List<GroupUsers>>();

            UserProxy.Instance.GetAllUserWithGroup(
                (r) => tcs.TrySetResult(r),
                (dynamic e) => {
                    tcs.TrySetException(new Exception(e._message));
                });

            return await tcs.Task;
        }



        private void WriteTableUserGroupList(List<GroupUsers> usergroupRespData)
        {
            
            foreach (GroupUsers grp in usergroupRespData)
            {
                foreach (User usr in grp.Users)
                {
                    WriteTableUserGroupListTemplate(grp.GroupName, usr);
                }
            }
            
        }

        private void WriteTableUserGroupListTemplate(string groupeName, User user)
        {

            string temp = string.Empty;
            temp += "<tr>";

            temp += string.Format("<td>{0}</td>", groupeName);
            temp += string.Format("<td>{0}</td>", user.Lastname);
            temp += string.Format("<td>{0}</td>", user.Firstname);
            temp += string.Format("<td>{0}</td>", user.Username);
            temp += string.Format("<td>{0}</td>", user.Email);

            temp += "</tr>";

            jQuery.Select(groupUsersTableSelector).Append(temp);
        }

        private void WriteTableUserList(List<User> userRespData)
        {

            foreach (User usr in userRespData)
            {
                WriteTableUserListTemplate(usr);
            }
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
            jQuery.Select(usersListTableSelector).Empty();

        }

        private void ClearTableGroupUserList()
        {
            jQuery.Select(groupUsersTableSelector).Empty();

        }
    }
}
