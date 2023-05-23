const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes.js');

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
    
    const svg = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="150" y="100" font-size="20" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
      </svg>
    `;

    fs.writeFile('logo.svg', svg, (err) => {
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  });
