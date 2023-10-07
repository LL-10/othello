new HTMLDocument(body => {
	body.write('hi');
}).load();

function block() {
	document.body.oncontextmenu = () => false;
	document.body.onselectstart = () => false;
	document.body.ondragstart = () => false;
};