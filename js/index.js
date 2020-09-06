// 1. Mouseover
let logoHeading = document.querySelector('.logo-heading')
logoHeading.addEventListener('mouseover', function(event) {
    event.target.style.color = 'orange'
});

// 2. dbclick
const logoHeader = document. querySelector('.main-navigation');
logoHeader.addEventListener('dblclick', function() {
    logoHeader.style.backgroundColor = 'skyblue';
});

// 3. keydown
const bodyColor = document.querySelector('body');
bodyColor.addEventListener('keydown', e => {
    e.target.style.backgroundColor =  "lightgrey";
});

// 4. mouseenter
const imgHover = document.querySelector("img")
imgHover.addEventListener("mouseenter", () => {
  imgHover.style.transform ="scale(1.2)";
  imgHover.style.transition = "all 0.3s"
});

// 5. mouseleave
imgHover.addEventListener("mouseleave", () => {
    imgHover.style.transform ="scale(1)";
  });

// 6.
const img_1 = document.querySelector("img")
window.addEventListener('resize', () => {
    img_1.src = "https://images.unsplash.com/photo-1598944675794-1fe37b6bc197?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
  });


// 7.



// 8.



// 9.



// 10. 