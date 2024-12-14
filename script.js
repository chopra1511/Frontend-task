function toggleDetails(box) {
  const details = box.querySelector(".details");
  const allDetails = document.querySelectorAll(".details");
  const allBoxes = document.querySelectorAll(".offer-box");

  // Hide other details
  allDetails.forEach((detail) => {
    if (detail !== details) {
      detail.classList.remove("active");
    }
  });

  allBoxes.forEach((otherBox) => {
    if (otherBox !== box) {
      otherBox.style.backgroundColor = ""; // Reset background color
    }
  });

  // Toggle visibility of clicked details
  details.classList.toggle("active");

  // Select the radio button in the clicked box, if it exists
  const radioButton = box.querySelector('input[type="radio"]');
  if (radioButton) {
    radioButton.checked = true;
  }

  // Set the background color for the clicked box
  box.style.backgroundColor = details.classList.contains("active")
    ? "#FFF3F5"
    : ""; // Add background only if details are active
    
}
