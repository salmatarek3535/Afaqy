class LandingPage{

   logoutLocator= "//a[text()=' Logout']";
   signUpLocator= "//a[contains(text(),'Signup')]";


    validateAccountSignedUp()
    {
        cy.readFile("cypress/fixtures/signupCredentials.json").then(signUpData =>{
        cy.xpath(`//b[text()="${signUpData.name}"]`).should('be.visible');
        });
    }

    logout(){
        cy.xpath(this.logoutLocator).click();
    }

    validateUserLogout()
    {
        cy.xpath(this.signUpLocator).should('be.visible');
    }


}
export default LandingPage;