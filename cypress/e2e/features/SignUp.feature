Feature: automation excercise Sign Up feature

        Scenario: Sign up with valid credentials
            Given user opens automationexercise website
             When user navigates to Login page
              And user fills the SignUp form with valid name and email
              And user fills additional SignUp details
             Then user validates that account created successfully
             When user logout
             Then validate that user logout successfully