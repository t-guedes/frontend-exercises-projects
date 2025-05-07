// Elementos
const notesContainer = document.querySelector("#notes-container");
const noteInput = document.querySelector("#note-content");
const addNoteBtn = document.querySelector(".add-note");
const searchInput = document.querySelector("#search-input");
const exportBtn = document.querySelector("#export-notes");

// Funções
function showNotes() {
  cleanNotes();
  getNotes().forEach((note) => {
    const noteElement = createNote(note.id, note.content, note.fixed);
    notesContainer.appendChild(noteElement);
  });
}

function getNotes() {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");
  const orderedNotes = notes.sort((a, b) => (a.fixed > b.fixed ? -1 : 1));
  return orderedNotes;
}

function cleanNotes() {
  notesContainer.replaceChildren([]);
}

function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function createNote(id, content, fixed) {
  const element = document.createElement("div");
  element.classList.add("note");

  const textarea = document.createElement("textarea");
  textarea.value = content;
  textarea.placeholder = "Adicione algum texto...";
  element.appendChild(textarea);

  if (fixed) {
    element.classList.add("fixed");
  }

  const pinIcon = document.createElement("i");
  pinIcon.classList.add(...["bi", "bi-pin"]);
  element.appendChild(pinIcon);

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add(...["bi", "bi-x-lg"]);
  element.appendChild(deleteIcon);

  const duplicateIcon = document.createElement("i");
  duplicateIcon.classList.add(...["bi", "bi-file-earmark-plus"]);
  element.appendChild(duplicateIcon);

  // Eventos do elemento
  element.querySelector("textarea").addEventListener("keydown", () => {
    const noteContent = element.querySelector("textarea").value;
    updateNote(id, noteContent);
  });

  element.querySelector(".bi-x-lg").addEventListener("click", () => {
    deleteNote(id, element);
  });

  element.querySelector(".bi-pin").addEventListener("click", () => {
    toggleFixNote(id);
  });

  element.querySelector(".bi-file-earmark-plus").addEventListener("click", () => {
    copyNote(id);
  });

  return element;
}

function addNote() {
  const notes = getNotes();  // Pega as notas do localStorage

  const noteObject = {
    id: generateId(),
    content: noteInput.value,
    fixed: false,
  };

  notes.push(noteObject);  // Adiciona a nova nota à lista de notas

  saveNotes(notes);  // Salva a lista de notas no localStorage

  const noteElement = createNote(noteObject.id, noteObject.content);
  notesContainer.appendChild(noteElement);

  noteInput.value = "";  // Limpa o campo de entrada
}

function generateId() {
  return Math.floor(Math.random() * 5000);  // Gera um ID aleatório
}

function updateNote(id, newContent) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id === id)[0];
  targetNote.content = newContent;
  saveNotes(notes);
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id !== id);  // Remove a nota
  saveNotes(notes);  // Salva as alterações no localStorage
  notesContainer.removeChild(element);  // Remove o elemento da UI
}

function toggleFixNote(id) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id === id)[0];
  targetNote.fixed = !targetNote.fixed;  // Alterna o estado fixado
  saveNotes(notes);
  showNotes();  // Atualiza a lista de notas
}

function searchNotes(search) {
  const searchResults = getNotes().filter((note) =>
    note.content.toLowerCase().includes(search.toLowerCase())  // Busca sem diferenciar maiúsculas/minúsculas
  );

  cleanNotes();

  if (search !== "") {
    searchResults.forEach((note) => {
      const noteElement = createNote(note.id, note.content);
      notesContainer.appendChild(noteElement);
    });
  } else {
    showNotes();  // Mostra todas as notas se a busca estiver vazia
  }
}

function copyNote(id) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id === id)[0];

  const noteObject = {
    id: generateId(),
    content: targetNote.content,
    fixed: false,
  };

  notes.push(noteObject);  // Adiciona a nota copiada à lista
  saveNotes(notes);  // Salva no localStorage

  const noteElement = createNote(noteObject.id, noteObject.content, false);
  notesContainer.appendChild(noteElement);
}

function exportData() {
  const notes = getNotes();
  const csvString = [
    ["ID", "Conteúdo", "Fixado?"],
    ...notes.map((note) => [note.id, note.content, note.fixed]),
  ]
    .map((e) => e.join(","))
    .join("\n");

  const element = document.createElement("a");
  element.href = "data:text/csv;charset=utf-8," + encodeURI(csvString);
  element.target = "_blank";
  element.download = "export.csv";
  element.click();
}

// Eventos
addNoteBtn.addEventListener("click", () => addNote());

searchInput.addEventListener("keyup", (e) => {
  const search = e.target.value;
  searchNotes(search);
});

noteInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addNote();
  }
});

exportBtn.addEventListener("click", () => {
  exportData();
});

// Inicialização
showNotes();
