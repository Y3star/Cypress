import BasePage from "./BasePage";

class LoginPage extends BasePage {
    emailInput = '[class*="caUEVB"] input[name="email"]';
    passwordInput = '[class*="caUEVB"] input[name="password"]';
    checkBox = '[data-icon="square"]';
    submit = '[aria-label="loginForm"] button';
    checkBoxError = ".Message__MessageContainer-sc-1lbs5ge-0";
    error = '[class*="ErrorMessage"]'; // dont work at one time with email and password
}
export default LoginPage;
