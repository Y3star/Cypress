import BasePage from "./BasePage";

class MainPage extends BasePage {
    get SignUp() {
        return cy.get('ul li:nth-child(2) [href="/sign-up"]');
    }
    get Login() {
        return cy.get("div > a:nth-child(4)");
    }
    get Talk() {
        return cy.get('[class*="hhCIhu"] [href="/contact-us"]');
    }
    //main menu
    get products() {
        return cy.get("ul > li:nth-child(1) > span > span");
    }
    get solutions() {
        return cy.get("ul > li:nth-child(3) > span > span");
    }
    get resources() {
        return cy.get("ul > li:nth-child(6) > span > span");
    }
    get company() {
        return cy.get("ul > li:nth-child(8) > span > span");
    }
    get pricing() {
        return cy.get("ul > li:nth-child(10) > span > span");
    }
    //
    get supportLink(){
        return cy.get("header  div > a:nth-child(3)")
    }
    //
    get productsBottom(){
        return cy.get('[data-e2e*="pro"] div p')
    }
    get resourcesBottom(){
        return cy.get('[data-e2e*="res"] div p')
    }
    get pricingBottom(){
        return cy.get('[data-e2e*="pri"] div p')
    }
    get companyBottom(){
        return cy.get('[data-e2e*="com"] div p')
    }
    get missControlBottom(){
        return cy.get('[data-e2e*="miss"] div p')
    }
    get socialBottom(){
        return cy.get('[data-e2e*="soc"] div p')
    }
    //
}
export default MainPage;
