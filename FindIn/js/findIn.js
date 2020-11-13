function LoginValidation() {
    var flag = 0;
    if (document.getElementById('MainContent_txtUserName').value == '') {
        document.getElementById('MainContent_lblUserNameMessage').innerHTML = 'Please enter the username.';
        document.getElementById('MainContent_lblUserNameMessage').style.display = "block";
        document.getElementById('MainContent_txtUserName').focus();
        flag = 1;
    }
    else {
        document.getElementById('MainContent_lblUserNameMessage').innerHTML = '';
        document.getElementById('cMainContent_lblUserNameMessage').style.display = "none";
    }
    if (document.getElementById('MainContent_txtPassword').value == '') {
        document.getElementById('MainContent_lblPasswordMessage').innerHTML = 'Please enter the password.';
        document.getElementById('MainContent_lblPasswordMessage').style.display = "block";
        document.getElementById('MainContent_txtPassword').focus();
        flag = 1;
    }
    else {
        document.getElementById('MainContent_lblPasswordMessage').innerHTML = '';
        document.getElementById('MainContent_lblPasswordMessage').style.display = "none";
    }

    if (flag == 1) {
        return false;
    }
}


// Validating Registration Page
function RegisterValidation() {
    var flag = 0;
    if (document.getElementById('MainContent_txtUserName').value == '') {
        document.getElementById('MainContent_lblUserNameMessage').innerHTML = 'Please enter the username.';
        document.getElementById('MainContent_lblUserNameMessage').style.display = "block";
        document.getElementById('MainContent_txtUserName').focus();
        flag = 1;
    }
    else {
        document.getElementById('MainContent_lblUserNameMessage').innerHTML = '';
        document.getElementById('MainContent_lblUserNameMessage').style.display = "none";
    }
    if (document.getElementById('MainContent_txtFirstName').value == '') {
        document.getElementById('MainContent_lblFirstNameMessage').innerHTML = 'Please enter the first name.';
        document.getElementById('MainContent_lblFirstNameMessage').style.display = "block";
        document.getElementById('MainContent_txtFirstName').focus();
        flag = 1;
    }
    else {
        document.getElementById('MainContent_lblFirstNameMessage').innerHTML = '';
        document.getElementById('MainContent_lblFirstNameMessage').style.display = "none";
    }
    if (document.getElementById('MainContent_txtLastName').value == '') {
        document.getElementById('MainContent_lblLastNameMessage').innerHTML = 'Please enter the last name.';
        document.getElementById('MainContent_lblLastNameMessage').style.display = "block";
        document.getElementById('MainContent_txtLastName').focus();
        flag = 1;
    }
    else {
        document.getElementById('MainContent_lblLastNameMessage').innerHTML = '';
        document.getElementById('MainContent_lblLastNameMessage').style.display = "none";
    }
    if (document.getElementById('MainContent_txtPassword').value == '') {
        document.getElementById('MainContent_lblPasswordMessage').innerHTML = 'Please enter the password.';
        document.getElementById('MainContent_lblPasswordMessage').style.display = "block";
        document.getElementById('MainContent_txtPassword').focus();
        flag = 1;
    }
    else {
        document.getElementById('MainContent_lblPasswordMessage').innerHTML = '';
        document.getElementById('MainContent_lblPasswordMessage').style.display = "none";
    }

    var inputtxt = document.getElementById('MainContent_txtEmail');
    var validemail = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;

    if (inputtxt.value.match(validemail)) {
        document.getElementById('MainContent_lblEmailMessage').style.display = "none";
        document.getElementById('MainContent_lblEmailMessage').innerHTML = '';
    }
    else {
        document.getElementById('MainContent_lblEmailMessage').style.display = "block";
        document.getElementById('MainContent_lblEmailMessage').innerHTML = 'Please enter a valid email address.';
        document.getElementById('MainContent_txtEmail').focus();
        flag = 1;
    }
    var inputpwdtxt = document.getElementById('MainContent_txtPassword');
    var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (inputpwdtxt.value.match(paswd)) {
        document.getElementById('MainContent_lblPasswordMessage').style.display = "none";
        document.getElementById('MainContent_lblPasswordMessage').innerHTML = '';

    }
    else {
        document.getElementById('MainContent_lblPasswordMessage').style.display = "block";
        document.getElementById('MainContent_lblPasswordMessage').innerHTML = 'Please enter a a password between 7 to 15 characters which contain at least one numeric digit and a special character.';
        document.getElementById('MainContent_txtPassword').focus();
        flag = 1;
    }

    if ($('#MainContent_radEmployer').is(":checked") || $('#MainContent_radJobSeeker').is(":checked")
        || $('#MainContent_radAdmin').is(":checked")) {
        document.getElementById('MainContent_lblUserMessage').style.display = "none";
        document.getElementById('MainContent_lblUserMessage').innerHTML = '';
    }
    else {
        document.getElementById('MainContent_lblUserMessage').style.display = "block";
        document.getElementById('MainContent_lblUserMessage').innerHTML = 'Please select who you are.';
        document.getElementById('MainContent_radEmployer').focus();
        flag = 1;
    }
    if (document.getElementById('MainContent_ddlProvince').value > 0) {
        document.getElementById('MainContent_lblProvinceMessage').style.display = "none";
        document.getElementById('MainContent_lblProvinceMessage').innerHTML = '';
        document.getElementById('MainContent_hdnProvince').value = document.getElementById('MainContent_ddlProvince').value;
    }
    else {
        document.getElementById('MainContent_lblProvinceMessage').style.display = "block";
        document.getElementById('MainContent_lblProvinceMessage').innerHTML = 'Please choose a province.';
        document.getElementById('MainContent_ddlProvince').focus();
        flag = 1;
    }
    if (document.getElementById('MainContent_ddlCity').value > 0) {
        document.getElementById('MainContent_lblCityMessage').style.display = "none";
        document.getElementById('MainContent_lblCityMessage').innerHTML = '';
        document.getElementById('MainContent_hdnCity').value = document.getElementById('MainContent_ddlCity').value;
    }
    else {
        document.getElementById('MainContent_lblCityMessage').style.display = "block";
        document.getElementById('MainContent_lblCityMessage').innerHTML = 'Please choose a province.';
        document.getElementById('MainContent_ddlCity').focus();
        flag = 1;
    }
    //if (document.getElementById('MainContent_txtStreet').value == '') {
    //    document.getElementById('MainContent_lblStreetMessage').innerHTML = 'Please enter the street.';
    //    document.getElementById('MainContent_lblStreetMessage').style.display = "block";
    //    document.getElementById('MainContent_txtStreet').focus();
    //    flag = 1;
    //}
    //else {
    //    document.getElementById('MainContent_lblStreetMessage').innerHTML = '';
    //    document.getElementById('MainContent_lblStreetMessage').style.display = "none";
    //}
    if (document.getElementById('MainContent_txtPostCode').value == '') {
        document.getElementById('MainContent_lblPostCodeMessage').innerHTML = 'Please enter the postcode.';
        document.getElementById('MainContent_lblPostCodeMessage').style.display = "block";
        document.getElementById('MainContent_txtPassword').focus();
        flag = 1;
    }
    else {
        document.getElementById('MainContent_lblPostCodeMessage').innerHTML = '';
        document.getElementById('MainContent_lblPostCodeMessage').style.display = "none";
    }
    if (flag == 1) {
        return false;
    }

}

//To fill cities dropdown for  the selected Province
function GetCities() {
    var Id = document.getElementById('MainContent_ddlProvince').value;
    PageMethods.GetCities(Id, Success, Failure);
}

function Success(result) {
    var data = document.getElementById('MainContent_ddlCity');
    if (document.getElementById('MainContent_ddlProvince').value > 0) {
        data.options.length = 0;
        var opt;
        opt = document.createElement('option');
        opt.text = 'Select ';
        opt.value = 0;
        data.options.add(opt);

        if (result.length > 0) {
            for (var i = 0; i < (result.length); i++) {

                opt = document.createElement('option');
                opt.text = result[i].Text;
                opt.value = result[i].Value;
                data.add(opt);
            }
            data.selectedIndex = 0;
        }

    }
    return true;
}

function Failure(error) {
    alert(error);
    return false;
}


// To fill skills and benefits for Job Type-------------------------------------------
function GetJobTypeDetails() {
    var Id = document.getElementById('MainContent_ddlJobType').value;
    PageMethods.GetSkills(Id, SuccessJobType, Failure);
    PageMethods.GetRolesByJobType(Id, SuccessJobRoles, Failure);
   
}

function SuccessJobType(data) {
    var container = document.getElementById('MainContent_pnlskillresult');
    document.getElementById('MainContent_pnlskillresult').innerHTML = '';
    //to add checkbox dynamically to panel
    for (var i = 0; i < data.length; i++) {
       
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = ("chk" + data[i].Text);
        checkbox.value = data[i].Value;
        checkbox.id = ("chk" + i);        
        var label = document.createElement('label')
        label.htmlFor = ("lbl" + i);
        label.appendChild(document.createTextNode(data[i].Text));

        container.appendChild(checkbox);
        container.appendChild(label);
        container.appendChild(document.createElement("br"));

        //if (document.getElementById('mastercontent_hfSkillIds') != '') {
        //    var careerIds = document.getElementById('mastercontent_hfIds').value.split(',');
        //    for (var j = 0; j < careerIds.length; j++) {
        //        if (checkbox.value == careerIds[j]) {
        //            checkbox.checked = true;
        //        }
        //    }
        //}
    }
}



function SuccessJobRoles(result) {
    var data = document.getElementById('MainContent_ddlRole');
    if (document.getElementById('MainContent_ddlJobType').value > 0) {
        data.options.length = 0;
        var opt;
        opt = document.createElement('option');
        opt.text = 'Select ';
        opt.value = 0;
        data.options.add(opt);

        if (result.length > 0) {
            for (var i = 0; i < (result.length); i++) {

                opt = document.createElement('option');
                opt.text = result[i].Text;
                opt.value = result[i].Value;
                data.add(opt);
            }
            data.selectedIndex = 0;
        }

    }
    return true;
}


// Fill Benefits --------------------------------------------------------------------------

function GetBenefits() {
    PageMethods.GetBenefitsOfJobs(SuccessBenefits, Failure);
}

function SuccessBenefits(data) {
    var container = document.getElementById('MainContent_pnlbenefitresult');
    document.getElementById('MainContent_pnlbenefitresult').innerHTML = '';
    //to add checkbox dynamically to panel
    for (var i = 0; i < data.length; i++) {

        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = ("chk" + data[i].Text);
        checkbox.value = data[i].Value;
        checkbox.id = ("chk" + i);
        var label = document.createElement('label')
        label.htmlFor = ("lbl" + i);
        label.appendChild(document.createTextNode(data[i].Text));

        container.appendChild(checkbox);
        container.appendChild(label);
        container.appendChild(document.createElement("br"));

        //if (document.getElementById('mastercontent_hfSkillIds') != '') {
        //    var careerIds = document.getElementById('mastercontent_hfIds').value.split(',');
        //    for (var j = 0; j < careerIds.length; j++) {
        //        if (checkbox.value == careerIds[j]) {
        //            checkbox.checked = true;
        //        }
        //    }
        //}
    }
}



// Validation of CreateJob page----------------------------------------------------

function CreateValidation() {
    var flag = 0;
   
    if (document.getElementById('MainContent_txtCompany').value == ' ') {
        document.getElementById('MainContent_lblCompanyMessage').innerHTML = 'Please enter the company name.';
        document.getElementById('MainContent_lblCompanyMessage').style.display = "block";
        document.getElementById('MainContent_txtCompany').focus();
        flag = 1;
    }
    else {
        document.getElementById('MainContent_lblCompanyMessage').innerHTML = ' ';
        document.getElementById('MainContent_lblCompanyMessage').style.display = "none";
    }    
        
    if (document.getElementById('MainContent_ddlJobType').value > 0) {
        document.getElementById('MainContent_lblJobTypeMessage').style.display = "none";
        document.getElementById('MainContent_lblJobTypeMessage').innerHTML = '';
  }
    else {
        document.getElementById('MainContent_lblJobTypeMessage').style.display = "block";
        document.getElementById('MainContent_lblJobTypeMessage').innerHTML = 'Please choose a job type.';
        document.getElementById('MainContent_ddlJobType').focus();
        flag = 1;
    }
    if (document.getElementById('MainContent_txtFromSalary').value == ' ') {
        document.getElementById('MainContent_lblSalaryMessage').innerHTML = 'Please give the salary range.';
        document.getElementById('MainContent_lblSalaryMessage').style.display = "block";
        document.getElementById('MainContent_txtFromSalary').focus();
        flag = 1;
    }
    else {
        document.getElementById('MainContent_lblSalaryMessage').innerHTML = ' ';
        document.getElementById('MainContent_lblSalaryMessage').style.display = "none";
    }   
    if (document.getElementById('MainContent_txtToSalary').value == ' ') {
        document.getElementById('MainContent_lblSalaryMessage').innerHTML = 'Please give the salary range.';
        document.getElementById('MainContent_lblSalaryMessage').style.display = "block";
        document.getElementById('MainContent_txtToSalary').focus();
        flag = 1;
    }
    else {
        document.getElementById('MainContent_lblSalaryMessage').innerHTML = ' ';
        document.getElementById('MainContent_lblSalaryMessage').style.display = "none";
    }   
    if (document.getElementById('MainContent_ddlProvince').value > 0) {
        document.getElementById('MainContent_lblProvinceMessage').style.display = "none";
        document.getElementById('MainContent_lblProvinceMessage').innerHTML = '';
   }
    else {
        document.getElementById('MainContent_lblProvinceMessage').style.display = "block";
        document.getElementById('MainContent_lblProvinceMessage').innerHTML = 'Please choose a province.';
        document.getElementById('MainContent_ddlProvince').focus();
        flag = 1;
    }
    if (document.getElementById('MainContent_ddlCity').value > 0) {
        document.getElementById('MainContent_lblCityMessage').style.display = "none";
        document.getElementById('MainContent_lblCityMessage').innerHTML = '';
        document.getElementById('MainContent_hdnCity').value = document.getElementById('MainContent_ddlCity').value;
    }
    else {
        document.getElementById('MainContent_lblCityMessage').style.display = "block";
        document.getElementById('MainContent_lblCityMessage').innerHTML = 'Please choose a city.';
        document.getElementById('MainContent_ddlCity').focus();
        flag = 1;
    }
    if (document.getElementById('MainContent_txtStreet').value == '') {
        document.getElementById('MainContent_lblStreetMessage').innerHTML = 'Please enter the street name name.';
        document.getElementById('MainContent_lblStreetMessage').style.display = "block";
        document.getElementById('MainContent_txtStreet').focus();
        flag = 1;
    }
    else {
        document.getElementById('MainContent_lblStreetMessage').innerHTML = '';
        document.getElementById('MainContent_lblStreetMessage').style.display = "none";
    }
    if (document.getElementById('MainContent_txtPostCode').value == '') {
        document.getElementById('MainContent_lblPostCodeMessage').innerHTML = 'Please enter the post code.';
        document.getElementById('MainContent_lblPostCodeMessage').style.display = "block";
        document.getElementById('MainContent_txtPostCode').focus();
        flag = 1;
    }
    else {
        document.getElementById('MainContent_lblPostCodeMessage').innerHTML = '';
        document.getElementById('MainContent_lblPostCodeMessage').style.display = "none";
    }
    if (document.getElementById('MainContent_txtPhoneNumber').value == '') {
        document.getElementById('MainContent_lblPhoneNumberMessage').innerHTML = 'Please enter the phone number.';
        document.getElementById('MainContent_lblPhoneNumberMessage').style.display = "block";
        document.getElementById('MainContent_txtPhoneNumber').focus();
        flag = 1;
    }
    else {
        document.getElementById('MainContent_lblPhoneNumberMessage').innerHTML = '';
        document.getElementById('MainContent_lblPhoneNumberMessage').style.display = "none";
    }
    if (document.getElementById('MainContent_ddlRole').value > 0) {
        document.getElementById('MainContent_lblRoleMessage').innerHTML = ' ';
        document.getElementById('MainContent_lblRoleMessage').style.display = "none";
        document.getElementById('MainContent_hdnRole').value = document.getElementById('MainContent_ddlRole').value;

    }
    else {
        document.getElementById('MainContent_lblRoleMessage').innerHTML = 'Please choose a role.';
        document.getElementById('MainContent_lblRoleMessage').style.display = "block";
        document.getElementById('MainContent_ddlRole').focus();
        flag = 1;
      
    }    
   
    if (flag == 1) {
        return false;
    }
    else {
        Save();
    }
}




//-------------------------------------------------------------------------------------------

function Save() {
    var parent = document.getElementById('MainContent_pnlskillresult');
    var childs = parent.childNodes;
    var txt = "";
    var i;
    document.getElementById('MainContent_hdnskills').value = '';
    for (i = 0; i < childs.length; i++) {
         if (childs[i].checked == true) {          
            
            document.getElementById('MainContent_hdnskills').value =
                document.getElementById('MainContent_hdnskills').value + childs[i].value + ",";
  
        }
    }
    document.getElementById('MainContent_hdnRole').value = document.getElementById('MainContent_ddlRole').value;
    document.getElementById('MainContent_hdnCity').value = document.getElementById('MainContent_ddlCity').value;
    var parent = document.getElementById('MainContent_pnlbenefitresult');
    var childs = parent.childNodes;
    var txt = "";
    var i;
    document.getElementById('MainContent_hdnBenefits').value = '';
    for (i = 0; i < childs.length; i++) {
        if (childs[i].checked == true) {

            document.getElementById('MainContent_hdnBenefits').value =
                document.getElementById('MainContent_hdnBenefits').value + childs[i].value + ",";

        }
    }
  
}