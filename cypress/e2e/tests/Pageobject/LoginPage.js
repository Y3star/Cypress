import BasePage from "./BasePage";

class LoginPage extends BasePage{
    loginInput = '[class*="caUEVB"] input[name="email"]';
    passwordInput = '[class*="caUEVB"] input[name="password"]';
    checkBox = '[data-icon="square"]';
    submit = '[aria-label="loginForm"] button';
    loginError = ".Message__MessageContent-sc-1lbs5ge-1";
}
export default LoginPage;
