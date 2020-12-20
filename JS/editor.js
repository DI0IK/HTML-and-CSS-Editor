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
}

function setStyle() {
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
function addElement() {
  var iframe = document.getElementById("iframe").contentWindow.document;
  var option = document.getElementById("n_type").value;
  var tag_type = document.getElementById("n_class-id").value;
  var tag = document.getElementById("n_class-id-name").value;
  var name = document.getElementById("n_name").value;
  var element = iframe.createElement(option);
  element.innerHTML = name;
  if (tag_type == "Class") {
    element.classList.add(tag);
  } else if (tag_type == "ID") {
    element.id = tag;
  }
  iframe.body.appendChild(element);
}
