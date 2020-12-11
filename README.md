# JS211_CurrentDateTimeProject[![CircleCI](https://circleci.com/gh/AustinCodingAcademy/javascript-workbook/tree/gh-pages.svg?style=svg)](https://circleci.com/gh/AustinCodingAcademy/javascript-workbook/tree/gh-pages)

![](http://en.gravatar.com/userimage/107370100/a08594145564536138dfaaf072c7b241.png)

# Austin Coding Academy

## JavaScript 211 Project: Array Practice

### Today's Checklist

1. Fork and Clone
1. Create a new branch called: `yourName-ArrayChallenge`
1. Use a whiteboard to work out a solution to the challenges below
1. Translate the broad ideas to pseudo code
1. Convert the pseudo code to real JavaScript code
1. Type into your text editor the JavaScript code you've come up with one step at a time
1. Work through your bugs.
1. Use `node main.js` to run the program after **every** line of code you build.

### Challenges

1. `.length`
   * Create an array called `cars` which consists of 4 different types of cars as String type. The first car type should be Ford.
   * Console.log the length of the array.
   * Use `node main.js` to run the program.
1. `.concat()`
   * Create another array called `moreCars` with 4 more different types of cars. The last car type should be Honda.
   * Use the `concat` method to combine the `cars` and `moreCars` arrays into another array called `totalCars`.
   * Console.log the new array.
   * Run the program.
1. `.indexOf()` and `.lastIndexOf()`
   * Use the `indexOf` method to console.log the index of `Honda` in `totalCars`.
   * Use the `lastIndexOf` method to console.log the index of `Ford` in `totalCars`.
   * Run the program.
1. `.join()`
   * Use the `join` method to convert the array `totalCars` into a string called `stringOfCars`.
   * Console.log `stringOfCars`.
   * Run the program.
1. `.split()`
   * Use the `split` method to convert `stringOfCars` into an array called `carsFromString`.
   * Console.log the array you just created.
   * Run the program.
    > BONUS: Go back and pass a comma (`','`) in as a parameter to `.split()` to separate the cars into individual items in the array.
1. `.reverse()`
   * Use the `reverse` method to create an array `carsInReverse` which is the array `totalCars` in reverse.
   * Console.log `carsInReverse`.
   * Run the program.
1. `.sort()`
   * Use the `sort` method to put the array `carsInReverse` into alphabetical order.
   * Based on the types of cars you used, predict which item in the array should be at index 0.
   * Use the following code to confirm or reject your prediction: `console.log(carsInReverse.indexOf('yourPrediction'));`
1. `.slice()`
   * Create a `pets` array by copy/pasting the following: `const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']`
   * Use the `slice` method to create a `reptiles` array with `snake` and `lizard` from the `pets` array.
   * Console.log the `reptiles` array and run the program.
   * Now console.log the `pets` array and run the program. Why do you think `snake` and `lizard` are still in the original array?
1. `.splice()`
   * Create a new array called `removedReptiles`, using the `splice` method to remove `snake` and `lizard` from the `pets` array.
   * Console.log `removedReptiles` and `pets` and run the program.
   * Go back and add the string `'hamster'` in as a third parameter to your `splice` method, then run the program again and notice how the `pets` array has changed. Do you see how that works?
1. `.pop()`
   * Use the `pop` method to remove the last item from the `pets` array, saving it to a variable called `removedPet`.
   * Console.log `removedPet` and `pets` and run the program.
1. `.push()`
   * Use the `push` method to add `removedPet` back to the end of the `pets` array.
   * Console.log `pets` and run the program.
1. `.shift()`
   * Use the `shift` method to remove and console.log the first item in the `pets` array.
1. `.unshift()`
   * Use the `unshift` method to add the string `'turtle'` as the first item in the `pets` array.
   * Console.log the `pets` array and run the program. If all went according to plan, you should see `['turtle', 'cat', 'fish', 'rabbit', 'hamster', 'bird']`.
1. `.forEach()`
   * Create a numbers array by copy/pasting the following: `const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]`
   * Write code that will add 2 to each item in the array `numbers`.
      * `forEach` requires a function to be passed into it as its first argument.
      * Build a function called `addTwo` that can take in num, index, and arr as parameters—`(num, index, arr)`—and returns `num + 2` at each `index` of the `arr`.
      * Use `.forEach()` on the `numbers` array, passing in your freshly built function `addTwo` as a parameter, in order to add 2 to each number in the array.
   * Console.log `numbers` and run the program.

### Hints

1. Use [repl.it](https://www.repl.it) to write the solution code first. (It's a faster environment vs using the `node main.js` command over and over again.)
1. Use your documentation.
1. Push yourself further.
1. Look at your hints!
1. **Clone, setup, testing, and running instructions for all projects is below**

******

## Cloning Your Project

1. Click the 'Fork' button (choose your account if prompted).
1. Copy HTTPS URL from your forked repository
1. In your terminal/gitBash/CommandPrompt navigate (using `cd`) into a directory where you want to start keeping your repositories. (`/jsDevFolder`)
1. Clone your new repository by typing `git clone <forked clone URL>` (the HTTPS
URL you copied above)
  ![Forking a repository](https://docs.google.com/drawings/d/1tYsLHaLo8JRdp0xC1EZrAo0o9Wvv4S5AD937cokVOBk/pub?w=960&h=720)
1. Now go into the new directory by using `cd project-repo`

1. Add the base repository as an upstream
    `git remote add upstream https://github.com/AustinCodingAcademy/<PROJECT-REPO>.git`

1. Check the configuration of your remotes with `git remote -v`, it should look
very similar to this (except it'll be YOUR username)

```bash
$ git remote -v

origin  git@github.com:username/javascript-workbook.git (fetch)
origin  git@github.com:username/javascript-workbook.git (push)
upstream    git@github.com:AustinCodingAcademy/javascript-workbook.git (fetch)
upstream    git@github.com:AustinCodingAcademy/javascript-workbook.git (push)
```

### Setup

1. From your project directory, run `npm i` to tell NPM to install all the
node modules we use in this class (see `package.json`)
1. Use your textEditor (VS Code) to change your files.
1. When you're finished `git status`, stage your file `git add .`, commit your changes `git commit -m "functions working"`, and push to
GitHub `git push`
    ```bash
    git status
    git add .
    git commit -m "Initial Commit"
    git push origin gh-pages
    ```

1. Now go to your forked repository on GitHub (at
  https://github.com/your-username/javascript-workbook). A little yellow box
  should have popped up asking you to make a Pull Request. Click to review.

1. Click "Create Pull Request"

1. Every time you make a change *and push to GitHub*, this PR will automatically
update. No need to do it more than once.

#### Get latest workbook updates

1. To get the latest code/homework/test updates, be sure to have a "clean
working directory" by committing or removing all of your changes. You check for
a "clean working environment" by running `git status` and making sure no files
show up.

1. Run `git pull upstream gh-pages`

![Contributing workflow](https://docs.google.com/drawings/d/1WeKQxOHgPKfwjy_eKtlJO62Fu4XTCWFeqkAh1oIqICM/pub?w=960&h=720)

### Running the apps

Simply run `node path/to/file.js`

example `node 01week/rockPaperScissors.js`

### Running Tests

Tests are a great way to make sure you code works the way you planned it would,
and to make sure you don't break something in the future. We will be using them
to test our understanding of the lesson. It's also our main way to assign grades
for an assignment.

To run a the tests on a file run `npm test path/to/file.js`, etc.

### Running the Linter

Simply run `npm run lint`

#### Running the Server

1. Run `npm start`
1. To break out of the server, press `ctrl` + `c`
