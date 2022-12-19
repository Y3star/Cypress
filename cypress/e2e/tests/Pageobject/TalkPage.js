class TalkPage {
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
}
export default TalkPage;
