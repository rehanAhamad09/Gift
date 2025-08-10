// Play background music automatically
window.addEventListener("DOMContentLoaded", () => {
    const audio = new Audio("music.mp3");
    audio.loop = true;
    audio.volume = 0.5; // Set softer volume
    audio.play().catch(() => {
        console.log("Autoplay blocked, waiting for user interaction...");
        document.body.addEventListener("click", () => audio.play(), { once: true });
    });
});
