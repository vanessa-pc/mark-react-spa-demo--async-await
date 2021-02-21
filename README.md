# Intro to `async`/`await`

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

> This is part of Academy's [technical curriculum for **The Mark**](https://github.com/WeAreAcademy/curriculum-mark). All parts of that curriculum, including this project, are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

Having looked at Promises - one way of writing asynchronous code in JS/TS - we'll now look at `async`/`await`, which is another way of writing asynchronous code (but in a way that _feels_ synchronous).

## Learning Outcomes

- Declare an `async` function expression
- Explain the blocking role of `await`
- Declare an `async` arrow function

## Demo 0: `async` function expressions

> 🎯 **Success criterion:** You can declare an `async` function and explain the blocking role of `await`

### The `async` keyword

Demo 1 has three function expressions declared - all of which are preceded with `async`, which makes them [`async` functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).

However, `async` functions work pretty similarly to traditional (synchronous) functions.

Run the demo for `printStraightforwardly`. You'll see the output is exactly what you would see without the `async` keyword being there.

In fact, you can remove the `async` keyword and re-run the demo, and the output will be identical.

The same is true if you were to run `printWithSleepNoBlock` (and comment out the `printStraightforwardly` execution) - with, or without, the `async` keyword. `sleep(5000)` creates a promise that takes 5 seconds to resolve, but it's non-blocking, so the following `console.log`s can go ahead as before.

### The `await` keyword

`printWithSleepAndBlock` is different.

De-comment the `printWithSleepAndBlock("Hello world!")` execution (and comment out `printStraightforwardly` and `printWithSleepNoBlock`), and then run it.

What you'll see is that our default non-blocking behaviour of promises has changed. Now, the execution of the function body pauses at `sleep(5000)` until its promise resolves - and then, once the promise has resolved, the function continues with the rest of its body.

Unlike the other functions in the demo, you _can't_ remove the `async` keyword before `printWithSleepAndBlock`. If you try (and you should), TypeScript will warn you:

```
'await' expressions are only allowed within async functions and at the top levels of modules.
```
