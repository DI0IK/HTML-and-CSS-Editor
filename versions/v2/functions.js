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
    .outerHTML;
  if (html_code.includes("<!-- Code injected by live-server -->")) {
    html_code =
      html_code.split("<!-- Code injected by live-server -->")[0] + "</body>";
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
}

function update_html() {
  set_html(document.getElementById("html_code").value);
  console.log;
}

function set_css(value) {
  document
    .getElementById("iframe")
    .contentWindow.document.getElementById("style").innerHTML = value;
  autosave();
}

function set_html(value) {
  iframe = document.getElementById("iframe").contentWindow.document;
  iframe.documentElement.innerHTML =
    iframe.documentElement.innerHTML.split("</head>")[0] + "</head>" + value;
  autosave();
}

function onload() {
  if (
    navigator.userAgent.match(
      /(iPhone|iPod|iPad|blackberry|android|Kindle|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|symbian|treo mini|Playstation Portable|SonyEricsson|Samsung|MobileExplorer|PalmSource|Benq|Windows Phone|Windows Mobile|IEMobile|Windows CE|Nintendo Wii)/i
    )
  ) {
    window.location.href = "mobile.html";
  }
  iframe = document.getElementById("iframe").contentWindow.document;
  iframe.documentElement.innerHTML =
    iframe.documentElement.innerHTML.split("</head>")[0] +
    "</head>" +
    localStorage.getItem("html-code");
  iframe.getElementById("style").innerHTML = localStorage.getItem("css-code");
}

function autosave() {
  var html = document.getElementById("iframe").contentWindow.document.body
    .outerHTML;
  var css = document
    .getElementById("iframe")
    .contentWindow.document.getElementById("style").innerHTML;
  localStorage.setItem("html-code", html);
  localStorage.setItem("css-code", css);
}

function clear_page() {
  localStorage.setItem("html-code", "");
  localStorage.setItem("css-code", "");
  location.reload();
}

function download() {
  var html_before = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="style.css" />
    </head>\n`;
  var html_after = `\n</html>`;
  var html_code = localStorage.getItem("html-code");
  var css_code = localStorage.getItem("css-code");
  download_text("html.html", html_before + html_code + html_after);
  download_text("style.css", css_code);
}

function download_text(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
