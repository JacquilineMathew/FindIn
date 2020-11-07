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
    $.ajax({
        type: "POST",
        url: "Register.aspx/GetCities",
        data: ' {id:' + Id + '}',
        ContentType: "application/Json;Charset=utf-8",
        datatype: "Json"
        ,

        success: function (response) {
            var data = response.d;


            var Names = document.getElementById('MainContent_ddlCity');
            if (document.getElementById('mastercontent_ddl2').value > 0) {

                Names.length = 0;
                var opt;
                opt = document.createElement('option');
                Names.options.add(opt);
                opt.text = 'Select ';
                opt.value = 0;
                if (data.Rows.length > 0) {
                    for (var i = 0; i < data.Rows.length; i++) {

                        opt = document.createElement('option');
                        Names.options.add(opt);
                        opt.text = data.Rows[i].Name;
                        opt.value = data.Rows[i].ID;
                    }
                    Names.selectedIndex = 0;
                    //document.getElementById('tdQues').style.color = "Black";
                    //document.getElementById('content_ddl1').disabled = false;
                    //var currentValue = $("#progressbar").progressbar('option', 'value');

                }

            }


        },
        failure: function (response) {
            alert(response.d);
        }


    });

//Function OnSuccess(responce){
//    alert(responce.d);
//}
}
