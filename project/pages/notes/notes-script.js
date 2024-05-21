const myNotes = document.querySelector(".new-old-notes-spot__button");
const completedNotes = document.querySelector(".complited-notes-spot__button");
const notesBody = document.querySelector(".content__notes-list");
const createNote = document.querySelector(".notes-instruments__create-note");
const notesInstruments = document.querySelector(".notes-instruments__create-note-spot");


createNote.addEventListener("click", function () {
    let key = new Date();

    const inputTitleNote = document.createElement("input");
    inputTitleNote.type = "text";
    inputTitleNote.className = "create-note-spot__note-title";
    inputTitleNote.placeholder = "Название заметки";

    const inputTextNote = document.createElement("textarea");
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

    submitButton.addEventListener('click', function () {
        const data = {
            title: inputTitleNote.value,
            text: inputTextNote.value,
            complited: false
        }
        localStorage.setItem(String(key), JSON.stringify(data));
        notesInstruments.removeChild(inputTextNote);
        notesInstruments.removeChild(inputTitleNote);
        notesInstruments.removeChild(buttonsSpot);
    })

    cancelButton.addEventListener('click', function () {
        notesInstruments.removeChild(inputTextNote);
        notesInstruments.removeChild(inputTitleNote);
        notesInstruments.removeChild(buttonsSpot);
    })
});

myNotes.addEventListener('click', function () {
    notesBody.innerHTML = `<h4 class="notes-list__title">Список заметок:</h4>`;
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            let note = JSON.parse(localStorage.getItem(key));
            if (note && note.complited == false) {
                const article = document.createElement("article");
                article.className = "notes-list__note-item";

                const title = document.createElement("h2");
                title.className = "note-item__title";
                title.textContent = note.title;

                const description = document.createElement("p");
                description.className = "note-item__description";
                description.textContent = note.text;

                const buttonSection = document.createElement("section");
                buttonSection.className = "note-item__button-spot";

                const editButton = document.createElement("button");
                editButton.type = "button";
                editButton.className = "button-spot__edit-button";
                editButton.textContent = "Редактировать";

                const compliteButton = document.createElement("button");
                compliteButton.type = "button";
                compliteButton.className = "button-spot__complite-button";
                compliteButton.textContent = "Сделано!";

                const deleteButton = document.createElement("button");
                deleteButton.type = "button";
                deleteButton.className = "button-spot__delete-button";
                deleteButton.textContent = "Удалить";

                buttonSection.appendChild(editButton);
                buttonSection.appendChild(compliteButton);
                buttonSection.appendChild(deleteButton);
                
                article.appendChild(title);
                article.appendChild(description);
                article.appendChild(buttonSection);

                notesBody.appendChild(article);
            }
        }
    }
})