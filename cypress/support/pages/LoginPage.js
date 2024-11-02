class LoginPage{

    signUpFormLocator= ".signup-form";
    signUpNameLocator= "input[data-qa='signup-name']";
    signUpEmailLocator= "input[data-qa='signup-email']";
    signUpButtonLocator= "button[data-qa='signup-button']";

    validateLoginPage()
    {
        cy.get(this.signUpFormLocator).should('be.visible');
    }

    fillSignUpForm(){
        cy.readFile("cypress/fixtures/signupCredentials.json").then(signUpData =>{
            cy.get(this.signUpNameLocator).type(signUpData.name);
            cy.get(this.signUpEmailLocator).type(signUpData.email);
            cy.get(this.signUpButtonLocator).click();
        })
    }


}
export default LoginPage;