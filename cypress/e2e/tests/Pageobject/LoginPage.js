class LoginPage {
get email(){
    return cy.get('[class*="caUEVB"] input[name="email"]')
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
}
export default LoginPage;
