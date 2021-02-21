import sleep from "./helpers/sleep";

const printMessageWithDelay = async (message: string): Promise<void> => {
  await sleep(2000);
  console.log(message);
};

printMessageWithDelay("hello world!");
