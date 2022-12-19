class MainPage {
    get site() {
        cy.visit("https://telnyx.com");
    }
    get CookiesButton() {
        return cy.get("#__next footer+div div div button");
    }
    get SignUp(){
        return cy.get('ul li:nth-child(2) [href="/sign-up"]')
    }
}
export default MainPage;
