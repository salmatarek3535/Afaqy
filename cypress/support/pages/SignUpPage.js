class SignUpPage{

    accountInformationLocator= "//b[text()='Enter Account Information']";
    genderLocator= "#uniform-id_gender2";
    passwordLocator= "#password";
    firstNameLocator="#first_name";
    lastNameLocator= "#last_name";
    companyLocator= "#company";
    addressLocator= "#address1";
    countryLocator= "#country";
    stateLocator= "#state";
    cityLocator= "#city";
    zipCodeLocator= "#zipcode";
    mobileNumberLocator= "#mobile_number";
    createAccountBtnLocator= "button[data-qa='create-account']";
    accountCreatedLocator= "h2[data-qa='account-created']";
    continueBtnLocator= "a[data-qa='continue-button']";

    validateSignUpPage()
    {
        cy.xpath(this.accountInformationLocator).should('be.visible');
    }

    fillSignUpData(){
        cy.readFile("cypress/fixtures/signupCredentials.json").then(signUpData =>{
            cy.get(this.genderLocator).click();
            cy.get(this.passwordLocator).type(signUpData.password);
            cy.get(this.firstNameLocator).type(signUpData.firstName);
            cy.get(this.lastNameLocator).type(signUpData.lastName);
            cy.get(this.companyLocator).type(signUpData.company);
            cy.get(this.addressLocator).type(signUpData.address);
            cy.get(this.countryLocator).select(signUpData.country);
            cy.get(this.stateLocator).type(signUpData.state);
            cy.get(this.cityLocator).type(signUpData.city);
            cy.get(this.zipCodeLocator).type(signUpData.zipCode);
            cy.get(this.mobileNumberLocator).type(signUpData.mobileNumber);
            cy.get(this.createAccountBtnLocator).click();
        });
    }

    validateAccountCreated()
    {
        cy.get(this.accountCreatedLocator).should('be.visible');
        cy.get(this.continueBtnLocator).click();
    }
}
export default SignUpPage;