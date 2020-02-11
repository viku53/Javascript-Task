function valid(){
    
    var form_details = document.forms["myForm"];
    var fname,lname,pass,cpass,zip;
    fname = form_details['fname'].value;
    lname = form_details['lname'].value;
    pass = form_details['pass'].value;
    cpass = form_details['cpass'].value;
    zip = form_details['zip'].value;
    //password Validation
    if(pass != cpass){
        text = "Password Doesn\'t Match";
        document.getElementById('error').innerHTML = text;
        return false;
    }

    //To check first name
    for (var i = fname.length - 1; i >= 0; i--) {
        if(!isNaN(fname[i]))
        {
            text="First Name Should not contain numeric value";
            document.getElementById('error').innerHTML = text;
            return false;
        }
    }


    //To check last name
    for (var i = lname.length - 1; i >= 0; i--) {
        if(!isNaN(lname[i]))
        {
            text="Last Name Should not contain numeric value";
            document.getElementById('error').innerHTML = text;
            return false;
        }
    }

    //To check zip code condition
    if(zip==''){
        return true;
    }else
    if(zip.length!=6||isNaN(zip))
    {
        text="zipcode is not correct";
        document.getElementById('error').innerHTML = text;
        return false;
    }

}