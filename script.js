// Get all mood buttons
const moodButtons = document.querySelectorAll('.mood-btn');

// Loop through each button and add a click event
moodButtons.forEach(button => {
  button.addEventListener('click', () => {
    let mood = button.textContent;
    let moodText = '';

    if (mood === '😊') moodText = 'Happy';
    else if (mood === '😐') moodText = 'Neutral';
    else if (mood === '😞') moodText = 'Sad';

    alert(`You chose: ${moodText}!`);
  });
});
