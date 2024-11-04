Manual Part:

1. 'ManualTestCases' excel file contains two sheets:
    1.The first one 'SearchTextBox' contains valid and invalid scenarios for Amazon search text box.
    2.The second one 'OrderJob' contains valid and invalid scenarios for order job business case. (Note: All these test cases based on my understanding of the
    business case also assumptions)

2. 'GoBusBugReport' excel file contains the 5 bugs related to GoBus mobile app.


Automation Part:

1. Cypress framework and Cucumber as a BDD tool are used to implement UI Signup test case for 'https://automationexercise.com' website.
2. Under e2e package two folders have been created:
   1. The first one is 'features' which contains all the feature files.
   2. The second one is 'step_definitions' which contains all the step definitions js files.
3. POM (page object model) is used as a design pattern: under the support package, pages folder is created contains all the page classes for the SignUp scenario.   
4. faker library is used to generate random registration data for the signup scenario: under the support package, utilities folder is created contains fakerUtlity.js class to generate the random data.
5. A Json data file will be generated under Fixtures package before each test case run (beforeEach hook is used in e2e.js to do this).
6. A Cucumber html report is generated after each run and it is saved under reports folder in index.html file.
7. Also allure report can be generated when run 'npm run test' then to open it in the browser you can run this command 'npm run generate-allure-report'.
