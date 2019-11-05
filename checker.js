
function passwordIsValid(password){
    try{
        if (password.length < 8) throw("password is too short it must be atleast 9 characters long");

        if (password == "") throw("Password should not be empty");

        if (password.match(/[A-Z]/) == null) throw("Password must contain atleast 1 Capital letter");

        if (password.match(/[a-z]/) == null) throw("Password must contain small letters");

        if (password.match(/[{ !@#$%^&*()]/) == null) throw("Password must contain atleast one sprecial character");

        if (password.match(/[0-9]/) == null) throw("Password must contain atleast one number");

        return password;
    } catch(errors) {
       return errors;
    }

}






function passwordIsOk(password){
    try {

    if (password.length < 8) throw("password is too short it must be atleast 9 characters long");

    if (password == "") throw("Password should not be empty");

    if (password.match(/[A-Z]/) == null && password.match(/[a-z]/) == null) throw("Password must contain atleast 1 Capital letter");

 //  if (password.match(/[0-9]/) == null) throw("Password must contain atleast one number");

    return true;
    }
    catch (error){
        return false;
        
    }
}
console.log(passwordIsValid("Kgauza@1993"))
console.log(passwordIsOk("DFGHJKOYJK"));

module.exports = {
    passwordIsValid,
     passwordIsOk
}