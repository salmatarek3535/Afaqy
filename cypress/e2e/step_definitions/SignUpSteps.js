import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import HomePageBeforeSignUp from "../../support/pages/HomePageBeforeSignUp";
import LoginPage from "../../support/pages/LoginPage";
import SignUpPage from "../../support/pages/SignUpPage";
import HomePageAfterSignUp from "../../support/pages/HomePageAfterSignUp";

const url= Cypress.config().baseUrl;
const homePageBeforeSignUp= new HomePageBeforeSignUp();
const loginPage= new LoginPage();
const signUpPage= new SignUpPage();
const homePageAfterSignUp= new HomePageAfterSignUp();

Given('user opens automationexercise website', ()=>{
    cy.visit(url);
    homePageBeforeSignUp.validateHomePage(); // validate that user in the home page
});

When('user navigates to Login page', ()=>{
    homePageBeforeSignUp.navigateToLoginPage();
    loginPage.validateLoginPage(); // validate that user in the login page
});

When('user fills the SignUp form with valid name and email', ()=>{
    loginPage.fillSignUpForm();
    signUpPage.validateSignUpPage(); // validate that user in the signup page
});

When('user fills additional SignUp details', ()=>{
    signUpPage.fillSignUpData();
});

Then('user validates that account created successfully',()=>{
    signUpPage.validateAccountCreated();
    homePageAfterSignUp.validateAccountSignedUp();
});

When('user logout', ()=>{
    homePageAfterSignUp.logout();
});

Then('validate that user logout successfully',()=>{
    homePageAfterSignUp.validateUserLogout();
});