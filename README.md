

# <p align="center">Welcome to my Team Profile Generator!</p> 
## <p align="center">A command line application for generating a team profile website.</p>

## Link to Deployed Site


## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Challenges](#challenges)
  * [Usage](#usage)
  * [Test](#test)
  * [License](#license)
  * [Questions](#questions)

## Description

This application allows the user to easily add and update a oganizational team profile page from the command line. 
 
## Technologies
* HTML
* CSS and Bulma
* JavaScript
* Node.js
* NPM "Inquirer"
* NPM "Jest"

## Functionality

This application uses Node.js, the 'Jest' npm, and the 'Inquirer' npm to create a team profile html page by inputing information in the command line. When the application is initialized, the user is asked the name of the team member they are adding. The user then selects a role (manager, engineer, or intern) and is presented with a set of questions about that team member. The manager, engineer, and intern classes all have an additional question that is specific to that role. Once the user is finished inputting information about a team member, they are given the option to add more members. If they select "Yes" the application starts over. If they select "NO" the application terminates and creates an HTML page in the 'dist' folder.

## Demo


## Example README.md
#### The example Team Profile was generated using the Team Profile Generator application I built. The HTML file represented in these screentshots is located in the "dist" folder.


## Challenges

* Interacting with multiple objects that reference each other.
* Getting all of the information to render on the page correctly.
* Creating the "addAnotherMember" function to allow the user to add more than one team member at a time.
* Writing tests!

## Usage
* Use this app to create a team profile page from the command line.
* Use the code to understand the basics of Object Oriented Programming.
* Use the code to understand how to write and run tests. 

## Installation
* Install Node.js
* Enter 'npm init' in command line
* Enter 'npm i' in the command line
* Enter 'node index.js' in the command line

## Test 
This application has been thoroughly tested using the "Jest" npm.

## Future Development
* Improve the overall appearance of the html page.
* Add morew information to each role to have a more robust team profile page.

## Questions
* Take a look at my GitHub profile to see other projects: 
[My GitHub Profile](https://github.com/BeardoMattix)
* If you have any questions, please reach out via email: christopher.mattix@gmail.com

## License
[MIT](https://opensource.org/licenses/MIT)

![badge](https://img.shields.io/static/v1?label=License&message=MIT&color=success)
