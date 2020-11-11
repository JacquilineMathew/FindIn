<%@ Page Title="" EnableEventValidation="false" Language="C#" MasterPageFile="~/Pages/Master_Page_Start.Master" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="FindIn.Pages.Register" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
       <div style="height:578px;color:black;" id="background_pics" class="bg">
        <div style="width:100%;">
       <nav>
                    <!-- The nav link semantically marks your main site navigation -->
                    <ul>
                        <li><a id="login" href="Login.aspx" >Login</a></li>
                        <li><a id="register" href="Register.aspx" class="current">Register</a></li>
                    </ul>
                </nav>
</div>
        <div style="width:75%;"></div>
       
         <div style="height:525px;float:right;width:25%;padding-top:50px; border:1px solid black;">
           <table style="width:100%;background-color:white; ">
               <tr>
                   <td align="right">
                       <asp:Label ID="lblUserName" runat="server" Text="UserName:"></asp:Label>
                   </td>
                   <td>
                       <asp:TextBox ID="txtUserName" runat="server" MaxLength="80"></asp:TextBox> 
                       <asp:Label ID="lblUserNameMessage" runat="server" ForeColor="Red" ></asp:Label>
                   </td>
               </tr>
                <tr>
                   <td align="right">
                       <asp:Label ID="lblPassword" runat="server" Text="Password:"></asp:Label>
                   </td>
                   <td>
                       <asp:TextBox ID="txtPassword" runat="server" TextMode="Password"></asp:TextBox> 
                       <asp:Label ID="lblPasswordMessage" runat="server" ForeColor="Red" ></asp:Label>
                   </td>
               </tr>
                <tr>
                   <td align="right">
                       <asp:Label ID="Label2" runat="server" Text="First Name:"></asp:Label>
                   </td>
                   <td>
                      <asp:TextBox ID="txtFirstName" runat="server"></asp:TextBox> 
                       <asp:Label ID="lblFirstNameMessage" runat="server" ForeColor="Red" ></asp:Label>
                   </td>
               </tr>
                <tr>
                   <td align="right">
                       <asp:Label ID="Label5" runat="server" Text="Last Name:"></asp:Label>
                   </td>
                   <td>
                      <asp:TextBox ID="txtLastName" runat="server"></asp:TextBox> 
                       <asp:Label ID="lblLastNameMessage" runat="server" ForeColor="Red" ></asp:Label>
                   </td>
               </tr>
                <tr>
                   <td align="right">
                       <asp:Label ID="lblEmail" runat="server" Text="Email:"></asp:Label>
                   </td>
                   <td>
                      <asp:TextBox ID="txtEmail" runat="server"></asp:TextBox> 
                       <asp:Label ID="lblEmailMessage" runat="server" ForeColor="Red" ></asp:Label>
                   </td>
               </tr>
               <tr>
                   <td align="right">I am :</td>
                   <td>
                       <asp:RadioButton ID="radEmployer" GroupName="grpUser" runat="server" Text="Employer" /> 
                       <asp:RadioButton ID="radJobSeeker" GroupName="grpUser" runat="server" Text="Job Seeker" />
                       <asp:RadioButton ID="radAdmin" GroupName="grpUser" runat="server" Text="Admin" /><br />
                       <asp:Label ID="lblUserMessage" runat="server" ForeColor="Red" ></asp:Label>
                   </td>
               </tr>                            
                <tr>
                   <td align="right">
                       <asp:Label ID="lblProvince" runat="server" Text="Province:"></asp:Label>
                   </td>
                   <td>
                        <asp:DropDownList ID="ddlProvince" runat="server" onchange="GetCities();">
                       </asp:DropDownList><br />
                    <asp:Label ID="lblProvinceMessage" runat="server" ForeColor="Red" ></asp:Label></td>
               </tr>
                  <tr>
                   <td align="right">
                       <asp:Label ID="Label1" runat="server" Text="City:"></asp:Label>
                   </td>
                   <td>
                       <asp:DropDownList ID="ddlCity" runat="server">
                       </asp:DropDownList>
                       <asp:Label ID="lblCityMessage" runat="server" ForeColor="Red" ></asp:Label>
                   </td>
               </tr>
                
                <tr>
                   <td align="right">
                       <asp:Label ID="Label3" runat="server" Text="PostCode:"></asp:Label>
                   </td>
                   <td>
                      <asp:TextBox ID="txtPostCode" runat="server" MaxLength="10"></asp:TextBox> 
                       <asp:Label ID="lblPostCodeMessage" runat="server" ForeColor="Red" ></asp:Label>
                   </td>
               </tr>
               <tr><td>
                     <asp:Label ID="lblMessage" runat="server" ForeColor="Red" ></asp:Label>
                   </td></tr>
                <tr>
                  
                   <td colspan="2" align="middle" >
                       <asp:Button ID="btnRegister" runat="server" Text="Register" OnClientClick="return RegisterValidation();" OnClick="btnRegister_Click"  />
                      &nbsp;&nbsp;
                                     
                       <asp:Button ID="btnCancel" runat="server" Text="Cancel" OnClick="btnCancel_Click"  />
                      
                   </td>
               </tr>
           </table>
             
             <asp:HiddenField ID="hdnProvince" runat="server" />
             <asp:HiddenField ID="hdnCity" runat="server" />     
       </div>
           </div>
   
</asp:Content>
