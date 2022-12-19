class MainPage{

    get CookiesButton() {
        return cy.get('#__next footer+div div div button');
       // return cy.get('.sc-df34c536-0 > :nth-child(1) > .sc-5d3a275a-1');
    };

};
export default MainPage;