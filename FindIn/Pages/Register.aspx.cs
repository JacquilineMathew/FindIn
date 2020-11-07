using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

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

        }

        protected void btnCancel_Click(object sender, EventArgs e)
        {

        }

        protected void ddlProvince_SelectedIndexChanged(object sender, EventArgs e)
        {
        }

        [System.Web.Services.WebMethod]
        public static DataTable GetCities(int id)
        {

            DataTable table = new DataTable();
            using (SqlConnection con = new SqlConnection("Data Source=(local)\\sqlexpress19;Initial Catalog= FindIn;Trusted_Connection=true;"))
            using (var cmd = new SqlCommand("GetCities", con))

            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add("@provinceID", SqlDbType.Int).Value = id;
                da.Fill(table);
            }

          return table;
        }


    }
}