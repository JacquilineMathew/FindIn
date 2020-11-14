using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FindIn.Pages
{
    public partial class CreateJob : System.Web.UI.Page
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

            table = new DataTable();

            using (SqlConnection con = new SqlConnection("Data Source=(local)\\sqlexpress19;Initial Catalog= FindIn;Trusted_Connection=true;"))
            using (var cmd = new SqlCommand("GetJobTypes", con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                da.Fill(table);
            }

            ddlJobType.DataSource = table;
            ddlJobType.DataValueField = "jobTypeID";
            ddlJobType.DataTextField = "jobName";
            ddlJobType.DataBind();

            // Then add your first item
            ddlJobType.Items.Insert(0, "Select");

            //Calling Javascript function to fill Benefits
            Page.ClientScript.RegisterStartupScript(this.GetType(), "test",
                                        "<Script>GetBenefits();</Script>");
        }

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            txtCompany.Text = string.Empty;
            ddlJobType.SelectedIndex = 0;
            ddlProvince.SelectedIndex = 0;
            ddlCity.SelectedIndex = 0;
            ddlRole.SelectedIndex = 0;
            txtFromSalary.Text = string.Empty;
            txtToSalary.Text = string.Empty;
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

        [WebMethod]
        public static List<ListItem> GetSkills(int? id)
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
                    using (var cmd = new SqlCommand("GetSkillsByJobType", con))

                    using (var da = new SqlDataAdapter(cmd))
                    {
                        List<ListItem> cities = new List<ListItem>();
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Connection = con;
                        con.Open();
                        cmd.Parameters.Add("@jobTypeID", SqlDbType.Int).Value = id;

                        using (SqlDataReader sdr = cmd.ExecuteReader())
                        {
                            while (sdr.Read())
                            {
                                cities.Add(new ListItem
                                {
                                    Value = sdr["skilID"].ToString(),
                                    Text = sdr["skillName"].ToString()
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

        [WebMethod]
        public static List<ListItem> GetBenefitsOfJobs()
        {
            try
            {




                using (SqlConnection con = new SqlConnection("Data Source=(local)\\sqlexpress19;Initial Catalog= FindIn;Trusted_Connection=true;"))
                using (var cmd = new SqlCommand("GetBenefitsOfJobs", con))

                using (var da = new SqlDataAdapter(cmd))
                {
                    List<ListItem> cities = new List<ListItem>();
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Connection = con;
                    con.Open();

                    using (SqlDataReader sdr = cmd.ExecuteReader())
                    {
                        while (sdr.Read())
                        {
                            cities.Add(new ListItem
                            {
                                Value = sdr["benefitID"].ToString(),
                                Text = sdr["benefitName"].ToString()
                            });
                        }
                    }
                    con.Close();
                    return cities;
                }
            }

            catch (Exception ex)
            {
                throw ex;
            }
        }

        [WebMethod]
        public static List<ListItem> GetRolesByJobType(int? id)
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
                    using (var cmd = new SqlCommand("GetRolesByJobType", con))

                    using (var da = new SqlDataAdapter(cmd))
                    {
                        List<ListItem> cities = new List<ListItem>();
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Connection = con;
                        con.Open();
                        cmd.Parameters.Add("@jobTypeID", SqlDbType.Int).Value = id;

                        using (SqlDataReader sdr = cmd.ExecuteReader())
                        {
                            while (sdr.Read())
                            {
                                cities.Add(new ListItem
                                {
                                    Value = sdr["roleID"].ToString(),
                                    Text = sdr["roleName"].ToString()
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

        protected void btnCreate_Click(object sender, EventArgs e)
        {
            SqlConnection con = new SqlConnection("Data Source=(local)\\sqlexpress19;Initial Catalog= FindIn;Trusted_Connection=true;");
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            try
            {
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = "CreateJob"; //Stored Procedure Name

                cmd.Parameters.Add("@company", SqlDbType.NVarChar).Value = txtCompany.Text.Trim();
                cmd.Parameters.Add("@jobType", SqlDbType.Int).Value = Convert.ToInt32(ddlJobType.SelectedValue);
                cmd.Parameters.Add("@skills", SqlDbType.NVarChar).Value = hdnskills.Value;
                cmd.Parameters.Add("@roles", SqlDbType.NVarChar).Value = hdnRole.Value; 
                cmd.Parameters.Add("@fromSalary", SqlDbType.Int).Value = Convert.ToInt32(txtFromSalary.Text.Trim());
                cmd.Parameters.Add("@toSalary", SqlDbType.Int).Value = Convert.ToInt32(txtToSalary.Text.Trim());
                cmd.Parameters.Add("@cityID", SqlDbType.Int).Value = Convert.ToInt32(hdnCity.Value);
                cmd.Parameters.Add("@provinceID", SqlDbType.Int).Value = Convert.ToInt32(ddlProvince.SelectedValue);
                cmd.Parameters.Add("@street", SqlDbType.NVarChar).Value = txtStreet.Text.Trim();
                cmd.Parameters.Add("@postCode", SqlDbType.NVarChar).Value = txtStreet.Text.Trim();

                SqlParameter returnParameter = new SqlParameter();
                returnParameter.Direction = ParameterDirection.ReturnValue;
                cmd.Parameters.Add(returnParameter);
                cmd.ExecuteNonQuery();

                int result = (int)returnParameter.Value;
                
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
    }
}