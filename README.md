# GitHub Actions CI/CD Setup
[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)
## Description
The purpose of this project is to test the setup of GitHub Actions workflows. Two .yaml files are used and triggers certain workflows: <br>
- When a pull request is created to merge into the develop branch, the Checking Tests workflow will trigger and run the tests on the React Component
- When a push or pull request to main is made, the Deploy To Render workflow is triggered that will run the test-component script first and then use the deploy hook url to deploy the latest commit on Render.

Technologies used:<br>
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)

## Installation

- The user must clone the repo locally with this command:
```bash
git clone https://github.com/PhilipMcF/GitHub-Actions-CI-CD-Setup.git
```
- Node.JS will be needed as well as the package manager to acquire the necessary modules:<br>
https://nodejs.org/en/download/package-manager

- Npm modules are needed in order to function properly so they will need to be installed. Run this command in the root directory where the repo is installed:
```bash
npm install
```

## Usage

[Visit deployed site here!](https://github-actions-ci-cd-setup-test.onrender.com)

[![Deploy To Render check/workflow successful completion](./images/DeployToRenderSuccess.PNG)](https://github-actions-ci-cd-setup-test.onrender.com)

You will need to create a .env file in the root of the local project repo. It needs a MongoDB uri. The name of the database can be changed to whatever you want instead of 'techquiz':
```bash
MONGODB_URI=mongodb://127.0.0.1:27017/techquiz
```
Run this command to build the project:
```bash
npm run build
```
Run this command to seed the MongoDB database:
```bash
npm run seed
```
Then run this command in a terminal window from the root directory of the repo/project to start the project:
```bash
npm run start
```
Visiting http://localhost:3001 will let you start a quiz.

To run a component test, run this command in another terminal window while the project server is running:
```bash
npm run test-component
```
### Testing GitHub Actions Workflows
<strong>To test any of the GitHub Actions Workflows, you will need to create your own repo with all of the files/code from this project/repo. Or you can fork it.</strong> <br>

<strong>To test the 'Checking Tests' workflow, checkout a develop branch using git:</strong>
```bash
git checkout -b develop
```
Sync/push it to your remote repo.
Create another branch, feature, like this:
```bash
git checkout -b feature/test
```
Make any changes you'd like. Add, commit and push it to your remote repo. Create a pull request merging this feature branch into the develop branch.<br>
You know you've successfully ran the workflow when it alerts you of checks that have to be passed first before it allows you to merge. Complete the merge after the check has passed.<br>

<strong>To test the 'Deploy To Render' workflow:</strong><br>
You will need to do a few things...
- Create an account on Render.com
- Link your GitHub account
- Create a new web service from your new repo 
- BEFORE deploying, you will also need a MongoDB Atlas account
    - Create a cluster & database. 
    - Create a new database user
    - Grab your connection string for connecting to the cluster/database
- In the environment settings of your Render webservice, create a new Environment Variable:
    - MONGODB_URI
    - The value will be that connection string you grabbed.
        - You will have to edit that string and put in the database user, password, and the name of the database you are connecting to.
- For the build command in Render, put the following:
    - npm install && npm run build && npm run seed
- For the start command:
    - npm run start 
Now complete the creation of the web service. <br>
You can let the web serivce build and deploy but we want to test the workflow so:<br> 
- Go into the settings of that service. 
    - Grab the Deploy Hook URL and copy it.
- Go to Settings of your GitHub repo
    - Go to Secrets and Variables
    - Go to Actions
    - Create new Repository Secret
        - Name will be: RENDER_DEPLOY_HOOK_URL
        - Secret will be the Deploy Hook you copied from Render
<br>
<strong>Now we finally test the Deploy To Render workflow...</strong>
- Make any changes you'd like in the main branch. Add, commit and push it to your remote repo.
- You should see from the latest commits on the homepage of the repo a orange dot indicating that a check is running
- It will run a test of the component and will attempt to depoy to Render using your Deploy Hook
- If successful, it will turn into a green dot indicating that the check has passed.

## Contributing
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)<br>
To contribute to this project, you can fork it or create an issue and provide any suggestions or solutions.
Please try and follow the Contributor Covenant code of conduct and leave a star if you like the project.

## Questions
For any and all questions, please contact me here:
- GitHub: https://github.com/PhilipMcF
- Email: philipsm1998@gmail.com

## License
[This project is licensed under the MIT license.](#https://opensource.org/license/mit)