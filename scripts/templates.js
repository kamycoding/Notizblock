// Baut den HTML-Code für eine Karte im Notizen-Bereich zusammen
function getNoteTemplate(note, indexNote) {
  return (
    '<div class="note-card">' +
      '<h3>' + note.title + '</h3>' +
      '<p>' + note.content + '</p>' +
      '<div class="note-actions">' +
        '<button class="btn btn-archive" onclick="moveNoteToArchive(' + indexNote + ')">A</button>' +
        '<button class="btn btn-trash" onclick="moveNoteToTrash(' + indexNote + ')">X</button>' +
      '</div>' +
    '</div>'
  );
}

// Baut den HTML-Code für eine Karte im Archiv-Bereich zusammen
function getArchiveNoteTemplate(note, indexArchiveNote) {
  return (
    '<div class="note-card">' +
      '<h3>' + note.title + '</h3>' +
      '<p>' + note.content + '</p>' +
      '<div class="note-actions">' +
        '<button class="btn btn-notes" onclick="moveArchiveNoteToNotes(' + indexArchiveNote + ')">N</button>' +
        '<button class="btn btn-trash" onclick="moveArchiveNoteToTrash(' + indexArchiveNote + ')">X</button>' +
      '</div>' +
    '</div>'
  );
}

// Baut den HTML-Code für eine Karte im Papierkorb-Bereich zusammen
function getTrashNoteTemplate(note, indexTrashNote) {
  return (
    '<div class="note-card">' +
      '<h3>' + note.title + '</h3>' +
      '<p>' + note.content + '</p>' +
      '<div class="note-actions">' +
        '<button class="btn btn-notes" onclick="moveTrashNoteToNotes(' + indexTrashNote + ')">N</button>' +
        '<button class="btn btn-archive" onclick="moveTrashNoteToArchive(' + indexTrashNote + ')">A</button>' +
        '<button class="btn btn-delete" onclick="deleteTrashNote(' + indexTrashNote + ')">X</button>' +
      '</div>' +
    '</div>'
  );
}
