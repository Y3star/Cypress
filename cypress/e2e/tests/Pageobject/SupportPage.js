import BasePage from "./BasePage";

class SupportPage extends BasePage{
get input(){
    return cy.get('[name="q"]')
}
get randomSectionclick(){
    return cy.get('.section div:nth-child(4)')
}

}
export default SupportPage;
