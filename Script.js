const noteInput = document.getElementById('note-input');
const addNoteBtn = document.getElementById('add-note-btn');
const notesContainer = document.querySelector('.notes');

addNoteBtn.addEventListener('click', () => {
    const noteText = noteInput.value;

    if (noteText.trim() !== '') {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.textContent = noteText;

        notesContainer.appendChild(noteElement);

        noteInput.value = '';
    }
});
