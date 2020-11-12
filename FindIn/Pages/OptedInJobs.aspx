<%@ Page Title="" Language="C#" MasterPageFile="~/Pages/Master_Page.Master" AutoEventWireup="true" CodeBehind="OptedInJobs.aspx.cs" Inherits="FindIn.Pages.OptedInJobs" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
       <div >
                <nav class="clear"> <!-- The nav link semantically marks your main site navigation -->
                     <ul>
                      
                            <li><a runat="server" href="~/Pages/CreateProfile.aspx">Create Profile</a></li>
                        <li><a runat="server" href="~/Pages/MyJobs.aspx">My Jobs</a></li>
                        <li><a runat="server" href="~/Pages/OptedInJobs.aspx" class="current">Opted-In Jobs</a></li>
                         <li style="float:right;"><a runat="server" href="~/Pages/Login.aspx">Logout</a></li>
                         </ul>                
            </nav>
        </div>
</asp:Content>
