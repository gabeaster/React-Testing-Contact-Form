# Contact Form - Testing

## Advanced React Sprint

## Testing Web Applications

## Objectives

- explain what automated testing is and its importance
- use react-testing-library for testing react components
- use react-testing-library to test user interactions with fireEvent

## Introduction

In this challenge, you will be writing tests for a contact form that has been built with React.

As a developer, you will be writing tests for every component. As we've learned, tests are a very important part of programming. The tests you will write will help you feel confident in the code you push to production!

## Project Set Up

- [DONE ] Create a forked copy of this project.
- [DONE ] Add your team lead as collaborator on Github.
- [DONE ] Clone your OWN version of the repository in your terminal.
- [DONE ] CD into the project base directory.
- [DONE ] Download project dependencies by running `npm install`.
- [DONE ] Start up the app using `npm start`.
- [DONE ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [DONE ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [DONE ] Push commits: git push origin `<firstName-lastName>`.

**Test Runner**
- [DONE ] In a new terminal window, run `npm test`
- [ ] With each saved change in your editor, the test runner will re-run all the tests
- [ ] **IMPORTANT** If a test fails, use the test runner's error messages to find out why it is failing

## Instructions and/or completion requirements (MVP)

In order to complete your mission for today, you will need to write tests to help you feel confident in shipping this component. Below is a _general_ outline of how to accomplish this.

1. Take a good amount of time to use the form. Find out what behaviors you expect, and any you don't expect. (Don't fix unexpected behaviors yet. We want our test to show us what's wrong in the UI, then fix the behavior - we'll walk you through that down below)

Notes from interacting with the form: 

We have a form with 4 input fields. 

First Name is required (shown with an asterisk) and has a placeholder visible that says "bill". I can type my name into the field and the state updates after each keystroke. With my 9 character name, I got an error that says "Looks like there was an error: maxLength". After experimenting with the first name field, the error comes up at the fourth character (the field accepts 3 characters without the error). When I refresh, the field is reset. An error populates if the field is left empty because it is required. 

Last Name is required (shown with an asterisk) and has a placeholder visible that says "luo". I can type my name into the field and the state updates after each keystroke. We do not get the same maxLength error as firstname. When I refresh, the field is reset. An error populates if the field is left empty because it is required. 

Email is required (shown with an asterisk) and does NOT have a placeholder. An error populates if the field is left empty because it is required. An error does not populate if the email is not a valid email (i typed ssdfs and was not given an error)

Message is not required (does not have an asterisk) and does NOT have a placeholder visible. No errors populate if left empty or when characters are typed into the field. I can type into the field and the state updates after each keystroke. 

Submit Button: the submit button returns a json object with the data populated into the field but does not clear the field. After refreshing, the form and json object are cleared and the form is reset. 

2. Write down on a piece of paper what you want to test. (This is a very important step - always plan before coding!)

Test that each field is visible. 
Test that values can be entered into each field.
Test the First Name field behavior to investigate the maxLength error after four or more characters are entered. 
Test that the email value is a valid email. 
Test that the submit button returns an object with the expected data.  

3. Add your first test. This one should be a very simple test to make sure the testing setup is working.
4. Write a sufficient amount of tests to give you confidence in the project's code

_If you come across any "unexpected" behaviors in the form UI (not the test), try this flow:_

- [ ] Write a test for the "expected" behavior (it will fail because something in the component is doing something unexpected)
- [ ] Confirm that the test fails, because of the "unexpected" behavior
- [ ] Look at the code in the project to find what is causing the behavior
- [ ] Fix the code so that your new test passes
- [ ] Celebrate that your test helped you find and fix a bug!

## Stretch goals

- Using the [REQ|RES API](https://reqres.in/), build out a POST request in the form.

  - Using the [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro), study how to test async calls
  - Write a new test to cover your new async call

- Add more elements to the form - eg dropdown, checkbox, etc
  - Add tests to include the new form elements
