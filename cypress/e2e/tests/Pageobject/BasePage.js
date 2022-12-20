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
    selectElement(selector, text) {
        return cy.get(selector).select(text);
    }
}
export default BasePage;