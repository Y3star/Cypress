class LoginPage {
setValueEmailLogin(text){
    return cy.get('[class*="caUEVB"] input[name="email"]').type(text)
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
