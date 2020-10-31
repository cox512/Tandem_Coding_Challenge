# QUIZACTLY

Quizactly is a triva app developed as part of Tandem's Software Engineering Aprrenticeship application. The user answers a series of 10 multiple choice questions, receiving one point for each correct answer and losing one point for each incorrect one. The game stores the high score in local storage. Users can reset the high score if they want to start from scratch.

## Project Details
REQUIREMENTS (via Tandem's Apprenticeship Application)
- Create an app that displays trivia questions with multiple-choice answers to select from.
- At minimum, the player can view the
question(s), answer choices, correct answer upon submission, and their score. 
- Include a README with information on how to run the code, any known issues or complexity, and any additional features you would like to add in the future.

ASSUMPTIONS
- A round of trivia has ten Questions
- All questions are multiple-choice
- The score does not need to update in real time
- Results can update on form submit, button click, or any interaction you choose
- Trivia data such as the questions, correct and incorrect answers is provided via a JSON file.

ACCEPTANCE CRITERIA
- A user can view questions
- Questions with their multiple choice options must be displayed one at a time
- Questions should not repeat in a round.
- A user can select only one answer out of the four possible answers
- The correct answer must be revealed after a user has submitted their answer
- A user can see the score they received at the end of the round

![](Quizactly.gif)

## Tech Used
- HTML 5
- CSS 3
- React 17.0.1/React Hooks
- Jest 7.1.2/Enzyme 3.11

## Installation/Dependencies

Make sure you have the latest version of [node.js](https://nodejs.org/en/) installed.

If you don't have [npm](https://www.npmjs.com/) installed, do that too.
```bash
npm install
```

Use the npm [create-react-app](https://github.com/facebook/create-react-app) package to set up Quizactly's development environment.

```bash
npx create-react-app [YOUR-PROJECT-NAME]
```
Open your new create-react-app project in your text editor and delete everything but the node_modules directory.

Clone this repo to your new project's directory:
```bash
git clone https://github.com/cox512/Tandem_Coding_Challenge.git
```

Move the node_modules directory into the quizactly directory

In your CLI, change into the quizactly directory and 
```bash
npm start
```

This should start the game up in your browser at localhost:3000.

If you would like to test along at home feel free to install: 
- [Enzyme](https://www.npmjs.com/package/enzyme)
- [Enzyme-Adapter-React-16](https://www.npmjs.com/package/enzyme-adapter-react-16)
- [Jest-Enzyme](https://www.npmjs.com/package/jest-enzyme)
```bash
npm i --save-dev enzyme jest-enzyme enzyme-adapter-react-16
```

### Notes on the Project
ISSUES

I'm still learning about TDD so the testing on this project isn't terribly robust. If I had more time I would've dug into the Jest and Enzyme docs more fully to figure out how to test a component's changing props.

FUTURE ADDITIONS

I would like to add a 2-player feature with a sudden-death round in case of a tie.

I would like to replace the word-based reactions that pop up after each answer with a variety of positive correct answer emojis or negative incorrect answer ones.

### Acknowledgments

Quizactly's questions come from Tandem, a custom software development company. This game was created as part of their Software Engineering Apprenticeship application process.