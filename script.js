const exerciseCategories = document.getElementById('exercise-categories');
const exerciseDetails = document.getElementById('exercise-details');
const exerciseCategoryHeading = document.getElementById('exercise-category');
const exerciseList = document.getElementById('exercise-list');

// Create an object to store exercise history
const exerciseHistory = {
  chestPress: [],
  // Add other exercise categories here
};

exerciseCategories.addEventListener('click', (event) => {
  const selectedCategory = event.target.textContent;

  if (selectedCategory === 'Chest Day') {
    exerciseCategoryHeading.textContent = 'Chest Exercises';
    exerciseList.innerHTML = `
      <li><a href="chest-press.html">Barbell Bench Press</a></li>
      <li><a href="incline-dumbbell-press.html">Incline Dumbbell Press</a></li>
      `;
    exerciseDetails.style.display = 'block';
  } else {
    // Hide exercise details for other categories
    exerciseDetails.style.display = 'none';
  }
});