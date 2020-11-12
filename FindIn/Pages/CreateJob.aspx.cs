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
    }
}