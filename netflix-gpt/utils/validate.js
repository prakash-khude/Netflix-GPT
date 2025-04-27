export const checkValidData = (email, password) =>{
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = password.length >= 6 && password.length <= 20 && /[a-zA-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*]/.test(password);
    if(!isEmailValid) return "Email id is not valid";
    if(!isPasswordValid) return "Password must be between 6 to 20 characters and contain at least one letter, one number, and one special character";
    return "";
}