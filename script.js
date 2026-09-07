const intro = document.querySelector("#projects_intro");
const initial_intro_text = intro.textContent;

function show(all) {
  Array.from(all).forEach((element) => {
    element.style.display = "flex";
  });
}

function hide(all) {
  Array.from(all).forEach((element) => {
    element.style.display = "none";
  });
}

function get_all() {
  return document.getElementsByClassName("project");
}

function hide_all() {
  hide(get_all());
}

function show_all() {
  show(get_all());
}

function show_all_projects() {
  restore_original_text();
  show_all();
}

function filter_show_project_type(project_type) {
  const projects = Array.from(get_all()).filter((element) =>
    element.classList.contains(project_type),
  );

  show(projects);
}

function show_hackathon_projects() {
  restore_original_text();
  hide_all();

  filter_show_project_type("hackathon");
}

function show_coursework() {
  const str =
    "Coursework is not publicly available to comply with academic integrity regulations.";
  intro.textContent = str;

  hide_all();

  filter_show_project_type("coursework");
}

function show_personal() {
  restore_original_text();
  hide_all();

  filter_show_project_type("personal");
}

function restore_original_text() {
  intro.textContent = initial_intro_text;
}
