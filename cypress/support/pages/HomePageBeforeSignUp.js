class HomePageBeforeSignUp{

    signUpLocator= "//a[contains(text(),'Signup')]";
    featuresItemsLocator= "//h2[text()='Features Items']"

    validateHomePage()
    {
        cy.xpath(this.featuresItemsLocator).should('be.visible');
    }

    navigateToLoginPage()
    {
        cy.xpath(this.signUpLocator).click();
    }
}
export default HomePageBeforeSignUp;