class MainPage {
    get site() {
        cy.visit("https://telnyx.com");
    }
    get CookiesButton() {
        return cy.get("#__next footer+div div div button");
    }
    get SignUp() {
        return cy.get('ul li:nth-child(2) [href="/sign-up"]');
    }
    get LogIn() {
        return cy.get("div > a:nth-child(4)");
    }
    get Talk(){
        return cy.get('[class*="hhCIhu"] [href="/contact-us"]')
    }
}
export default MainPage;
