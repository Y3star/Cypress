class BasePage {
    // methods
    goto() {
        cy.visit("https://telnyx.com");
        cy.wait(200);
    }
    clickCookiesButton() {
        return cy.get("#__next footer+div div div button").click();
    }
    setValueInput(selector, text) {
        return cy.get(selector).type(text);
    }
    clickElement(selector) {
        return cy.get(selector).click();
    }
    screenshotElement(selector, name) {
        return cy.get(selector).screenshot(name);
    }
    selectElementByOption(selector, text) {
        return cy.get(selector).select(text);
    }
    selectElementByIndex(selector, index) {
        return cy.get(selector).select(index);
    }
    getElement(selector){
        return cy.get(selector);
    }
}
export default BasePage;