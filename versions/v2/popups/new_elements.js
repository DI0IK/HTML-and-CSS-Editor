var input_id;
var input_class;
var text_id;
var text_class;
var btn_apply;
var type_list;
var type_other;

function onload() {
  input_id = document.getElementById("input_id");
  input_class = document.getElementById("input_class");
  text_id = document.getElementById("text_id");
  text_class = document.getElementById("text_class");
  btn_apply = document.getElementById("btn_apply");
  type_list = document.getElementById("type");
  type_other = document.getElementById("type_other");
  type_change();
}

function type_change() {
  if (type_list.value == "-") {
    text_id.hidden = true;
    text_class.hidden = true;
    type_other.hidden = true;
    console.log(type + " disabled");
  }
  if (type_list.value == "p") {
    text_id.hidden = false;
    text_class.hidden = false;
    type_other.hidden = true;
    console.log(type + " enabled");
  }
  if (type_list.value == "h1") {
    text_id.hidden = false;
    text_class.hidden = false;
    type_other.hidden = true;
    console.log(type + " enabled");
  }
  if (type_list.value == "h2") {
    text_id.hidden = false;
    text_class.hidden = false;
    type_other.hidden = true;
    console.log(type + " enabled");
  }
  if (type_list.value == "h3") {
    text_id.hidden = false;
    text_class.hidden = false;
    type_other.hidden = true;
    console.log(type + " enabled");
  }
  if (type_list.value == "h4") {
    text_id.hidden = false;
    text_class.hidden = false;
    type_other.hidden = true;
    console.log(type + " enabled");
  }
  if (type_list.value == "h5") {
    text_id.hidden = false;
    text_class.hidden = false;
    type_other.hidden = true;
    console.log(type + " enabled");
  }
  if (type_list.value == "h6") {
    text_id.hidden = false;
    text_class.hidden = false;
    type_other.hidden = true;
    console.log(type + " enabled");
  }
  if (type_list.value == "ul") {
    text_id.hidden = false;
    text_class.hidden = false;
    type_other.hidden = true;
    console.log(type + " enabled");
  }
  if (type_list.value == "ol") {
    text_id.hidden = false;
    text_class.hidden = false;
    type_other.hidden = true;
    console.log(type + " enabled");
  }
  if (type_list.value == "li") {
    text_id.hidden = false;
    text_class.hidden = false;
    type_other.hidden = true;
    console.log(type + " enabled");
  }
  if (type_list.value == "a") {
    text_id.hidden = false;
    text_class.hidden = false;
    type_other.hidden = true;
    console.log(type + " enabled");
  }
  if (type_list.value == "img") {
    text_id.hidden = false;
    text_class.hidden = false;
    type_other.hidden = true;
    console.log(type + " enabled");
  }
  if (type_list.value == "iframe") {
    text_id.hidden = false;
    text_class.hidden = false;
    type_other.hidden = true;
    console.log(type + " enabled");
  }
  if (type_list.value == "button") {
    text_id.hidden = false;
    text_class.hidden = false;
    type_other.hidden = true;
    console.log(type + " enabled");
  }
  if (type_list.value == "select") {
    text_id.hidden = false;
    text_class.hidden = false;
    type_other.hidden = true;
    console.log(type + " enabled");
  }
  if (type_list.value == "option") {
    text_id.hidden = false;
    text_class.hidden = false;
    type_other.hidden = true;
    console.log(type + " enabled");
  }
  if (type_list.value == "textarea") {
    text_id.hidden = false;
    text_class.hidden = false;
    type_other.hidden = true;
    console.log(type + " enabled");
  }
  if (type_list.value == "other") {
    text_id.hidden = false;
    text_class.hidden = false;
    type_other.hidden = false;
    console.log(type + " enabled");
  }
}
