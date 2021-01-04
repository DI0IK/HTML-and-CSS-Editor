var input_id;
var input_class;
var input_text;
var input_src;
var input_href;
var text_id;
var text_class;
var text_text;
var text_src;
var text_href;
var btn_apply;
var type_list;
var type_other;

function onload() {
  input_id = document.getElementById("input_id");
  input_class = document.getElementById("input_class");
  input_text = document.getElementById("input_text");
  input_src = document.getElementById("input_src");
  input_href = document.getElementById("input_href");
  text_id = document.getElementById("text_id");
  text_class = document.getElementById("text_class");
  text_text = document.getElementById("text_text");
  text_src = document.getElementById("text_src");
  text_href = document.getElementById("text_href");
  btn_apply = document.getElementById("btn_apply");
  type_list = document.getElementById("type");
  type_other = document.getElementById("type_other");
  atr = document.getElementById("input_atr");
  innerHTML = document.getElementById("innerHTML");
  oth = document.getElementById("other");
  type_change();
}

function type_change() {
  if (type_list.value == "-") {
    text_id.hidden = true;
    text_class.hidden = true;
    text_text.hidden = true;
    text_src.hidden = true;
    text_href.hidden = true;
    type_other.hidden = true;
  }
  if (type_list.value == "p") {
    text_id.hidden = false;
    text_class.hidden = false;
    text_text.hidden = false;
    text_src.hidden = true;
    text_href.hidden = true;
    type_other.hidden = true;
  }
  if (
    type_list.value == "h1" ||
    type_list.value == "h2" ||
    type_list.value == "h3" ||
    type_list.value == "h4" ||
    type_list.value == "h5" ||
    type_list.value == "h6"
  ) {
    text_id.hidden = false;
    text_class.hidden = false;
    text_text.hidden = false;
    text_src.hidden = true;
    text_href.hidden = true;
    type_other.hidden = true;
  }
  if (type_list.value == "li") {
    text_id.hidden = false;
    text_class.hidden = false;
    text_text.hidden = false;
    text_src.hidden = true;
    text_href.hidden = true;
    type_other.hidden = true;
  }
  if (type_list.value == "a") {
    text_id.hidden = false;
    text_class.hidden = false;
    text_text.hidden = false;
    text_src.hidden = true;
    text_href.hidden = false;
    type_other.hidden = true;
  }
  if (type_list.value == "img") {
    text_id.hidden = false;
    text_class.hidden = false;
    text_text.hidden = true;
    text_src.hidden = false;
    text_href.hidden = true;
    type_other.hidden = true;
  }
  if (type_list.value == "iframe") {
    text_id.hidden = false;
    text_class.hidden = false;
    text_text.hidden = true;
    text_src.hidden = false;
    text_href.hidden = true;
    type_other.hidden = true;
  }
  if (type_list.value == "button") {
    text_id.hidden = false;
    text_class.hidden = false;
    text_text.hidden = false;
    text_src.hidden = true;
    text_href.hidden = true;
    type_other.hidden = true;
  }
  if (type_list.value == "other") {
    text_id.hidden = true;
    text_class.hidden = true;
    text_text.hidden = true;
    text_src.hidden = true;
    text_href.hidden = true;
    type_other.hidden = false;
    oth.hidden = false;
  } else {
    oth.hidden = true;
  }
  change_text();
}

function apply() {
  var open_tag = "";
  var value = "";
  var close_tag = "";

  if (type.value == "other") {
    other();
    return;
  }

  open_tag += "<" + type.value;
  if (input_id.value != "") open_tag += ` id= "` + input_id.value + `"`;
  if (input_class.value != "")
    open_tag += ` class= "` + input_class.value + `"`;
  if (input_src.value != "") open_tag += ` src= "` + input_src.value + `"`;
  if (input_href.value != "") open_tag += ` href= "` + input_href.value + `"`;
  open_tag += ">";

  if (input_text.value != "") value += input_text.value;

  if (type.value != "img") {
    close_tag += "</" + type.value;
    close_tag += ">";
  }

  var o_html = localStorage.getItem("html-code");
  localStorage.setItem(
    "html-code",
    (
      o_html.split("</body>")[0] +
      "\n" +
      open_tag +
      value +
      close_tag +
      "\n</body>"
    ).replace(/\n\s*\n/g, "\n")
  );
  window.close();
}

function other() {
  var o_html = localStorage.getItem("html-code");
  localStorage.setItem(
    "html-code",
    (
      o_html.split("</body>")[0] +
      "\n<" +
      type_other.value +
      " " +
      input_atr.innerHTML +
      ">" +
      innerHTML.value +
      "</" +
      type_other.value +
      ">" +
      "\n</body>"
    ).replace(/\n\s*\n/g, "\n")
  );
  window.close();
}

function change_text() {
  if (input_text.value != "" && text_text.hidden == false) {
    document.getElementById("btn_apply").disabled = false;
  }
  if (input_text.value == "" && text_text.hidden == false) {
    document.getElementById("btn_apply").disabled = true;
  }
  if (input_src.value != "" && text_src.hidden == false) {
    document.getElementById("btn_apply").disabled = false;
  }
  if (input_src.value == "" && text_src.hidden == false) {
    document.getElementById("btn_apply").disabled = true;
  }
  if (
    input_href.value != "" &&
    input_text.value != "" &&
    text_href.hidden == false &&
    text_text.hidden == false &&
    input_href.value.startsWith("https://") == true
  ) {
    document.getElementById("btn_apply").disabled = false;
  }
  if (
    (input_href.value == "" ||
      input_text.value == "" ||
      input_href.value.startsWith("https://") == false) &&
    text_href.hidden == false &&
    text_text.hidden == false
  ) {
    document.getElementById("btn_apply").disabled = true;
  }
  if (type_other != "" && oth.hidden == false) {
    document.getElementById("btn_apply").disabled = false;
  }
  if (type_other == "" && oth.hidden == false) {
    document.getElementById("btn_apply").disabled = true;
  }
}
