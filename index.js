//This is the main file for the logo generator. It will prompt the user for input, then generate a logo based on the input. The logo will be saved in the current directory as logo.svg.
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes.js');

//Here I use the inquirer package to prompt the user for input. The answers are then used to create a new shape object and a new SVG file. 
//The SVG file is saved in the current directory as logo.svg.
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for your logo text:',
      validate: input => input.length <= 3
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword or a hexadecimal number for the text color:'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for your logo:',
      choices: ['circle', 'triangle', 'square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword or a hexadecimal number for the shape color:'
    }
  ])
//Here I use a switch statement to create a new shape object based on the user's input.  
  .then((answers) => {
    let shape;
    switch (answers.shape) {
      case 'circle':
        shape = new Circle(answers.shapeColor);
        break;
      case 'triangle':
        shape = new Triangle(answers.shapeColor);
        break;
      case 'square':
        shape = new Square(answers.shapeColor);
        break;
    }
    //Here I use a template literal to create an SVG file based on the user's input. The SVG file is saved in the current directory as logo.svg.
    const svg = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="50%" y="50%" font-size="40" text-anchor="middle" dominant-baseline="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>
  `;
//Here I use the fs package to write the SVG file to the current directory as logo.svg.
    fs.writeFile('logo.svg', svg, (err) => {
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  });
