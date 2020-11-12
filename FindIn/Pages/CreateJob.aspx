<%@ Page Title="" Language="C#" MasterPageFile="~/Pages/Master_Page.Master" EnableEventValidation="false" AutoEventWireup="true" CodeBehind="CreateJob.aspx.cs" Inherits="FindIn.Pages.CreateJob" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
     <div>
                <nav class="clear"> <!-- The nav link semantically marks your main site navigation -->
                     <ul>
                      
                            <li><a runat="server" href="~/Pages/CreateJob.aspx" class="current">Create Job</a></li>
                        <li><a runat="server" href="~/Pages/PostedJob.aspx">Posted Jobs</a></li>
                        <li><a runat="server" href="~/Pages/ChooseJobSeeker.aspx">Choose Job Seeker</a></li>
                         <li style="float:right;"><a runat="server" href="~/Pages/Login.aspx">Logout</a></li>
                         </ul>                
            </nav>
        </div>
        <table style="width:100%;background-color:white;border:1px black solid;padding-top:20px;">
                <tr>
                    <td align="right">
                        <asp:Label ID="Label6" runat="server" Text="Company Name:"></asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="txtCompany" runat="server"></asp:TextBox>
                       
                        <asp:Label ID="lblCompanyMessage" runat="server" ForeColor="Red"></asp:Label>
                    </td>
                </tr> 
               <tr>
                    <td align="right">
                        <asp:Label ID="lblJobType" runat="server" Text="Type of Job:"></asp:Label>
                    </td>
                    <td>
                           <asp:DropDownList ID="ddlJobType" runat="server" onchange="GetJobTypeDetails();">
                        </asp:DropDownList>
                        <asp:Label ID="lblJobTypeMessage" runat="server" ForeColor="Red"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="right">
                        <asp:Label ID="lblSkills" runat="server" Text="Preferred Skills:"></asp:Label>
                    </td>
                    <td>
                        <asp:Panel ID="pnlskillresult" runat="server"></asp:Panel>
                        <asp:Label ID="lblSkillsMessage" runat="server" ForeColor="Red"></asp:Label>
                    </td>
                </tr>       
             <tr>
                    <td align="right">
                        <asp:Label ID="Label7" runat="server" Text="Job Role:"></asp:Label>
                    </td>
                    <td>
                           <asp:DropDownList ID="ddlRole" runat="server">
                        </asp:DropDownList>
                        <asp:Label ID="lblRoleMessage" runat="server" ForeColor="Red"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="right">
                        <asp:Label ID="Label5" runat="server" Text="Salary Range:"></asp:Label>
                    </td>
                    <td>
                        From :<asp:TextBox ID="txtFromSalary" runat="server"></asp:TextBox>
                        To: <asp:TextBox ID="txtToSalary" runat="server"></asp:TextBox>
                        <asp:Label ID="lblSalaryMessage" runat="server" ForeColor="Red"></asp:Label>
                    </td>
                </tr>  
                
                <tr>
                    <td align="right">
                        <asp:Label ID="lblProvince" runat="server" Text="Province:"></asp:Label>
                    </td>
                    <td>
                        <asp:DropDownList ID="ddlProvince" runat="server" onchange="GetCities();">
                        </asp:DropDownList>
                        <asp:Label ID="lblProvinceMessage" runat="server" ForeColor="Red"></asp:Label></td>
                </tr>
                <tr>
                    <td align="right">
                        <asp:Label ID="Label1" runat="server" Text="City:"></asp:Label>
                    </td>
                    <td>
                        <asp:DropDownList ID="ddlCity" runat="server" Width="100px">
                        </asp:DropDownList>
                        <asp:Label ID="lblCityMessage" runat="server" ForeColor="Red"></asp:Label>
                    </td>
                </tr>
             <tr>
                    <td align="right">
                        <asp:Label ID="Label2" runat="server" Text="Street:"></asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="txtStreet" runat="server" MaxLength="100"></asp:TextBox>
                        <asp:Label ID="lblStreetMessage" runat="server" ForeColor="Red"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="right">
                        <asp:Label ID="Label3" runat="server" Text="Benefits:"></asp:Label>
                    </td>
                    <td>
                         <asp:Panel ID="pnlbenefitresult" runat="server"></asp:Panel>
                        <asp:Label ID="lblPostCodeMessage" runat="server" ForeColor="Red"></asp:Label>
                    </td>
                </tr>
             
                <tr>

                    <td colspan="2" align="middle">
                        <asp:Button ID="btnCreate" runat="server" Text="Create" OnClientClick="return CreateValidation();"  />
                        &nbsp;&nbsp;
                                     
                       <asp:Button ID="btnCancel" runat="server" Text="Cancel" OnClick="btnCancel_Click" />

                    </td>
                </tr>  
           </table>
 
</asp:Content>
