let notes = [];
let archiveNotes = [];
let trashNotes = [];

// Wird beim Seitenstart aufgerufen
function init() {
  getFromLocalStorage();
  renderAll();
}

function getFromLocalStorage() {
  let storedNotes = JSON.parse(localStorage.getItem("notes"));
  let storedArchive = JSON.parse(localStorage.getItem("archiveNotes"));
  let storedTrash = JSON.parse(localStorage.getItem("trashNotes"));

  if (storedNotes !== null) {
    notes = storedNotes;
  }
  if (storedArchive !== null) {
    archiveNotes = storedArchive;
  }
  if (storedTrash !== null) {
    trashNotes = storedTrash;
  }
}

function saveToLocalStorage() {
  localStorage.setItem("notes", JSON.stringify(notes));
  localStorage.setItem("archiveNotes", JSON.stringify(archiveNotes));
  localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
}

function addNote() {
  let titleInput = document.getElementById("noteTitle");
  let contentInput = document.getElementById("noteContent");

  let title = titleInput.value.trim();
  let content = contentInput.value.trim();

  // Nur speichern, wenn beide Felder ausgefüllt sind
  if (title === "" || content === "") {
    alert("Bitte Titel und Inhalt eingeben.");
    return;
  }

  let newNote = {
    title: title,
    content: content
  };

  notes.push(newNote);

  titleInput.value = "";
  contentInput.value = "";

  saveToLocalStorage();
  renderAll();
}

function renderAll() {
  renderNotes();
  renderArchiveNotes();
  renderTrashNotes();
}

function renderNotes() {
  let container = document.getElementById("notesContent");
  container.innerHTML = "";

  for (let i = 0; i < notes.length; i++) {
    container.innerHTML += getNoteTemplate(notes[i], i);
  }
}

function renderArchiveNotes() {
  let container = document.getElementById("archiveContent");
  container.innerHTML = "";

  for (let i = 0; i < archiveNotes.length; i++) {
    container.innerHTML += getArchiveNoteTemplate(archiveNotes[i], i);
  }
}

function renderTrashNotes() {
  let container = document.getElementById("trashContent");
  container.innerHTML = "";

  for (let i = 0; i < trashNotes.length; i++) {
    container.innerHTML += getTrashNoteTemplate(trashNotes[i], i);
  }
}

function moveNoteToArchive(indexNote) {
  let movedNote = notes.splice(indexNote, 1)[0];
  archiveNotes.push(movedNote);
  saveToLocalStorage();
  renderAll();
}

function moveNoteToTrash(indexNote) {
  let movedNote = notes.splice(indexNote, 1)[0];
  trashNotes.push(movedNote);
  saveToLocalStorage();
  renderAll();
}

function moveArchiveNoteToNotes(indexArchiveNote) {
  let movedNote = archiveNotes.splice(indexArchiveNote, 1)[0];
  notes.push(movedNote);
  saveToLocalStorage();
  renderAll();
}

function moveArchiveNoteToTrash(indexArchiveNote) {
  let movedNote = archiveNotes.splice(indexArchiveNote, 1)[0];
  trashNotes.push(movedNote);
  saveToLocalStorage();
  renderAll();
}

function moveTrashNoteToNotes(indexTrashNote) {
  let movedNote = trashNotes.splice(indexTrashNote, 1)[0];
  notes.push(movedNote);
  saveToLocalStorage();
  renderAll();
}

function moveTrashNoteToArchive(indexTrashNote) {
  let movedNote = trashNotes.splice(indexTrashNote, 1)[0];
  archiveNotes.push(movedNote);
  saveToLocalStorage();
  renderAll();
}

function deleteTrashNote(indexTrashNote) {
  trashNotes.splice(indexTrashNote, 1);
  saveToLocalStorage();
  renderAll();
}
