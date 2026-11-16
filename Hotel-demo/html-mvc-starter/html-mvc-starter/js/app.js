const model = {
  title: "HTML MVC Starter Template",
  subtitle: "Controller updated this subtitle",
  message: "The controller changed the view successfully. Your MVC starter is working.",
};

const view = {
  title: document.getElementById("page-title"),
  subtitle: document.getElementById("page-subtitle"),
  message: document.getElementById("page-message"),
};

function render() {
  view.title.textContent = model.title;
  view.subtitle.textContent = model.subtitle;
  view.message.textContent = model.message;
}

function handleUpdateClick() {
  model.title = "Controller Action Complete";
  model.subtitle = "JavaScript updated the page without reloading HTML structure.";
  model.message =
    "PM0204 evidence: the button triggered app.js, which updated the view from the model.";
  render();
}

document.getElementById("update-btn").addEventListener("click", handleUpdateClick);

render();
