document.addEventListener("DOMContentLoaded", () => {
  const whiteKeys = document.querySelectorAll(".white-keys .key.white");
  const blackKeys = document.querySelectorAll(".black-keys .key.black");

  whiteKeys.forEach((key) => {
    key.addEventListener("click", () => {
      alert(`You have clicked ${key.textContent}`);
    });
  });

  blackKeys.forEach((key) => {
    key.addEventListener("click", () => {
      alert(`You have clicked ${key.textContent}`);
    });
  });
});
