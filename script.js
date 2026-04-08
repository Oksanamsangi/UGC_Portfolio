// =====================
// МОДАЛЬНЕ ВІКНО ВІДЕО
// =====================

const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = document.getElementById("closeModal");

// Відкриття модалки при натисканні Play
document.querySelectorAll(".play-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const video = btn.closest(".screen").querySelector("video");

    // Виносимо модалку в body, щоб була поверх усього
    document.body.appendChild(modal);

    // Робимо модалку активною
    modal.classList.add("active");

    // Встановлюємо джерело відео і відтворюємо
    modalVideo.src = video.currentSrc || video.src;
    modalVideo.currentTime = 0;
    modalVideo.play().catch(() => {});
  });
});

// Закриття модалки кнопкою
closeBtn.addEventListener("click", closeModal);

// Закриття модалки при натисканні на фон
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Закриття модалки клавішею Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Функція закриття
function closeModal() {
  modal.classList.remove("active");
  modalVideo.pause();
  modalVideo.src = "";
}

// =====================
// СКРОЛЛ ПО ВІДЕО КНОПКАМИ
// =====================

const scrollContainer = document.querySelector(".portfolio-scroll");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

// Скільки пікселів скролити за один клік
const scrollAmount = 250;

leftArrow.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
});

rightArrow.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});

// =====================
// ДОДАТКОВА ІНТЕРАКТИВНІСТЬ ВІДЕО КАРТОЧОК
// =====================

document.querySelectorAll(".portfolio-item").forEach((item) => {
  const video = item.querySelector("video");

  // При наведенні на карточку — трохи збільшуємо і робимо підсвітку
  item.addEventListener("mouseenter", () => {
    item.style.transform = "scale(1.05)";
    item.style.boxShadow = "0 20px 50px rgba(0,0,0,0.2)";
    if (video) video.play().catch(() => {});
  });

  // При знятті курсору — повертаємо до нормального стану
  item.addEventListener("mouseleave", () => {
    item.style.transform = "scale(1)";
    item.style.boxShadow = "0 10px 20px rgba(0,0,0,0.06)";
    if (video) video.pause();
    if (video) video.currentTime = 0;
  });
});
