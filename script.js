function updateAllSkills() {
  const inputs = document.querySelectorAll(".skill-input");
  const bars = document.querySelectorAll(".progress-bar");

  inputs.forEach((input, index) => {
    let targetWidth = parseInt(input.value);

    if (isNaN(targetWidth) || targetWidth < 0) targetWidth = 0;
    if (targetWidth > 100) targetWidth = 100;

    let bar = bars[index];
    let currentWidth = 0;

    bar.style.width = "0%";
    bar.textContent = "0%";

    const interval = setInterval(() => {
      if (currentWidth < targetWidth) {
        currentWidth++;
        bar.style.width = currentWidth + "%";
        bar.textContent = currentWidth + "%";
      } else {
        clearInterval(interval);
      }
    }, 15);
  });
}
