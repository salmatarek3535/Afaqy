import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pages/homePage";
import LoginPage from "../../support/pages/LoginPage";
import SignUpPage from "../../support/pages/SignUpPage";
import LandingPage from "../../support/pages/LandingPage";

const url= Cypress.config().baseUrl;
const homePage= new HomePage();
const loginPage= new LoginPage();
const signUpPage= new SignUpPage();
const landingPage= new LandingPage();

Given('user opens automationexercise website', ()=>{
    cy.visit(url);
    homePage.validateHomePage();
});

When('user navigates to Login page', ()=>{
    homePage.navigateToLoginPage();
    loginPage.validateLoginPage();
});

When('user fills the SignUp form with valid name and email', ()=>{
    loginPage.fillSignUpForm();
    signUpPage.validateSignUpPage();
});

When('user fills additional SignUp details', ()=>{
    signUpPage.fillSignUpData();
});

Then('user validates that account created successfully',()=>{
    signUpPage.validateAccountCreated();
    landingPage.validateAccountSignedUp();
})

When('user logout', ()=>{
    landingPage.logout();
});

Then('validate that user logout successfully',()=>{
    landingPage.validateUserLogout();
})