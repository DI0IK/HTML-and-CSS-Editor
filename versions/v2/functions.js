function show_html() {
  var button = document.getElementById("show_html");
  var textfield = document.createElement("textarea");
  textfield.id = "html_code";
  textfield.rows = "25";
  textfield.cols = "120";
  document.body.insertBefore(textfield, document.getElementById("space_html"));
  button.onclick = hide_html;
  button.innerHTML = "hide HTML Code";
}

function hide_html() {
  var button = document.getElementById("show_html");
  var textfield = document.getElementById("html_code");
  document.body.removeChild(textfield);
  button.onclick = show_html;
  button.innerHTML = "show HTML Code";
}

function show_css() {
  var button = document.getElementById("show_css");
  var textfield = document.createElement("textarea");
  textfield.id = "css_code";
  textfield.rows = "25";
  textfield.cols = "120";
  document.body.insertBefore(textfield, document.getElementById("space_css"));
  button.onclick = hide_css;
  button.innerHTML = "hide CSS Code";
}

function hide_css() {
  var button = document.getElementById("show_css");
  var textfield = document.getElementById("css_code");
  document.body.removeChild(textfield);
  button.onclick = show_css;
  button.innerHTML = "show CSS Code";
}

function refresh_txtareas() {
  html_area = document.getElementById("html_code");
  css_area = document.getElementById("css_code");
  html_area.value = document.body.outerHTML;
}
