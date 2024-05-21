const myNotes = document.querySelector(".new-old-notes-spot__button");
const completedNotes = document.querySelector(".complited-notes-spot__button");
const notesBody = document.querySelector(".content__notes-list");
const createNote = document.querySelector(".notes-instruments__create-note");
const notesInstruments = document.querySelector(".notes-instruments__create-note-spot");


createNote.addEventListener("click", function() {
    let key = new Date();

    const inputTitleNote = document.createElement("input");
    inputTitleNote.type = "text";
    inputTitleNote.className = "create-note-spot__note-title";
    inputTitleNote.placeholder = "Название заметки";

    const inputTextNote = document.createElement("input");
    inputTextNote.type = "text";
    inputTextNote.className = "create-note-spot__note-text";
    inputTextNote.placeholder = "Текст заметки";

    const buttonsSpot = document.createElement("section");
    buttonsSpot.className = "crate-note-spot__buttons-spot";

    const submitButton = document.createElement("button");
    submitButton.type = "button";
    submitButton.className = "create-note-spot__button-submit";
    submitButton.textContent = "Создать";

    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.className = "create-note-spot__button-cancel";
    cancelButton.textContent = "Отмена";

    buttonsSpot.appendChild(submitButton);
    buttonsSpot.appendChild(cancelButton);

    notesInstruments.appendChild(inputTitleNote);
    notesInstruments.appendChild(inputTextNote);
    notesInstruments.appendChild(buttonsSpot);

    submitButton.addEventListener('click', function() {
        const data = {
            title: inputTitleNote.value,
            text: inputTextNote.value,
            complited: false
        }
        localStorage.setItem(String(key), data);
        notesInstruments.removeChild(inputTextNote);
        notesInstruments.removeChild(inputTitleNote);
        notesInstruments.removeChild(buttonsSpot);
    })

    cancelButton.addEventListener('click', function() {
        notesInstruments.removeChild(inputTextNote);
        notesInstruments.removeChild(inputTitleNote);
        notesInstruments.removeChild(buttonsSpot);
    })
});