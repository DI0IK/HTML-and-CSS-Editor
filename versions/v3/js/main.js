let iframe = document.getElementById('editor');
//Dropdown Menu
let DropdownMenu = document.getElementById('dropDown');
let mousePos = {
	x: 0,
	y: 0,
};
iframe.contentWindow.onmousemove = (e) => {
	mousePos.x = e.pageX;
	mousePos.y = e.pageY;
};
iframe.contentWindow.oncontextmenu = () => {
	let Elem = iframe.contentWindow.document.elementFromPoint(mousePos.x, mousePos.y);
	openDropdownMenuFor(Elem);
	return false;
};

iframe.contentWindow.onclick = () => {
	hideDropdownMenu();
};

let openDropdownMenuFor = (elem) => {
	hideDropdownMenu();
	if (elem.nodeName == 'BODY' || elem.nodeName == 'HTML') {
		hideDropdownMenu();
		return;
	}

	console.log(elem);

	elem.style['border-style'] = 'solid';
	elem.style['border-width'] = '0.1em';
	elem.style['border-color'] = 'rgb(100, 100, 100)';
	elem.parentElement.style['border-style'] = 'solid';
	elem.parentElement.style['border-width'] = '0.1em';
	elem.parentElement.style['border-color'] = 'rgb(87, 255, 81)';

	DropdownMenu.style.top = mousePos.y + 'px';
	DropdownMenu.style.left = mousePos.x + 30 + 'px';
	DropdownMenu.style.visibility = 'visible';
	DropdownMenu.style.height = 'auto';

	document.getElementById('deleteElem').onclick = () => {
		if (!elem.ID) return;
		hideDropdownMenu(elem);
		delElem(elem.ID);
	};
	document.getElementById('addElem').onclick = () => {
		document.getElementById('newElemSettings').hidden = false;
		hideDropdownMenu(elem);
	};
	document.getElementById('posElem').onclick = () => {
		console.log(elem);
		hideDropdownMenu(elem);
	};
	document.getElementById('propsElem').onclick = () => {
		console.log(elem);
		hideDropdownMenu(elem);
	};
};

let hideDropdownMenu = (elem) => {
	DropdownMenu.style.visibility = 'hidden';
	DropdownMenu.style.height = '0';
	for (var child in iframe.contentWindow.document.querySelectorAll('body, body *')) {
		if (!isNaN(child)) {
			iframe.contentWindow.document
				.querySelectorAll('body, body *')
				[child].removeAttribute('style');
		}
	}
};
hideDropdownMenu();

let toggleCode = () => {
	let div = document.getElementById('code');
	if (div.hidden) div.hidden = false;
	else div.hidden = true;
};
setInterval(() => {
	iframe.style.width = document.getElementById('widthEditor').value + 'px';
	iframe.style.height = document.getElementById('heightEditor').value + 'px';
	updateCreateButton();
}, 100);

let createElementBySettings = () => {
	let type = document.getElementById('newElemType').value;
	let textInput = document.getElementById('newElemInnerText');
	let srcInput = document.getElementById('newElemSrcUrl');
	let placeholderInput = document.getElementById('newElemPlaceholderText');
	let elem = document.createElement(type);
	if (textInput.value != '') elem.innerText = textInput.value;
	if (srcInput.value != '') elem.src = srcInput.value;
	if (placeholderInput.value != '') elem.placeholder = placeholderInput.value;
	addElem(elem);
	document.getElementById('newElemSettings').hidden = true;
};

let updateElemSettings = () => {
	let type = document.getElementById('newElemType').value;
	let textInput = document.getElementById('newElemInnerText');
	let srcInput = document.getElementById('newElemSrcUrl');
	let placeholderInput = document.getElementById('newElemPlaceholderText');

	textInput.disabled = true;
	srcInput.disabled = true;
	placeholderInput.disabled = true;

	textInput.value = '';
	srcInput.value = '';
	placeholderInput.value = '';

	switch (type) {
		case 'p':
		case 'h1':
		case 'h2':
		case 'h3':
		case 'h4':
		case 'h5':
		case 'h6':
		case 'ul':
		case 'ol':
		case 'div':
		case 'section':
			textInput.disabled = false;
			break;
		case 'picture':
			srcInput.disabled = false;
			break;
		case 'button':
			textInput.disabled = false;
			break;
		case 'input':
			placeholderInput.disabled = false;
			break;
		case 'iframe':
			srcInput.disabled = false;
			break;
	}
};

let updateCreateButton = () => {
	let textInput = document.getElementById('newElemInnerText');
	let srcInput = document.getElementById('newElemSrcUrl');
	let placeholderInput = document.getElementById('newElemPlaceholderText');
	if (textInput.value != '' || srcInput.value != '' || placeholderInput.value != '')
		document.getElementById('createElementBySettings').disabled = false;
	else document.getElementById('createElementBySettings').disabled = true;
};
