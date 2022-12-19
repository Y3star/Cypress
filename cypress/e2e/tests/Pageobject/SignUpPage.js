import BasePage from "./BasePage";

class SignUpPage extends BasePage{
    get email() {
        return cy.get('[id="email"]');
    }
    get password() {
        return cy.get('[id="password"]');
    }
    get fullName() {
        return cy.get('[id="full_name"]');
    }
    get checkBoxIWant() {
        return cy.get(".sc-25ef9dc0-0.qPmCp rect");
    }
    get checkBoxIAgree() {
        return cy.get(".sc-26f7330-5.lBxvj rect");
    }
    get clickCreateAcc() {
        return cy.get('div button[type="submit"]')
    }
}
export default SignUpPage;
