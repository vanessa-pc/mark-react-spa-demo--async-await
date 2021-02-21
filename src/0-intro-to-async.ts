import sleep from "./helpers/sleep";

async function printStraightforwardly(message: string) {
  console.log("START of function body");
  console.log(message);
  console.log("END of function body");
}

async function printWithSleepNoBlock(message: string) {
  console.log("START of function body");
  sleep(5000);
  console.log(message);
  console.log("END of function body");
}

async function printWithSleepAndBlock(message: string) {
  console.log("START of function body");
  await sleep(5000);
  console.log(message);
  console.log("END of function body");
}

async function printWithSleepAndBlockTwice(message: string) {
  console.log("START of function body");
  await sleep(2000);
  console.log(message);
  await sleep(2000);
  console.log("END of function body");
}

printStraightforwardly("Hello world!");
// printWithSleepNoBlock("Hello world!");
// printWithSleepAndBlock("Hello world!");
// printWithSleepAndBlockTwice("Hello world!");
