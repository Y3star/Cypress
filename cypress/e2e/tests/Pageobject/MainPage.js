import BasePage from "./BasePage";

class MainPage extends BasePage {
    SignUp = 'ul li:nth-child(2) [href="/sign-up"]';
    Login = "div > a:nth-child(4)";
    Talk = '[class*="hhCIhu"] [href="/contact-us"]';
    //main menu
    products = "ul > li:nth-child(1) > span > span";
    solutions = "ul > li:nth-child(3) > span > span";
    resources = "ul > li:nth-child(6) > span > span";
    company = "ul > li:nth-child(8) > span > span";
    pricing = "ul > li:nth-child(10) > span > span";
    //
    supportLink = "header  div > a:nth-child(3)";
    //main menu Title- bottom page
    productsBottomTitle = '[data-e2e*="pro"] div p';
    resourcesBottomTitle = '[data-e2e*="res"] div p';
    pricingBottomTitle = '[data-e2e*="pri"] div p';
    companyBottomTitle = '[data-e2e*="com"] div p';
    missControlBottomTitle = '[data-e2e*="miss"] div p';
    socialBottomTitle = '[data-e2e*="soc"] div p';
    //
}
export default MainPage;
