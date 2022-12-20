import BasePage from "./BasePage";

class TalkPage extends BasePage {
    //input fields
    email = "#Email";
    firstName = "#FirstName";
    lastName = "#LastName";
    phone = "#Phone_Number_Base__c";
    web = "#Website";
    describe = "#Form_Additional_Information__c";
    //select elements
    selecter = "#Reason_for_Contact__c";
    selecter2 = "#Phone_Number_Extension__c";
    //check box
    checkBox = '[type="checkbox"]';
    //button
    submit = '[type="submit"]';
}
export default TalkPage;
