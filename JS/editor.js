//Style functions
function getsetCSS(css) {
  out = "";
  for (prop in css) {
    if (!isNumeric(prop) && css[prop] != "") {
      out += prop + ": " + css[prop] + "\n";
    }
  }
  return out
    .split("parentRule")[0]
    .split("cssText")[0]
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase();
}

function update_s_css() {
  var cssField = document.getElementById("s_css");
  var name = document.getElementById("s_class-id-name").value;
  var select_in = document.getElementById("s_class-id");
  var selected = select_in.value;
  if (selected == "Class") {
    var element = document
      .getElementById("iframe")
      .contentWindow.document.getElementsByClassName(name);
    try {
      cssField.value = getsetCSS(element[0].style);
    } catch (error) {
      cssField.value = "";
    }
  } else if (selected == "ID") {
    var element = document
      .getElementById("iframe")
      .contentWindow.document.getElementById(name);
    try {
      cssField.value = getsetCSS(element.style);
    } catch (error) {
      cssField.value = "";
    }
  } else if (selected == "Element") {
    var element = document
      .getElementById("iframe")
      .contentWindow.document.getElementsByTagName(name);
    try {
      cssField.value = getsetCSS(element[0].style);
    } catch (error) {
      cssField.value = "";
    }
  }
  showNameText();
}

function setStyle() {
  updateName();
  var name = document.getElementById("s_class-id-name").value;
  var select_in = document.getElementById("s_class-id");
  var selected = select_in.value;
  var css_text = document.getElementById("s_css").value;
  if (selected == "Class") {
    var elements = document
      .getElementById("iframe")
      .contentWindow.document.getElementsByClassName(name);
    for (i = 0; i < elements.length; i++) {
      elements[i].style.cssText = css_text;
    }
  } else if (selected == "ID") {
    var element = document
      .getElementById("iframe")
      .contentWindow.document.getElementById(name);
    element.style.cssText = css_text;
  } else if (selected == "Element") {
    var elements = document
      .getElementById("iframe")
      .contentWindow.document.getElementsByTagName(name);
    for (i = 0; i < elements.length; i++) {
      elements[i].style.cssText = css_text;
    }
  }
}

function isNumeric(str) {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

//Element functions
function addElement(pos) {
  var iframe = document.getElementById("iframe").contentWindow.document;
  var option = document.getElementById("n_type").value;
  var id = document.getElementById("n_id-name").value;
  var src = document.getElementById("n_img-url").value;
  var class_name = document.getElementById("n_class-name").value;
  var name = document.getElementById("n_name").value;
  var element = iframe.createElement(option);
  if (option == "br") {
    if (pos == "1")
      iframe.body.insertBefore(
        element,
        iframe.getElementById(document.getElementById("n_before_id").value)
      );
    if (pos == "3")
      iframe.body.insertBefore(
        element,
        iframe.getElementsByClassName(
          document.getElementById("n_before_class").value
        )[document.getElementById("n_before_class_num").value - 1]
      );
    if (pos == "2") iframe.body.appendChild(element);
    return;
  }
  if (class_name != "") {
    element.classList.add(class_name);
  } else {
    return;
  }
  if (id != "") {
    element.id = id;
  }
  if (option == "img") {
    if (src != "") {
      element.src = src;
    } else {
      console.log(src + "2");
      return;
    }
  } else if (name == "") {
    return;
  }
  element.innerHTML = name;
  if (pos == "1")
    iframe.body.insertBefore(
      element,
      iframe.getElementById(document.getElementById("n_before_id").value)
    );
  if (pos == "3")
    iframe.body.insertBefore(
      element,
      iframe.getElementsByClassName(
        document.getElementById("n_before_class").value
      )[document.getElementById("n_before_class_num").value + 1]
    );
  if (pos == "2") iframe.body.appendChild(element);
  add_list(id, class_name, option);
}

// Name function
function showNameText() {
  var textfield = document.getElementById("text_name");
  var iframe = document.getElementById("iframe").contentWindow.document;
  var name = document.getElementById("s_class-id-name").value;
  var select_in = document.getElementById("s_class-id");
  var selected = select_in.value;
  if (selected == "Class") {
    var element = iframe.getElementsByClassName(name);
    textfield.value = element[0].innerHTML;
  } else if (selected == "ID") {
    var element = iframe.getElementById(name);
    textfield.value = element.innerHTML;
  } else if (selected == "Element") {
    var element = iframe.getElementsByTagName(name);
    textfield.value = element[0].innerHTML;
  }
}

function updateName() {
  var textfield = document.getElementById("text_name");
  var iframe = document.getElementById("iframe").contentWindow.document;
  var name = document.getElementById("s_class-id-name").value;
  var select_in = document.getElementById("s_class-id");
  var selected = select_in.value;
  if (name == "") {
    return;
  }
  if (selected == "Class") {
    var element = iframe.getElementsByClassName(name);
    element[0].innerHTML = textfield.value;
  } else if (selected == "ID") {
    var element = iframe.getElementById(name);
    element.innerHTML = textfield.value;
  } else if (selected == "Element") {
    var element = iframe.getElementsByTagName(name);
    element[0].innerHTML = textfield.value;
  }
}

function select_list() {
  var list = document.getElementById("elements_list");
  var selected = list.value;
  var set_1 = document.getElementById("s_class-id");
  var set_2 = document.getElementById("s_class-id-name");
  set_2.value = sessionStorage.getItem(list.value);
  if (sessionStorage.getItem(list.value).startsWith("ID:")) {
    var id = sessionStorage.getItem(list.value).split("ID:")[1];
    set_2.value = id;
  } else if (sessionStorage.getItem(list.value).startsWith("CLASS:")) {
    var class_name = sessionStorage.getItem(list.value).split("CLASS:")[1];
    set_2.value = class_name;
  }
}

function add_list(id, class_name, type) {
  var list = document.getElementById("elements_list");
  var num = list.length + 1;
  var element = document.createElement("option");
  element.innerHTML = type + ":" + num;
  element.value = num;
  if (id != "") {
    sessionStorage.setItem(num, "ID:" + id);
    list.innerHTML.appendChild(element);
  } else if (class_name != "") {
    sessionStorage.setItem(num, "CLASS:" + class_name);
    list.appendChild(element);
  } else {
    console.log("none");
  }
}
