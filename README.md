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

Unlike the earlier functions in the demo, you _can't_ remove the `async` keyword before `printWithSleepAndBlock`. If you try (and you should), TypeScript will warn you:

```
'await' expressions are only allowed within async functions and at the top levels of modules.
```

### Why would we block?

Both `.then` and `async`/`await` are accepted modern ways of writing asynchronous JS/TS (which also are not mutually exclusive - they _can_ be used together).

The non-blocking behaviour of `.then` lets you just get on with other things whilst you're waiting for some asynchronous operation to complete.

On the other hand, a lot of people find `async`/`await` easier to reason about - because it looks a lot more like normal synchronous code, where one line only runs after the previous line has been completed.

## Demo 1: `async` function return values

> 🎯 **Success criterion:** You can type the return value of a simple `async` function expression

### What does adding `async` do to a function?

We've seen that making a function `async` lets us use the `await` keyword for if we want to block until a promise is resolved, and it didn't seem to do very much to a function otherwise.

However, even if we don't use `await` inside a function, adding `async` _does_ do something - it changes the return type of a function.

Any `async` function _must_ return a `Promise<T>` for some resolve value type `T`:

- `Promise<void>` is possible
- `void` is not possible
- `Promise<string>` is possible
- `string` is not possible

This means that you could, in principle, chain a `.then` after you call an `async` function, since all Promises have a `.then` method.

You can experiment with this in the `src/1-async-return.ts` file.

Try adding explicit return value types to functions like this:

```ts
async function promiseToAdd(a: number, b: number) {
  return a + b;
}
```

## Demo 2: Unfurling Promises with `await`

> 🎯 **Success criterion:** You can distinguish the types of `Promise<T>` and type of `await Promise<T>`

As we've seen, Promises can be typed with a specific resolve value: `Promise<T>` indicates that the Promise will resolve with a type of `T`.

When you `await Promise<T>`, we block future execution until the promise resolves - and, if it resolves with a value, then the `await` expression returns that value.

You can see this in demo 2 by inspecting:

- the type of `promiseOne`
- the type of `resultOne`
- the type of `resultTwo`
- the return type of `unfurlDemo`
