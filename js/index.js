function moveSlides() {
    for (let i = 1; i <= 4; i++) {
        var elem = document.getElementById('slideImg' + i);
        elem.style.transform = "translateY(calc(100vh - 100%))";
    }
}