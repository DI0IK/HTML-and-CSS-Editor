function show_html() {
  var button = document.getElementById("show_html");
  var textfield = document.createElement("textarea");
  textfield.id = "html_code";
  textfield.rows = "25";
  textfield.cols = "120";
  textfield.placeholder = "HTML";
  textfield.onchange = update_html;
  document.body.insertBefore(textfield, document.getElementById("space"));
  button.onclick = hide_html;
  button.innerHTML = "hide HTML Code";
  refresh_txtareas();
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
  textfield.placeholder = "CSS";
  textfield.onchange = update_css;
  document.body.insertBefore(textfield, document.getElementById("space"));
  button.onclick = hide_css;
  button.innerHTML = "hide CSS Code";
  refresh_txtareas();
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
  if (html_area != null) {
    refresh_html();
  }
  css_area = document.getElementById("css_code");
  if (css_area != null) {
    refresh_css();
  }
}

function refresh_html() {
  html_area = document.getElementById("html_code");
  html_code = document.getElementById("iframe").contentWindow.document.body
    .innerHTML;
  if (html_code.includes("<!-- Code injected by live-server -->")) {
    html_code =
      html_code.split("<!-- Code injected by live-server -->")[0] + "";
  }
  html_area.value = html_code;
}

function refresh_css() {
  css_area = document.getElementById("css_code");
  css_area.value = document
    .getElementById("iframe")
    .contentWindow.document.getElementById("style").innerHTML;
}

function update_css() {
  set_css(document.getElementById("css_code").value);
  //refresh_txtareas();
}

function update_html() {
  set_html(document.getElementById("html_code").value);
  console.log;
  //refresh_txtareas();
}

function set_css(value) {
  document
    .getElementById("iframe")
    .contentWindow.document.getElementById("style").innerHTML = value;
}

function set_html(value) {
  document.getElementById(
    "iframe"
  ).contentWindow.document.body.innerHTML = value;
}

function onload() {
  set_html("");
  if (
    navigator.userAgent.match(
      /(iPhone|iPod|iPad|blackberry|android|Kindle|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|symbian|treo mini|Playstation Portable|SonyEricsson|Samsung|MobileExplorer|PalmSource|Benq|Windows Phone|Windows Mobile|IEMobile|Windows CE|Nintendo Wii)/i
    )
  ) {
    window.location.href = "mobile.html";
  }
}
