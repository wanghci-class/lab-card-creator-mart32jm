document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.card-form');
    const previewBtn = document.getElementById('preview-btn');
    const saveBtn = document.getElementById('save-btn');
  
    previewBtn.addEventListener('click', function() {
      const toText = document.getElementById('to').value;
      const fromText = document.getElementById('from').value;
      const titleText = document.getElementById('title').value;
      const subtitleText = document.getElementById('subtitle').value;
      const messageText = document.getElementById('message').value;
  
      document.querySelector('.to-text').textContent = toText;
      document.querySelector('.from-text').textContent = fromText;
      document.querySelector('.title-text').textContent = titleText;
      document.querySelector('.subtitle-text').textContent = subtitleText;
      document.querySelector('.message-text').textContent = messageText;
    });
  
    saveBtn.addEventListener('click', function(event) {
      event.preventDefault();
  
      let cards = JSON.parse(localStorage.getItem('cards')) || [];
  
      const newCard = {
        to: document.getElementById('to').value,
        from: document.getElementById('from').value,
        title: document.getElementById('title').value,
        subtitle: document.getElementById('subtitle').value,
        message: document.getElementById('message').value
      };
  
      cards.push(newCard);
      localStorage.setItem('cards', JSON.stringify(cards));
    });
  });
  