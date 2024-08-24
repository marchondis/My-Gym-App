const currentWorkoutForm = document.getElementById('current-workout-form');
const exerciseHistory = JSON.parse(localStorage.getItem('exerciseHistory')) || { chestPress: [] };

currentWorkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const sets = document.getElementById('current-sets').value;
  const weight = document.getElementById('current-weight').value;

  // Update exercise history
  exerciseHistory.chestPress.push({ date: new Date().toISOString(), sets, weight });

  // Save updated history to localStorage
  localStorage.setItem('exerciseHistory', JSON.stringify(exerciseHistory));

  // Update the table with the new data
  // ... (code to update the table)
});