// Unsere drei Listen für Notizen, Archiv und Papierkorb
let notes = [];
let archiveNotes = [];
let trashNotes = [];

// Wird beim Seitenstart aufgerufen
function init() {
  getFromLocalStorage();
  renderAll();
}

// Daten aus dem localStorage laden
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

// Aktuelle Daten in den localStorage schreiben
function saveToLocalStorage() {
  localStorage.setItem("notes", JSON.stringify(notes));
  localStorage.setItem("archiveNotes", JSON.stringify(archiveNotes));
  localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
}

// Neue Notiz aus den Eingabefeldern erstellen
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

  // Eingabefelder nach dem Speichern leeren
  titleInput.value = "";
  contentInput.value = "";

  saveToLocalStorage();
  renderAll();
}

// Alle drei Bereiche neu zeichnen
function renderAll() {
  renderNotes();
  renderArchiveNotes();
  renderTrashNotes();
}

// Aktive Notizen anzeigen
function renderNotes() {
  let container = document.getElementById("notesContent");
  container.innerHTML = "";

  for (let i = 0; i < notes.length; i++) {
    container.innerHTML += getNoteTemplate(notes[i], i);
  }
}

// Archivierte Notizen anzeigen
function renderArchiveNotes() {
  let container = document.getElementById("archiveContent");
  container.innerHTML = "";

  for (let i = 0; i < archiveNotes.length; i++) {
    container.innerHTML += getArchiveNoteTemplate(archiveNotes[i], i);
  }
}

// Gelöschte Notizen im Papierkorb anzeigen
function renderTrashNotes() {
  let container = document.getElementById("trashContent");
  container.innerHTML = "";

  for (let i = 0; i < trashNotes.length; i++) {
    container.innerHTML += getTrashNoteTemplate(trashNotes[i], i);
  }
}

// Notiz in das Archiv verschieben
function moveNoteToArchive(indexNote) {
  let movedNote = notes.splice(indexNote, 1)[0];
  archiveNotes.push(movedNote);
  saveToLocalStorage();
  renderAll();
}

// Notiz in den Papierkorb verschieben
function moveNoteToTrash(indexNote) {
  let movedNote = notes.splice(indexNote, 1)[0];
  trashNotes.push(movedNote);
  saveToLocalStorage();
  renderAll();
}

// Archivierte Notiz zurück zu den Notizen holen
function moveArchiveNoteToNotes(indexArchiveNote) {
  let movedNote = archiveNotes.splice(indexArchiveNote, 1)[0];
  notes.push(movedNote);
  saveToLocalStorage();
  renderAll();
}

// Archivierte Notiz in den Papierkorb verschieben
function moveArchiveNoteToTrash(indexArchiveNote) {
  let movedNote = archiveNotes.splice(indexArchiveNote, 1)[0];
  trashNotes.push(movedNote);
  saveToLocalStorage();
  renderAll();
}

// Notiz aus dem Papierkorb zurückholen
function moveTrashNoteToNotes(indexTrashNote) {
  let movedNote = trashNotes.splice(indexTrashNote, 1)[0];
  notes.push(movedNote);
  saveToLocalStorage();
  renderAll();
}

// Notiz aus dem Papierkorb ins Archiv verschieben
function moveTrashNoteToArchive(indexTrashNote) {
  let movedNote = trashNotes.splice(indexTrashNote, 1)[0];
  archiveNotes.push(movedNote);
  saveToLocalStorage();
  renderAll();
}

// Notiz endgültig aus dem Papierkorb löschen
function deleteTrashNote(indexTrashNote) {
  trashNotes.splice(indexTrashNote, 1);
  saveToLocalStorage();
  renderAll();
}
