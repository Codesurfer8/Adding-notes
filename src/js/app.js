const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const listNotes = document.querySelector('.list-notes');

button.addEventListener(
  'click',
  () => {
    if(input.value === '') return;
    if(listNotes.children.length === 30) return;
    let html = `<div class = 'note'><li class = 'list-item'>${input.value}</li><button class = 'btn-close'>Close</div>`;
    listNotes.insertAdjacentHTML('beforeend', html);
  }
);
