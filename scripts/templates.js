function getNoteTemplate(note, indexNote) {
  return (
    '<div class="note-card">' +
      '<h3>' + note.title + '</h3>' +
      '<p>' + note.content + '</p>' +
      '<div class="note-actions">' +
        '<button class="btn btn-archive" onclick="moveNoteToArchive(' + indexNote + ')">Archiv</button>' +
        '<button class="btn btn-trash" onclick="moveNoteToTrash(' + indexNote + ')">Löschen</button>' +
      '</div>' +
    '</div>'
  );
}

function getArchiveNoteTemplate(note, indexArchiveNote) {
  return (
    '<div class="note-card">' +
      '<h3>' + note.title + '</h3>' +
      '<p>' + note.content + '</p>' +
      '<div class="note-actions">' +
        '<button class="btn btn-notes" onclick="moveArchiveNoteToNotes(' + indexArchiveNote + ')">Notizen</button>' +
        '<button class="btn btn-trash" onclick="moveArchiveNoteToTrash(' + indexArchiveNote + ')">Löschen</button>' +
      '</div>' +
    '</div>'
  );
}

function getTrashNoteTemplate(note, indexTrashNote) {
  return (
    '<div class="note-card">' +
      '<h3>' + note.title + '</h3>' +
      '<p>' + note.content + '</p>' +
      '<div class="note-actions">' +
        '<button class="btn btn-notes" onclick="moveTrashNoteToNotes(' + indexTrashNote + ')">Notizen</button>' +
        '<button class="btn btn-archive" onclick="moveTrashNoteToArchive(' + indexTrashNote + ')">Archiv</button>' +
        '<button class="btn btn-delete" onclick="deleteTrashNote(' + indexTrashNote + ')">Löschen</button>' +
      '</div>' +
    '</div>'
  );
}
