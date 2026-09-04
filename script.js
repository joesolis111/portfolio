const intro = document.querySelector("#projects_intro");
const initial_intro_text = intro.textContent;

function show_all_projects() {
  restore_original_text();
}

function show_hackathon_projects() {
  restore_original_text();
}

function show_coursework() {
  var str =
    "Coursework is not publicly available to comply with academic integrity regulations.";
  intro.textContent = str;
}

function show_personal() {
  restore_original_text();
}

function restore_original_text() {
  intro.textContent = initial_intro_text;
}
