# Quiz machine

The purpose of this project is to utilise the [Open Trivia Database](https://opentdb.com/) to create a quiz app utilising `react` and `redux`.

## Prerequistes

Because the API returns JSON that contains both an incorrect and correct answers array that need to be combined in order to create out multiple choice options, the `shuffle` library has been utilised so that you can't cheat and guess the same answer every time (sorry).

When the user selects a correct answer, the score is incremented. If it is incorrect or the user changes difficulty, the score is reset to 0.

## Installing Dependencies

- Use `npm run dev` or `npm run dev -- --watch` to build react
- Open `index.html` in your browser from the root directory

## How To Use

The user interface has been made as simple as possible in order to utilise a very minimal design. You can select your difficulty using the buttons at the top. The default value is `easy`. A question loads underneath with 4 options underneath. Select the answer you feel is right and the score will increment if correct or reset to 0 if incorrect. Following this, the page will load a new question.

If you are stuck and need a clue (seriously, some of the "easy" questions require a doctorate), the `Need a clue?` button will disable one of the incorrect answers.

## Notable Features

- While the design is not doing anything particularly flash (see `Unresolved Issues/Un-implemented Features` below), the design is minimal enough to be a simple and responsive design that allows users to fairly intuitively figure out what is going on without having to clutter the screen with a lot of unneccesary or verbose elements.
- At the time of creating this project, `redux` was very new to me and proving quite a challenge. I feel proud of the fact that not only has `redux` been implemented effectively and in a way that works. I've tried to keep my file structure simple and legible while also keeping my actions and reducers as uncluttered as possible.

## Unresolved Issues/Un-implemented Features

While I am happy with the work I have done on this app, there are a number of features that I haven't yet added and some issues that I would like to address which I have listed below:

- In spite of the minimal design, I would like to implement more features that make for a more fun user experience. For instance, some kind of confetti effect for every 5/10 questions you get correct.
- When you get a question wrong,you are currently taken straight to a new question with the score reset. I'd prefer to implement a feature which will show you the correct answer and then give you the option to move to a new quesion.
- I'd like to create a high score table. When a user finishes the game, I'd like to be able to add a username and show their score in a table.
