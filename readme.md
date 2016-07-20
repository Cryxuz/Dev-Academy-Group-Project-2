JavaScript Bowling Kata
============================

This kata aims to help the participant become familiar with test-first design, also commonly called test-driven development, or TDD. We prefer test-first design, since design of the code can oftem be a more important benefit from applying this approach. You should also find complexity is _much_ easier to manage. Considered together, if you end up with a solid design, manageable complexity and automated test coverage, not applying these practices is just asking for pain (short term and long term).

## Setup

You will need Node.js and NPM installed before getting started.

```shell
cd my-favourite-folder
mkdir bowling-kata
cd bowling-kata
git init .
echo "node_modules" > .gitignore
echo "4.4" > .nvmrc # if you're using nvm
npm init # test command: tape 'tests/**/*.js'
npm install tape --save-dev
git add .
git commit -m "Initial commit"
```

## Test 1: Test setup

This is just to make sure our setup is working.

```shell
mkdir tests
```

Create `tests/index.js` with these contents.
```js
var test = require('tape')

test('test setup working', function(t) {
  t.equal(1, 1)
  t.end()
})
```

Run tests on the command line with `npm test` and smile if you're getting a passing test. If so, commit it.
```shell
git add .
git commit -m "Test setup working"
```

## Test 2: Gutterball frames

This is to make sure we can begin testing actual code and our most simple frame.

In `tests/index.js`, add a reference to the code we intend to test.
```js
var test = require('tape')
var game = require('../game') // this is the line to add
```
If you run your tests now, you should get an error because it can't find the `game` reference (because it doesn't exist yet). So let's add a `./game.js` file with the least amount of code.
```js
module.exports = {}
```
Now that our single test is passing again, let's add a test for returning the score of a gutterball frame.
```js
test('scores a gutterball frame', function(t) {
  var frame = [0, 0]
  var score = game.scoreFrame(frame)
  t.equals(score, 0)
  t.end()
}
```
Now when we run our tests, it fails because it can't find the `scoreFrame()` method. So let's add it.
```js
module.exports = {
  scoreFrame: scoreFrame
}

function scoreFrame (frame) {
}
```
Now our test is failing because it returned the wrong value (`undefined`) instead of what it was expecting (`0`). So let's return what it wants.
```js
function scoreFrame (frame) {
  return 0
}
```
Sweet! Our tests are passing again. Let's commit it.
```shell
git add .
git commit -m "Scoring gutterball frames"
```

## Test 3: Normal frames

Now let's add a feature that can score a normal frame (one without a spare or a strike).
```js
test('scores a normal frame', function(t) {
  var frame = [2, 3]
  var score = game.scoreFrame(frame)
  t.equals(score, 5)
  t.end()
})
```
This new test is failing because we were expecting a `5` and `0` was returned. Apparently our `scoreFrame` method needs to do something more than just `return 0`.
```js
function scoreFrame (frame) {
  //?
}
```
Complete the scoreFrame funtion to pass the test. High 5! Let's commit it.
```shell
git add .
git commit -m "Scoring normal frames"
```

## Test 4: Spare frames

Now let's add a test for scoring a spare. To do this, we're going to need the next frame as well. You'll need to pass two arguments to scoreFrame.
```js
test('scores a spare frame', function(t) {
})
```
Now do a commit!

## Test 5: Single strike frames

Now let's add a feature for scoring a strike frame. Because a strike uses the next 2 rolls, if the first is another strike (called a double), we'll need yet another frame. Let's tackle the double scenario later. For now, let's handle the single-strike scenario.
```js
test('scores a single strike frame', function(t) {
})
```
Now do a commit!

## Test 6: Double strike frames

Now let's implement that other strike scenario where we have 2 strikes in a row and need a third frame. First, a new test.
```js
test('scores a double strike frame', function(t) {
})
```
Once you pass your test this might be good opportunity to refactor your code. We could _extract_ some methods because this one function is getting a bit large. How about a `scoreStrikes()` method? Maybe `isStrike()` and `isSpare()` would be useful too. 

When you're done, this should be much easier to read. Run the tests and make sure they still pass. Making sure the tests still pass is very important after refactoring. Cool, let's commit it.

## Test 7: Scores the frames of a game

Now that we can score many types of frames, let's add a feature to score a whole game of 10 frames. Because the 10th frame has special behaviour if there is a strike or a spare in it, we'll leave that scenario out of this test and test it separately later. But we can still add normal, spare, single strike and double strike frames.
```js
test('scores a game', function(t) {
})
```
Pass your test and do a commit.

## Test 8: Scores a game with a strike or spare in the 10th

Now let's add a feature that calculates the 10th frame when it contains a strike or a spare. You guessed it, a test first.
```js
test('scores a spare in the 10th frame', function(t) {
})
```
Maybe you could create an `isTenth` variable and pass it to `scoreFrame()`.

## STRETCH: Create a client to consume the game module

Name it `index.js` so you can run it with `npm run`.

