/* Yes, every single dropdown has a js script. I'm so sorry.
God knows what the hell decided ti make me make it like this.
But hey you don't need to figure much out for another dropdown just copy these 
^..^ <- cat to make you feel better or something idk*/
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
} 
function openCategories() {
    document.getElementById("categoryDropArrow").style.display = "inline-block";
    document.getElementById("categoryList").style.display = "block";
}
function closeCategories() {
    document.getElementById("categoryDropArrow").style.display = "none";
    document.getElementById("categoryList").style.display = "none";
}
function openLessons() {
    document.getElementById("lessonDropArrow").style.display = "inline-block";
    document.getElementById("lessonList").style.display = "block";
}
function closeLessons() {
    document.getElementById("lessonDropArrow").style.display = "none";
    document.getElementById("lessonList").style.display = "none";
}

/* The mobile versions too just in case (I'm so sorry). */
function openNavM() {
    document.getElementById("sidenavM").style.width = "100%";
}
function closeNavM() {
    document.getElementById("sidenavM").style.width = "0";
} 
function openCategoriesM() {
    document.getElementById("categoryDropArrowM").style.display = "inline-block";
    document.getElementById("categoryListM").style.display = "block";
}
function closeCategoriesM() {
    document.getElementById("categoryDropArrowM").style.display = "none";
    document.getElementById("categoryListM").style.display = "none";
}
function openLessonsM() {
    document.getElementById("lessonDropArrowM").style.display = "inline-block";
    document.getElementById("lessonListM").style.display = "block";
}
function closeLessonsM() {
    document.getElementById("lessonDropArrowM").style.display = "none";
    document.getElementById("lessonListM").style.display = "none";
}

//Slideshow bs yayyyy
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("topicSlide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
} 

//Slideshow bs yayyyy
let slideIndexM = 1;
showSlidesM(slideIndexM);

// Next/previous controls
function plusSlidesM(n) {
  showSlidesM(slideIndexM += n);
}

// Thumbnail image controls
function currentSlideM(n) {
  showSlidesM(slideIndexM = n);
}

function showSlidesM(n) {
  let i;
  let slidesM = document.getElementsByClassName("topicSlideM");
  if (n > slidesM.length) {slideIndexM = 1}
  if (n < 1) {slideIndexM = slidesM.length}
  for (i = 0; i < slidesM.length; i++) {
    slidesM[i].style.display = "none";
  }
  slidesM[slideIndexM-1].style.display = "block";
} 