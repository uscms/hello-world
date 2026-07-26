// 极简交互：点击按钮随机切换一句问候语
const greetings = [
  "Hello, World! 👋",
  "你好，世界！🌏",
  "Bonjour, le monde! 🥐",
  "こんにちは、世界！🌸",
  "Hola, Mundo! 🌞"
];

const btn = document.getElementById("greetBtn");
const emoji = document.getElementById("emoji");
const clock = document.getElementById("clock");

if (btn && emoji) {
  btn.addEventListener("click", () => {
    const msg = greetings[Math.floor(Math.random() * greetings.length)];
    emoji.textContent = "🎉";
    btn.textContent = msg;
    setTimeout(() => {
      emoji.textContent = "👋";
      btn.textContent = "点我打招呼";
    }, 1200);
  });
}

// 显示当前时间
function tick() {
  if (!clock) return;
  const now = new Date();
  clock.textContent = "当前时间：" + now.toLocaleString("zh-CN");
}
if (clock) {
  tick();
  setInterval(tick, 1000);
}
