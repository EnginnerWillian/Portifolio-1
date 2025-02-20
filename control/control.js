window.addEventListener("img", function() {
    const img = document.querySelector("My_images/willian.jpeg");
    const footer = document.querySelector("footer");
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop < windowHeight) {
        img.classList.add("#img");
    } else {
        img.classList.remove("#img");
    }
});
