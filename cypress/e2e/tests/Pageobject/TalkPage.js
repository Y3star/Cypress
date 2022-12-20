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
}
export default TalkPage;
