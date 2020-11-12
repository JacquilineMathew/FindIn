<%@ Page Title="" Language="C#" MasterPageFile="~/Pages/Master_Page_Start.Master" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="FindIn.Pages.Login" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <div style="height:578px;color:black; " id="background_pics" class="bg">
        <div style="width:100%;">
       <nav>
                    <!-- The nav link semantically marks your main site navigation -->
                    <ul>
                        <li><a id="login" href="Login.aspx" class="current">Login</a></li>
                        <li><a id="register" href="Register.aspx">Register</a></li>
                    </ul>
                </nav>
</div>
        <div style="width:75%;"></div>
       
         <div style="height:475px;float:right;width:25%;padding-top:100px; border:1px solid black;">
           <table style="width:100%;background-color:white;">
               <tr>
                   <td colspan="2" align="middle">
                       <asp:Label ID="lblMessage" runat="server" ForeColor="Red" ></asp:Label>
                   </td>
               </tr>
               <tr>
                   <td align="right">
                       <asp:Label ID="lblUserName" runat="server" Text="UserName:"></asp:Label>
                   </td>
                   <td>
                       <asp:TextBox ID="txtUserName" runat="server"></asp:TextBox> 
                       <asp:Label ID="lblUserNameMessage" runat="server" ForeColor="Red" ></asp:Label>
                   </td>                      
               </tr>
                <tr>
                   <td align="right">
                        <asp:Label ID="lblPassword" runat="server" Text="Password:"></asp:Label>
                   </td>
                   <td>
                       <asp:TextBox ID="txtPassword" runat="server" TextMode="Password"></asp:TextBox> 
                  <asp:Label ID="lblPasswordMessage" runat="server" ForeColor="Red"  ></asp:Label>
                       </td>
               </tr>                
               <tr>
                   <td colspan="2" align="middle">
                       <asp:Button ID="btnLogin" runat="server" Text="Login" OnClientClick="return LoginValidation();" OnClick="btnLogin_Click" />
                      
                   </td>
               </tr>
           </table>              
       </div>
    </div>
</asp:Content>
