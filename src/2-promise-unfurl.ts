import wrapInPromise from "./helpers/wrapInPromise";

async function unfurlDemo(): Promise<boolean[]> {
  const promiseOne = wrapInPromise({ wait: 2000, value: "hello world!" });
  const resultOne = await promiseOne;
  console.log("result one:", resultOne);
  const resultTwo = await wrapInPromise({ wait: 2000, value: 2 });
  console.log("result two:", resultTwo);
  const result= await wrapInPromise({ wait: 2000, value: [true, false] });
  console.log(result)
  return result
}

unfurlDemo();

// async function executeThis(){
//   return await unfurlDemo()
// }

// console.log(executeThis());