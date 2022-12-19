import BasePage from "./BasePage";

class TalkPage  extends BasePage{
    get email() {
        return cy.get("#Email");
    }
    get firstName() {
        return cy.get("#FirstName");
    }
    get selecter() {
        return cy.get("#Reason_for_Contact__c");
    }
    get lastName() {
        return cy.get("#LastName");
    }
    get selecter2() {
        return cy.get("#Phone_Number_Extension__c");
    }
    get phone() {
        return cy.get("#Phone_Number_Base__c");
    }
    get web() {
        return cy.get("#Website");
    }
    get desc() {
        return cy.get("#Form_Additional_Information__c");
    }
    get checkBox(){
        return cy.get('[type="checkbox"]')
    }
    get submit(){
        return cy.get('[type="submit"]')
    }
    //numbers phone
    get phoneEstonia(){
        return cy.get('[href="tel:+372-699-1435"] span')
    }
    get phoneFinland(){
        return cy.get('[href="tel:+358-753-255-300"] span')
    }
    get phoneIreland(){
        return cy.get('[href="tel:+353-818-123-457"] span')
    }
    get phoneIsrael(){
        return cy.get('[href="tel:+972-772-2000-92"] span')
    }
    get phoneMexico(){
        return cy.get('[href="tel:+52-558-897-4917"] span')
    }
    get phoneNetherlands(){
        return cy.get('[href="tel:+31-853-018-256"] span')
    }
}
export default TalkPage;
