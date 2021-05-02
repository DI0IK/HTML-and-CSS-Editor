setInterval(() => {
	for (var child in document.querySelectorAll('body *')) {
		if (!isNaN(child)) {
			document.querySelectorAll('body *')[child].ID = Number(child) + 1;
			document.querySelectorAll('body *')[child].draggable = true;
			document.querySelectorAll('body *')[child].ondragend = (event) => {
				let elem = document.elementFromPoint(event.pageX, event.pageY);
				if (elem.nodeName == 'HTML' || elem.nodeName == 'BODY') return;
				elem.parentElement.insertBefore(event.srcElement, elem.nextSibling);
			};
			if (
				document.querySelectorAll('body *')[child].clientHeight == 0 ||
				document.querySelectorAll('body *')[child].style.height == '10px'
			)
				document.querySelectorAll('body *')[child].style.height = '10px';
			else document.querySelectorAll('body *')[child].style.height = '';
		}
	}
}, 100);
