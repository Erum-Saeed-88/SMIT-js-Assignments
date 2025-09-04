
// Q1

function showAlert() {
    alert("Hi Erum! You clicked the link.");
};

// Q2

function imageClicked(mobileName) {
    alert("Thanks for purchasing " + mobileName);
};

// Q4

var image = document.getElementById("flowerImage");

  // Original and hover images
var originalSrc = "https://graficsea.com/wp-content/uploads/2022/04/Yellow-Rose-Flower-.png";
var hoverSrc = "https://png.pngtree.com/png-clipart/20250218/original/pngtree-a-lush-bouquet-of-vibrant-red-roses-elegantly-arranged-and-surrounded-png-image_20457297.png";

  // Mouseover event
  image.addEventListener("mouseover", function() {
    image.src = hoverSrc;
  });

  // Mouseout event
  image.addEventListener("mouseout", function() {
    image.src = originalSrc;
  });



// Q5

var counter = 0;

function updateCounter() {
    document.getElementById("counterValue").innerText = counter;
};

function increaseCounter() {
    counter++;
    updateCounter();
};

function decreaseCounter() {
    counter--;
    updateCounter();
};