const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = document.getElementById("closeModal");

document.querySelectorAll(".play-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const video = btn.closest(".screen").querySelector("video");

    document.body.appendChild(modal);
    modal.classList.add("active");

    modalVideo.src = video.currentSrc || video.src;
    modalVideo.currentTime = 0;
    modalVideo.play().catch(() => {});
  });
});

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

function closeModal() {
  modal.classList.remove("active");
  modalVideo.pause();
  modalVideo.src = "";
}

const scrollContainer = document.querySelector(".portfolio-scroll");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

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

document.querySelectorAll(".portfolio-item").forEach((item) => {
  const video = item.querySelector("video");

  item.addEventListener("mouseenter", () => {
    item.style.transform = "scale(1.05)";
    item.style.boxShadow = "0 20px 50px rgba(0,0,0,0.2)";
    if (video) video.play().catch(() => {});
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "scale(1)";
    item.style.boxShadow = "0 10px 20px rgba(0,0,0,0.06)";
    if (video) video.pause();
    if (video) video.currentTime = 0;
  });
});
