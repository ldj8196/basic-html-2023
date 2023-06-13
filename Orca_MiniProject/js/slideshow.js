var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var page = 0;

showSlides(page);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n) {
    for(var i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
}
function prevSlide() {
    if(page>0) page -= 1;
    else page = slides.length - 1;
        showSlides(page);
}
function nextSlide() {
    if(page < slides.length - 1) page += 1;
    else page = 0;
    showSlides(page);
}




