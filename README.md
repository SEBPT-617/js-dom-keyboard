# DOM & Events Virtual Keyboard - Lab

![Screen Shot 2024-01-27 at 2 28 57 PM](https://media.git.generalassemb.ly/user/41550/files/9442044e-1059-41f9-bf0a-6af35b451648)

## Intro
In this exercise we'll be working with events and input fields.

## Setup and Instructions

1. Fork and clone this repository.
2. All starter code is available in the `index.html` and `style.css` files. Complete your work in `app.js`.
3. Before you start coding, open the `index.html` file in your browser to familiarize yourself with the user interface you'll be working with.
4. Complete the following exercise.

## Exercise 

Before diving into the exercise, take a moment to inspect the provided starter code. Your primary focus will be on using JavaScript in the `app.js` file to bring the keyboard to life. Pay special attention to the `index.html` file and any provided attributes that will help you interact with the calculator's elements. 

### Requirements

Using the starter code, add an event listener to the input field. There are two
events we will use today - `keydown` and `keyup`.

On keydown, get the relevant keycode or key name. See them here:
https://keycode.info/

While the key is pressed (keydown), add the `active` class to the div containing
that same letter. So if q is pressed, highlight the q on the keyboard. This will
highlight the letter on the page.

When the key is released (keyup), remove the class. You may have to add another
even listener to the input field for this.

## Bonus

Clear the input field on keyup so that no letters accumulate in it.

#### Double Bonus

Add an event listener to each letter with the type `mouseover`, that sets the
class for that div to `active`.

> You should not have to add each event listener separately! Can you loop through
all the letters?

#### Super Mega Bonus

Make the browser speak the key out loud as you type. You'll have to do some
research into the
[Speech Synthesis API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance)
for this

## Deliverable
This lab is a deliverable. Please submit your pull request once completed.

