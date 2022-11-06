function onLoadSolar() {
    randomShift = Math.floor(Math.random() * 100);
    document.getElementById('venus-spin').style.animationDelay = "-" + randomShift + "s";
    randomShift = Math.floor(Math.random() * 100);
    document.getElementById('mercury-spin').style.animationDelay = "-" + randomShift + "s";
    randomShift = Math.floor(Math.random() * 100);
    document.getElementById('earth-spin').style.animationDelay = "-" + randomShift + "s";
    randomShift = Math.floor(Math.random() * 100);
    document.getElementById('saturn-spin').style.animationDelay = "-" + randomShift * 1000 + "s";
    randomShift = Math.floor(Math.random() * 100);
    document.getElementById('jupiter-spin').style.animationDelay = "-" + randomShift * 1000 + "s";
    randomShift = Math.floor(Math.random() * 100);
    document.getElementById('uranus-spin').style.animationDelay = "-" + randomShift * 1000 + "s";
    randomShift = Math.floor(Math.random() * 100);
    document.getElementById('neptune-spin').style.animationDelay = "-" + randomShift * 1000 + "s";
    randomShift = Math.floor(Math.random() * 100);
    document.getElementById('mars-spin').style.animationDelay = "-" + randomShift + "s";
}

let slideIndex = 1;
showSlides(slideIndex, "sunSlide");
showSlides(slideIndex, "earthSlide");
showSlides(slideIndex, "marsSlide");
showSlides(slideIndex, "venusSlide");

function plusSlides(n, name) {
    showSlides(slideIndex += n, name);
}

function currentSlide(n, name) {
    showSlides(slideIndex = n, name);
}

function showSlides(n, name) {
    let i;
    let slides = document.getElementsByClassName(name);
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function sunClicked() {
    hideAllInfo();
    document.getElementById("sunInfo").style.display = 'unset';
}

function earthClicked() {
    hideAllInfo();
    document.getElementById("earthInfo").style.display = 'unset';
}

function marsClicked() {
    hideAllInfo();
    document.getElementById("marsInfo").style.display = 'unset';
}

function venusClicked() {
    hideAllInfo();
    document.getElementById("venusInfo").style.display = 'unset';
}

function closeInfo() {
    hideAllInfo();
    document.getElementById("systemInfo").style.display = 'unset';
}

function hideAllInfo() 
{
    document.getElementById("systemInfo").style.display = 'none';
    document.getElementById("earthInfo").style.display = 'none';
    document.getElementById("sunInfo").style.display = 'none';
    document.getElementById("marsInfo").style.display = 'none';
    document.getElementById("venusInfo").style.display = 'none';
}