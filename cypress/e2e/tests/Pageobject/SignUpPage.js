import BasePage from "./BasePage";

class SignUpPage extends BasePage {
    email = '[id="email"]';
    password = '[id="password"]';
    fullName = '[id="full_name"]';
    checkBoxIAgree = ".sc-26f7330-5.lBxvj rect";
    checkBoxIWant = ".sc-25ef9dc0-0.qPmCp rect";
    clickCreateAcc = 'div button[type="submit"]';
}
export default SignUpPage;
