function onload() {
  if (
    navigator.userAgent.match(
      /(iPhone|iPod|iPad|blackberry|android|Kindle|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|symbian|treo mini|Playstation Portable|SonyEricsson|Samsung|MobileExplorer|PalmSource|Benq|Windows Phone|Windows Mobile|IEMobile|Windows CE|Nintendo Wii)/i
    )
  ) {
    window.location.href = "mobile.html";
  }
  window.addEventListener("focus", focus);
  update();
}
function update() {
  if (document.getElementById("html_code") != null) {
    update_css();
    update_html();
  }
  iframe = document.getElementById("iframe").contentWindow.document;
  if (localStorage.getItem("html-code") == null)
    localStorage.setItem("html-code", "<body>\n</body>");
  if (localStorage.getItem("html-code") != null)
    iframe.documentElement.innerHTML =
      iframe.documentElement.innerHTML.split("</head>")[0] +
      "</head>" +
      localStorage.getItem("html-code").replace(/\n\s*\n/g, "\n");
  if (localStorage.getItem("css-code") != null)
    iframe.getElementById("style").innerHTML = localStorage.getItem("css-code");
  html_area = iframe.documentElement.innerHTML.split("</head>")[1];
  var list = document.getElementById("move_elem");
  list.innerHTML = "";
  elemlist = html_area.split(/\r\n|\r|\n/);
  var typelist = "";
  elemlist.forEach((element) => {
    n_element = element.split("<")[1].split(">")[0].split(" ")[0];
    if (!n_element.includes("/")) {
      typelist = typelist + "|" + n_element;
      list_element = document.createElement("option");
      times = 0;
      typelist.split("|").forEach((type) => {
        if (type == n_element) times++;
      });
      list_element.innerHTML =
        n_element + ": " + element.split(">")[1].split("</" + n_element)[0];
      list_element.value = times;
      list.appendChild(list_element);
    }
  });
  set_select();
}
function focus() {
  update();
}

function show_advanced() {
  show_html();
  show_css();
  document.getElementById("show_adv").innerHTML = "disable Advanced mode";
  document.getElementById("show_adv").onclick = hide_advanced;
}

function hide_advanced() {
  hide_html();
  hide_css();
  document.getElementById("show_adv").innerHTML = "enable Advanced mode";
  document.getElementById("show_adv").onclick = show_advanced;
}

function show_html() {
  var textfield = document.createElement("textarea");
  textfield.id = "html_code";
  textfield.rows = "25";
  textfield.cols = "120";
  textfield.placeholder = "HTML";
  textfield.onchange = update;
  document.body.insertBefore(textfield, document.getElementById("space"));
  refresh_txtareas();
}

function hide_html() {
  var textfield = document.getElementById("html_code");
  document.body.removeChild(textfield);
}

function show_css() {
  var textfield = document.createElement("textarea");
  textfield.id = "css_code";
  textfield.rows = "25";
  textfield.cols = "120";
  textfield.placeholder = "CSS";
  textfield.onchange = update;
  document.body.insertBefore(textfield, document.getElementById("space"));
  refresh_txtareas();
}

function hide_css() {
  var textfield = document.getElementById("css_code");
  document.body.removeChild(textfield);
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
  html_area.value = html_code.replace(/\n\s*\n/g, "\n");
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

function autosave() {
  var html = document.getElementById("iframe").contentWindow.document.body
    .outerHTML;
  var css = document
    .getElementById("iframe")
    .contentWindow.document.getElementById("style").innerHTML;
  localStorage.setItem("html-code", html.replace("><", ">\n<"));
  localStorage.setItem("css-code", css);
}

function clear_page() {
  localStorage.removeItem("html-code");
  localStorage.removeItem("css-code");
  location.reload();
}

function download() {
  var html_before =
    `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>` +
    document.getElementById("title").value +
    `</title>
      <link rel="stylesheet" href="style.css" />
    </head>\n`;
  var html_after = `\n</html>`;
  var html_code = localStorage.getItem("html-code").replace(/\n\s*\n/g, "\n");
  var css_code = localStorage.getItem("css-code");
  if (html_code != null)
    download_text("html.html", html_before + html_code + html_after);
  if (css_code != null) download_text("style.css", css_code);
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

function upload() {
  open("popups/upload.html", "Upload", "height=400,width=400,resizable=no");
}

function font_list() {
  open("popups/fonts.html", "Fonts", "height=400,width=400,resizable=no");
}

function new_element() {
  open("popups/new.html", "New", "height=400,width=400,resizable=no");
}

var select;

function set_select() {
  type = document
    .getElementById("move_elem")
    .options[document.getElementById("move_elem").selectedIndex].text.split(
      ":"
    )[0];
  if (
    type == "p" ||
    type == "h1" ||
    type == "h2" ||
    type == "h3" ||
    type == "h4" ||
    type == "h5" ||
    type == "h6" ||
    type == "a" ||
    type == "li" ||
    type == "button" ||
    type == "other"
  ) {
    document.getElementById("edit_sele").hidden = false;
  } else {
    document.getElementById("edit_sele").hidden = true;
  }
  num = document.getElementById("move_elem").value;
  select = document
    .getElementById("iframe")
    .contentWindow.document.getElementsByTagName(type)[num - 1];
}

function move_up() {
  elem = select.outerHTML;
  append_before = select.previousElementSibling.outerHTML;
  o_html = localStorage.getItem("html-code").replace(/\n\s*\n/g, "\n");
  localStorage.setItem(
    "html-code",
    o_html.replace(elem, "").replace(append_before, elem + "\n" + append_before)
  );
  update();
}

function move_down() {
  elem = select.outerHTML;
  append_after = select.nextElementSibling.outerHTML;
  o_html = localStorage.getItem("html-code").replace(/\n\s*\n/g, "\n");
  localStorage.setItem(
    "html-code",
    o_html.replace(elem, "").replace(append_after, append_after + "\n" + elem)
  );
  update();
}

function delete_selet() {
  elem = select.outerHTML;
  localStorage.setItem("html-code", o_html.replace(elem, ""));
}

function edit_select() {
  type = document
    .getElementById("move_elem")
    .options[document.getElementById("move_elem").selectedIndex].text.split(
      ":"
    )[0];
  console.log(type);
  if (
    type == "p" ||
    type == "h1" ||
    type == "h2" ||
    type == "h3" ||
    type == "h4" ||
    type == "h5" ||
    type == "h6" ||
    type == "a" ||
    type == "li" ||
    type == "button" ||
    type == "other"
  ) {
    localStorage.setItem("select", select.outerHTML);
    open("popups/edit.html", "edit", "height=400,width=400,resizable=no");
  }
}
