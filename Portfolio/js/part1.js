const yearShow = document.getElementById("year-show");
let radios = document.querySelectorAll("input[name=step]");



const slider = document.getElementById("scrollSlider");
const scrollContainer = document.getElementById("slider-catalog");


function setYearTxt() {
  radios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.checked) {
        yearShow.innerHTML = switchKey(radio.value);
      }
    })
  })
}
function switchKey(value) {
  switch (value) {
    case "0": return "2013";
    case "1": return "2015";
    case "2": return "2017";
    case "3": return "2018";
    case "4": return "2025";
    case "5": return "Processing...";
    default:
      break;
  }
}
setYearTxt();

slider.addEventListener("input", () => {
  const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  scrollContainer.scrollLeft = (slider.value / 100) * maxScroll;
  // console.log("Max Scroll: " + maxScroll);
});
scrollContainer.addEventListener("scroll", () => {
  const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  const percent = (scrollContainer.scrollLeft / maxScroll) * 100;
  slider.value = percent;
})

let isDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  scrollContainer.classList.add("active"); // optional: style khi đang kéo
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener("mouseleave", () => {
  isDown = false;
  scrollContainer.classList.remove("active");
});

scrollContainer.addEventListener("mouseup", () => {
  isDown = false;
  scrollContainer.classList.remove("active");
});

scrollContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 1.2; // tốc độ kéo, điều chỉnh nếu muốn
  scrollContainer.scrollLeft = scrollLeft - walk;
});

$('#send-message-box').on('submit', function (e) {
  e.preventDefault();
});




// window.addEventListener('scroll', function(){
//   const btn = this.document.getElementById('goto-header');
//   if(this.window.scrollY > 1){
//     btn.style.display = 'flex';
//   }
//   else{
//     btn.style.display = 'none';
//   }
// });

// document.getElementById('goto-header').addEventListener('click', function(){
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// });

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 200) {
    $("#goto-header").fadeIn();
  } else {
    $("#goto-header").fadeOut();
  }
});

// Khi bấm vào nút, cuộn lên đầu trang
$("#goto-header").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});