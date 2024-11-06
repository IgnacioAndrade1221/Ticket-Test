// Example script to add cards
document.addEventListener('DOMContentLoaded', function() {
    const addCardButtons = document.querySelectorAll('.add-card');
    addCardButtons.forEach(button => {
      button.addEventListener('click', function() {
        const column = button.parentNode;
        const newCard = document.createElement('div');
        newCard.className = 'card';
        newCard.innerText = 'New Task';
        column.appendChild(newCard);
      });
    });
  });
  