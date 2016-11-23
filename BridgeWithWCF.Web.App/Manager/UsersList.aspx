<%@ Page Language="C#" 
    AutoEventWireup="true" 
    MasterPageFile="~/Main.master"
    CodeBehind="UsersList.aspx.cs" 
    Inherits="BridgeWithWCF.Web.App.Manager.UsersList" %>


<asp:Content ID="_content" ContentPlaceHolderID="_content" runat="Server">
        
    <asp:ScriptManagerProxy ID="__listScriptManagerProxy" runat="server" >                
        <Services>
            <asp:ServiceReference Path="~/Service/UserManager.svc" />
        </Services>
    </asp:ScriptManagerProxy>


    <div class="row">
        <div class="col-xs-6 col-md-8">
            <div class="_userlist ">
                <table id="userList" class="table table-striped table-bordered dataTable no-footer">
                    <thead>
                        <tr>
                            <th scope="col">
                                <b>Lastname</b>
                            </th>
                            <th scope="col">
                                <b>Firstname</b>
                            </th>
                            <th scope="col">
                                <b>Username</b>
                            </th>
                            <th scope="col">
                                <b>Email</b>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    <//div>
    
</asp:Content>