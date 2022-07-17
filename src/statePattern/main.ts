import { SafeFrame, ButtonType } from "./safeFrame";

const sleepOneSec = () => new Promise((resolve) => setTimeout(resolve, 1_000));

const clickButtonRandom = (frame: SafeFrame) => {
  const buttonType: ButtonType = (["Use", "Alarm", "Phone"] as ButtonType[])[
    Math.floor(Math.random() * 3)
  ];
  frame.clickButton(buttonType);
};

console.log("----- START -----");

(async () => {
  const now = new Date();
  const frame = new SafeFrame(now.getHours());

  for (let hour = 0; hour < 24; hour++) {
    frame.setClock(hour);
    clickButtonRandom(frame);
    await sleepOneSec();
  }
})();

console.log("----- FINISH -----");
