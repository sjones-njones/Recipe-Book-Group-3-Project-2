# CookBookmark

[![${license}](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

A meal recipe application

## Table of Contents

- [Description](#description)
- [Website](#website-link)
- [Views](#views)
- [Deployment](#deployment)
- [Technologies](#technologies)
- [Installation](#local-installation)
- [Dependencies](#recipes-dependencies)
- [Usage](#usage)
- [APIs](#apis)
- [Contributors](#contributors)
- [License](#license)

## Description

To taste or not to taste? you have come to the right place. CookBookmark is a website created to allow users to search for recipes by a few clicks. Then, just seconds later, recipes are where their eyes can see.

In front of the user are recipes for what could possibly be some of their favorite meals. In addition to being able to fetch recipes, the user gets the ingredients and instructions so they can make their own version of the meal right at home. The user also has the option to save recipes from the database to their very own recipe book. Therefore having access to all their favorite meal's recipes without having to search and find it through the database. Upon save, this button will append to a delete if the user palate changes and wish to remove a recipe from their recipe book.

Dont forget about the print button which allows the user to print a hard copy of the recipe shoud they want to. This is possible by a technology named: WordPress Gutenberg, that us developers decided to implement in this application. It is a cool and handy feature.

## Website-Link

The website is deployed by Heroku. [Click here](https://arcane-plains-78656-cf6bf218713f.herokuapp.com/) to visit.

## Views

<table>
  <tbody>
    <tr>
      <td align="center" align="top" width="12%">
        <img src="https://github.com/sjones-njones/Recipe-Book-Group-3-Project-2/assets/132960605/18f1831e-a03d-4348-b5c9-d4a34f365767" width="500px" alt="login-signup-view"/> <br />
        <sub><b>Login/Signup View</b></sub>
        </a>
      </td>
      <td align="center" align="top" width="12%">
        <img src="https://github.com/sjones-njones/Recipe-Book-Group-3-Project-2/assets/132960605/40795811-a6e3-421e-b7ae-de7140b26a81" width="500px" alt="logout-view"/> <br />
        <sub><b>Logout View</b></sub>
        </a>
      </td>
      <td align="center" align="top" width="12%">
        <img src="https://github.com/sjones-njones/Recipe-Book-Group-3-Project-2/assets/132960605/408c7ff6-37ad-454e-a822-589dc8b0950c" width="500px" alt="loggedin-view"/> <br />
        <sub><b>Logged-In View</b></sub>
        </a>
      </td>
      <td align="center" align="top" width="12%">
        <img src="https://github.com/sjones-njones/Recipe-Book-Group-3-Project-2/assets/132960605/86d953c8-a78b-4029-975e-2abd0f2324dd" width="500px" alt="recipe-details-view"/> <br />
        <sub><b>Recipe Details View</b></sub>
        </a>
      </td>
      <td align="center" align="top" width="12%">
        <img src="https://github.com/sjones-njones/Recipe-Book-Group-3-Project-2/assets/132960605/ccaa25e1-b2cb-4f2d-9a2c-35fcc29faab2" width="500px" alt="recipebook-view"/> <br />
        <sub><b>Recipe Book View</b></sub>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## Deployment

<img height="90" alt="Heroku" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-plain-wordmark.svg">

## Technologies

<div>
<img height="90" alt="Js" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg">
&nbsp;&nbsp;
<img height="90" alt="npm" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg">
&nbsp;&nbsp;
<img height="90" alt="MySQL" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg">
&nbsp;&nbsp;
<img height="90" alt="Sequelize" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original-wordmark.svg">
&nbsp;&nbsp;
<img height="90" alt="handlebars" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/handlebars/handlebars-original-wordmark.svg">
&nbsp;&nbsp;
<img height="90" alt="HTML" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-plain-wordmark.svg">
&nbsp;&nbsp;
<img height="90" alt="CSS" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain-wordmark.svg">
&nbsp;&nbsp;
<img height="90" alt="Bootstrap" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg">
&nbsp;
<img height="90" alt="ESlint" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original-wordmark.svg">
&nbsp;&nbsp;
<img height="90" alt="JQuery" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-plain-wordmark.svg">
&nbsp;&nbsp;
<img height="90" alt="Wordpress-gutenberg" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain-wordmark.svg">
</div>

## Local installation

To install Locally, download:

<div>
<img height="90" alt="Vscode" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original-wordmark.svg">
&nbsp;&nbsp;
<img height="90" alt="Node" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg">
&nbsp;&nbsp;
<img height="90" alt="Express" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg">
</div>

## Recipes (Dependencies)

- Required dependencies for application to function locally (all dependencies will install locally once user runs `npm install` via integrated terminal)

  - `express`
  - `express-Handlebars`
  - `mysql2`
  - `sequelize`
  - `handlebars`
  - `bcrypt`
  - `dotenv`
  - `connect-session-sequelize`
  - `eslint-config-wesbos`
  - `express-session`

## Usage

To use application locally after installing VS Code, Node, and Express:

- Clone this repository to yor local computer via Terminal or GitBash
- Open repository in VS Code through command line Terminal or GitBash by typing `code .`
- Make sure to create a `.env` file in the parent folder. Add USER, PASSWORD and SECRET_KEY if necessary
  example (copy & paste in `.env` file):
  `DB_NAME='recipes_db'`,
  `DB_USER=''`,
  `DB_PASSWORD=''`,
  `SECRET_KEY=''`
- Open integrated terminal and install dependencies by typing `npm install`
- Finally, run `npm start` or `node server.js` 
- This app will be listenning for activity via their web browser at default port 3001. Go to `http://localhost:3001`

## APIs

[![Alt text](/public/images/image.png)](https://www.themealdb.com/api.php)

## Contributors

A huge thank you to everyone who contributed to this awesome application

<table>
  <tbody>
    <tr>
      <td align="center" align="top" width="12%">
        <a href="https://github.com/lucygouvin">
        <img src="https://avatars.githubusercontent.com/u/57148256?v=4" width="100px" alt="lucy-gouvin"/> <br />
        <sub><b>Lucy Gouvin <br />👩‍💻</b></sub>
        </a>
      </td>
      <td align="center" align="top" width="12%">
        <a href="https://github.com/sjones-njones">
        <img src="https://avatars.githubusercontent.com/u/132145599?v=4" width="100px" alt="stephanie-jones"/><br />
        <sub><b>Stephanie Jones <br />👩‍💻</b></sub>
        </a>
      </td>
      <td align="center" align="top" width="12%">
        <a href="https://github.com/sam-st">
        <img src="https://avatars.githubusercontent.com/u/52641515?v=4" width="100px" alt="sam-steines"/> <br />
        <sub><b>Sam Steines <br />👨‍💻</b></sub>
        </a>
      </td>
      <td align="center" align="top" width="12%">
        <a href="https://github.com/Hewitt02">
        <img src="https://avatars.githubusercontent.com/u/134295975?v=4" width="100px" alt="will-hewitt"/><br />
        <sub><b>Will Hewitt <br />👨‍💻</b></sub>
        </a>
      </td>
      <td align="center" align="top" width="12%">
        <a href="https://github.com/SaikouB">
        <img src="https://avatars.githubusercontent.com/u/132960605?v=4" width="100px" alt="saikou-balde"/><br />
        <sub><b>Saikou Balde <br />👨‍💻</b></sub>
        </a>
      </td>              
    </tr>
  </tbody>
</table>

### LICENSE

[MIT](LICENSE)
