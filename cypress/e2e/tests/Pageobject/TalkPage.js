import BasePage from "./BasePage";

class TalkPage extends BasePage {
    email = "#Email";
    firstName = "#FirstName";
    selecter = "#Reason_for_Contact__c";
    lastName = "#LastName";
    selecter2 = "#Phone_Number_Extension__c";
    phone = "#Phone_Number_Base__c";
    web = "#Website";
    describe = "#Form_Additional_Information__c";
    checkBox = '[type="checkbox"]';
    submit = '[type="submit"]';
    //numbers phone
    get phoneEstonia() {
        return cy.get('[href="tel:+372-699-1435"] span');
    }
    get phoneFinland() {
        return cy.get('[href="tel:+358-753-255-300"] span');
    }
    get phoneIreland() {
        return cy.get('[href="tel:+353-818-123-457"] span');
    }
    get phoneIsrael() {
        return cy.get('[href="tel:+972-772-2000-92"] span');
    }
    get phoneMexico() {
        return cy.get('[href="tel:+52-558-897-4917"] span');
    }
    get phoneNetherlands() {
        return cy.get('[href="tel:+31-853-018-256"] span');
    }
}
export default TalkPage;
