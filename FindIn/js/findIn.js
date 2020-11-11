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


function GetCities() {
    Id = document.getElementById('MainContent_ddlProvince').value;
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
        document.getElementById('MainContent_hdnProvince').value = document.getElementById('MainContent_ddlProvince').value ;
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




