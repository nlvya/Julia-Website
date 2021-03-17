function startScrolling(x) {
    for (let i = 1; i <= x; i++) {
        let speed = Math.floor(Math.random() * (10 - 5) ) + 5;
        scroll(i, speed);
    }
}


const timer = ms => new Promise(res => setTimeout(res, ms)) //creates a function to delay each iteration of the movements
async function scroll(x, y) {
    var rate = 10;

    var slideshow = document.getElementById('slide' + x);
    var height = (slideshow.scrollHeight - slideshow.offsetHeight);
    for (let i = 0; i <= height + 1; i ++) {
        var speed = y;
        slideshow.scroll(0,rate);
        rate ++;
        if (i >= height) {
            i = 0;
            rate = 10;
            slideshow.scroll(0,36);
        }
        await timer(speed);
    }
}