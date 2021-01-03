var input_id;
var input_class;
var input_text;
var text_id;
var text_class;
var text_text;
var btn_apply;
var type_list;
var type_other;

function onload() {
  input_id = document.getElementById("input_id");
  input_class = document.getElementById("input_class");
  input_text = document.getElementById("input_text");
  text_id = document.getElementById("text_id");
  text_class = document.getElementById("text_class");
  text_text = document.getElementById("text_text");
  btn_apply = document.getElementById("btn_apply");
  type_list = document.getElementById("type");
  type_other = document.getElementById("type_other");
  type_change();
}

function type_change() {
  if (type_list.value == "-") {
    text_id.hidden = true;
    text_class.hidden = true;
    text_text.hidden = true;
    type_other.hidden = true;
  }
  if (type_list.value == "p") {
    text_id.hidden = false;
    text_class.hidden = false;
    text_text.hidden = false;
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
    type_other.hidden = true;
  }
  if (type_list.value == "ul") {
    text_id.hidden = false;
    text_class.hidden = false;
    text_text.hidden = true;
    type_other.hidden = true;
  }
  if (type_list.value == "ol") {
    text_id.hidden = false;
    text_class.hidden = false;
    text_text.hidden = true;
    type_other.hidden = true;
  }
  if (type_list.value == "li") {
    text_id.hidden = false;
    text_class.hidden = false;
    text_text.hidden = false;
    type_other.hidden = true;
  }
  if (type_list.value == "a") {
    text_id.hidden = false;
    text_class.hidden = false;
    text_text.hidden = true;
    type_other.hidden = true;
  }
  if (type_list.value == "img") {
    text_id.hidden = false;
    text_class.hidden = false;
    text_text.hidden = true;
    type_other.hidden = true;
  }
  if (type_list.value == "iframe") {
    text_id.hidden = false;
    text_class.hidden = false;
    text_text.hidden = true;
    type_other.hidden = true;
  }
  if (type_list.value == "button") {
    text_id.hidden = false;
    text_class.hidden = false;
    text_text.hidden = false;
    type_other.hidden = true;
  }
  if (type_list.value == "select") {
    text_id.hidden = false;
    text_class.hidden = false;
    text_text.hidden = true;
    type_other.hidden = true;
  }
  if (type_list.value == "option") {
    text_id.hidden = false;
    text_class.hidden = false;
    text_text.hidden = false;
    type_other.hidden = true;
  }
  if (type_list.value == "textarea") {
    text_id.hidden = false;
    text_class.hidden = false;
    text_text.hidden = true;
    type_other.hidden = true;
  }
  if (type_list.value == "other") {
    text_id.hidden = false;
    text_class.hidden = false;
    text_text.hidden = true;
    type_other.hidden = false;
  }
}

function apply() {
  var o_html = localStorage.getItem("html-code");
  localStorage.setItem(
    "html-code",
    o_html.split("</body>")[0] +
      "<" +
      type.value +
      ">" +
      input_text.value +
      "</" +
      type.value +
      ">" +
      "\n</body>"
  );
}
