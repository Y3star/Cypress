import BasePage from "./BasePage";

class LoginPage extends BasePage {
    // input field's
    emailInput = '[class*="caUEVB"] input[name="email"]';
    passwordInput = '[class*="caUEVB"] input[name="password"]';
    // checkbox , button's
    checkBox = '[data-icon="square"]';
    submit = '[aria-label="loginForm"] button';
    // message
    checkBoxError = ".Message__MessageContainer-sc-1lbs5ge-0";
    error = '[class*="ErrorMessage"]'; // dont work at one time with email and password
}
export default LoginPage;
