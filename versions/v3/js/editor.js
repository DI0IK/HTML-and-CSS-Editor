let addElem = (elem) => {
	iframe.contentWindow.document.body.appendChild(elem);
};

let delElem = (id) => {
	for (var element in iframe.contentWindow.document.querySelectorAll('body *')) {
		if (iframe.contentWindow.document.querySelectorAll('body *')[element]) {
			if (iframe.contentWindow.document.querySelectorAll('body *')[element].ID == id) {
				let elm = iframe.contentWindow.document.querySelectorAll('body *')[element];
				elm.parentElement.removeChild(elm);
			}
		}
	}
};
