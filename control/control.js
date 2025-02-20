window.addEventListener("scroll", function() {
    const img = document.querySelector("#img > img");
    const footer = document.querySelector("footer");
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop < windowHeight) {
        img.classList.add("hidden");
    } else {
        img.classList.remove("hidden");
    }
});
