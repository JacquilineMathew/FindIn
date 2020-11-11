
using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Web.Services;
using System.Collections.Generic;
using System.Web.Script.Services;
using System.Data.SqlClient;
using System.Web.Script.Serialization;

namespace FindIn.Pages
{
    public partial class Register : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {



            DataTable table = new DataTable();

            using (SqlConnection con = new SqlConnection("Data Source=(local)\\sqlexpress19;Initial Catalog= FindIn;Trusted_Connection=true;"))
            using (var cmd = new SqlCommand("GetProvinces", con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                da.Fill(table);
            }

            ddlProvince.DataSource = table;
            ddlProvince.DataValueField = "provinceID";
            ddlProvince.DataTextField = "provinceName";
            ddlProvince.DataBind();

            // Then add your first item
            ddlProvince.Items.Insert(0, "Select");
        }


        protected void btnRegister_Click(object sender, EventArgs e)
        {
            lblMessage.Text = "";
            int user = 0;
            if (radAdmin.Checked == true)

                user = 1;

            else if (radEmployer.Checked == true)
                user = 2;

            else
                user = 3;


            SqlConnection con = new SqlConnection("Data Source=(local)\\sqlexpress19;Initial Catalog= FindIn;Trusted_Connection=true;");
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            try
            {
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = "RegisterDetails"; //Stored Procedure Name

                cmd.Parameters.Add("@userName", SqlDbType.NVarChar).Value = txtUserName.Text.Trim();
                cmd.Parameters.Add("@password", SqlDbType.NVarChar).Value = txtPassword.Text;
                cmd.Parameters.Add("@firstName", SqlDbType.NVarChar).Value = txtFirstName.Text.Trim();
                cmd.Parameters.Add("@lastName", SqlDbType.NVarChar).Value = txtLastName.Text.Trim();
                cmd.Parameters.Add("@email", SqlDbType.NVarChar).Value = txtEmail.Text.Trim();
                cmd.Parameters.Add("@cityID", SqlDbType.Int).Value =Convert.ToInt32(hdnCity.Value);

                cmd.Parameters.Add("@provinceID", SqlDbType.Int).Value = Convert.ToInt32(hdnProvince.Value);
                cmd.Parameters.Add("@postcode", SqlDbType.NVarChar).Value = txtPostCode.Text.Trim();
                cmd.Parameters.Add("@userRoleID", SqlDbType.Int).Value = user;

                SqlParameter returnParameter = new SqlParameter();
                returnParameter.Direction = ParameterDirection.ReturnValue;
                cmd.Parameters.Add(returnParameter);
                cmd.ExecuteNonQuery();

                int result = (int)returnParameter.Value;
                if (result == 1)
                    lblMessage.Text = "UserName Exists!! Please give another UserName.";
                else if (result == 2)
                {
                    lblMessage.Text = "Account already Exists for this email id. Please try Login!";
                }
                else 
                    {
                    Response.Redirect("~/Pages/Login.aspx", false);
                }
            }
            catch (Exception ex)
            {
                HttpContext.Current.Session["ErrorMessage"] = "Couldn't Login. Please try again later!!";
                Response.Redirect("~/Pages/ErrorPage.aspx", false);
            }
            finally
            {
                con.Close();

            }
        }

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            txtUserName.Text = string.Empty;
            txtEmail.Text = string.Empty;
            txtEmail.Text = string.Empty;
            txtFirstName.Text = string.Empty;
            txtLastName.Text = string.Empty;
            radAdmin.Checked = false;
            radEmployer.Checked = false;
            radJobSeeker.Checked = false;
            ddlProvince.SelectedIndex = 0;
            ddlCity.SelectedIndex = 0;
            txtPostCode.Text = string.Empty;

        }

        protected void ddlProvince_SelectedIndexChanged(object sender, EventArgs e)
        {
        }

        [WebMethod]
        public static List<ListItem> GetCities(int? id)
        {
            try
            {

                if (id == null)
                {
                    //Page.ClientScript.RegisterStartupScript(this.GetType(), "test",
                    //                       "<Script>ShowaMessage();</Script>");
                    return null;
                }

                else
                {


                    using (SqlConnection con = new SqlConnection("Data Source=(local)\\sqlexpress19;Initial Catalog= FindIn;Trusted_Connection=true;"))
                    using (var cmd = new SqlCommand("GetCities", con))

                    using (var da = new SqlDataAdapter(cmd))
                    {
                        List<ListItem> cities = new List<ListItem>();
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Connection = con;
                        con.Open();
                        cmd.Parameters.Add("@provinceID", SqlDbType.Int).Value = id;

                        using (SqlDataReader sdr = cmd.ExecuteReader())
                        {
                            while (sdr.Read())
                            {
                                cities.Add(new ListItem
                                {
                                    Value = sdr["cityID"].ToString(),
                                    Text = sdr["cityName"].ToString()
                                });
                            }
                        }
                        con.Close();
                        return cities;
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}