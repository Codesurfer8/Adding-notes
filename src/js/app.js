const input = document.querySelector('.input');
const buttonAddNote = document.querySelector('.btn-add');
const listNotes = document.querySelector('.list-notes');
const buttonCloseAll = document.querySelector('.btn-close-all');
const buttonSaveNotes = document.querySelector('.save-notes');
const inputSaveNotes = document.querySelector('.name-save-notes');

const viewingList = document.querySelector('.viewing-notes');

buttonAddNote.addEventListener(
  'click',
  () => {
    if (input.value === '') return;
    if (listNotes.children.length === 20) return;
    if (listNotes.children) buttonCloseAll.style.display = 'block';

    const elementNote = document.createElement('div');
    elementNote.classList.add('note');

    elementNote.insertAdjacentHTML(
      'beforeend',
      `<li class = 'list-item'>${input.value}</li><button class='btn-close'>Close</button>`,
    );

    listNotes.append(elementNote);
    const btnClose = elementNote.querySelector('.btn-close');
    btnClose.addEventListener(
      'click',
      (ev) => {
        const element = ev.target.closest('.note');
        element.remove();
      },
    );

    const arrListNode = Array.from(document.querySelectorAll('.note'));
    buttonCloseAll.addEventListener(
      'click',
      () => {
        buttonCloseAll.style.display = 'none';
        arrListNode.forEach((item) => {
          item.remove();
        });
      },
    );

let arrValueItems = [];
arrListNode.forEach((item) => {
  arrValueItems.push(item.firstChild.textContent);
  return arrValueItems;
});

    buttonSaveNotes.addEventListener(
      'click',
      () => {
        let namePosition = inputSaveNotes.value
        localStorage.setItem(namePosition, arrValueItems);
        console.log(namePosition)
      }
    );
  },
);
