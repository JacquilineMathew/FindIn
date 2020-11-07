using FindIn.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

namespace FindIn.Pages
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ClearAll();
        }
        public void ClearAll(){
            lblMessage.Text = "";
            lblUserNameMessage.Text = "";
            lblPasswordMessage.Text = "";           
        }
        protected void btnLogin_Click(object sender, EventArgs e)
        {
            ClearAll();
            var userName = txtUserName.Text;
            var password = txtPassword.Text;

            SqlConnection con = new SqlConnection("Data Source=(local)\\sqlexpress19;Initial Catalog= FindIn;Trusted_Connection=true;");
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            try
            {
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = "CheckLoginDetails"; //Stored Procedure Name

                cmd.Parameters.Add("@userName", SqlDbType.NVarChar).Value = userName;
                cmd.Parameters.Add("@password", SqlDbType.NVarChar).Value = password;

                SqlParameter returnParameter = new SqlParameter();
                returnParameter.Direction = ParameterDirection.ReturnValue;
                cmd.Parameters.Add(returnParameter);
                cmd.ExecuteNonQuery();

                int result = (int)returnParameter.Value;
                if (result == 1)
                    Response.Redirect("~/Pages/Employer.aspx",false);
                else if (result == 3)
                {
                    lblMessage.Text = "Account is not confirmed yet!";
                }
                else if (result == 2)
                {
                    lblMessage.Text = "Invalid Password!";
                }
                else
                {
                    lblMessage.Text = "Invalid Credentials!";
                }
            }
            catch (Exception ex)
            {
                HttpContext.Current.Session["ErrorMessage"] = "Couldn't Login. Please try again later!!";
                Response.Redirect("~/Pages/ErrorPage.aspx",false);
            }
            finally
            {
                con.Close();

            }
        }

    }
}