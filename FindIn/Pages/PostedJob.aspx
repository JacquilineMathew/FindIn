﻿<%@ Page Title="" Language="C#" MasterPageFile="~/Pages/Master_Page.Master" AutoEventWireup="true" CodeBehind="PostedJob.aspx.cs" Inherits="FindIn.Pages.PostedJob" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
         <div >
                <nav class="clear"> <!-- The nav link semantically marks your main site navigation -->
                     <ul>
                      
                            <li><a runat="server" href="~/Pages/CreateJob.aspx" >Create Job</a></li>
                        <li><a runat="server" href="~/Pages/PostedJob.aspx" class="current">Posted Jobs</a></li>
                        <li><a runat="server" href="~/Pages/ChooseJobSeeker.aspx" >Choose Job Seeker</a></li>
                         <li style="float:right;"><a runat="server" href="~/Pages/Login.aspx">Logout</a></li>
                         </ul>                
            </nav>
        </div>
       <footer>   
                <p style="color:#79205d;">Copyright 2020 - FindIn</p>
            </footer>
</asp:Content>
