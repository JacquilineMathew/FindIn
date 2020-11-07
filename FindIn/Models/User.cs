using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FindIn.Models
{
    public class User
    {
        private int userID;
        private string userName;
        private string password;
        private string firstName;
        private string lastName;
        private string street;
        private int cityID;
        private int provinceID;
        private int countryID;
        private string postCode;
        private string phoneNumber;
        private string alternateNumber;
        private int userRoleID;
        private bool isVerified;
        private int isVerifiedBy;
        private DateTime modifiedDateTime;

        public int UserID { get => userID; set => userID = value; }
        public string UserName { get => userName; set => userName = value; }
        public string Password { get => password; set => password = value; }
        public string FirstName { get => firstName; set => firstName = value; }
        public string LastName { get => lastName; set => lastName = value; }
        public string Street { get => street; set => street = value; }
        public int CityID { get => cityID; set => cityID = value; }
        public int ProvinceID { get => provinceID; set => provinceID = value; }
        public int CountryID { get => countryID; set => countryID = value; }
        public string PostCode { get => postCode; set => postCode = value; }
        public string PhoneNumber { get => phoneNumber; set => phoneNumber = value; }
        public string AlternateNumber { get => alternateNumber; set => alternateNumber = value; }
        public int UserRoleID { get => userRoleID; set => userRoleID = value; }
        public bool IsVerified { get => isVerified; set => isVerified = value; }
        public int IsVerifiedBy { get => isVerifiedBy; set => isVerifiedBy = value; }
        public DateTime ModifiedDateTime { get => modifiedDateTime; set => modifiedDateTime = value; }
    }
}