class LoginPage {
    loginInput = '[class*="caUEVB"] input[name="email"]';

setValueInput(selector,text){
    return cy.get(selector).type(text) //'[class*="caUEVB"] input[name="email"]'
}
get password(){
    return cy.get('[class*="caUEVB"] input[name="password"]')
}
get checkBox(){
    return cy.get('[data-icon="square"]')
}
get submit(){
    return cy.get('[aria-label="loginForm"] button')
}
get logError(){
    return cy.get('.Message__MessageContent-sc-1lbs5ge-1')
}
}
export default LoginPage;
