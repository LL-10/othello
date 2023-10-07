new HTMLDocument(body => {
	block();
	const box = body.append('div', ['style*']);
	new Style({
		flex: 'auto',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
	}).apply(box);
	const board = box.append('div', ['style*']);
	new Style({
		display: 'grid',
		grid: 'repeat(8, 11%) / repeat(8, 11%)',
		placeItems: 'stretch',
		placeContent: 'space-evenly',
	}).apply(board);
}).load();

function block() {
	document.body.oncontextmenu = () => false;
	document.body.onselectstart = () => false;
	document.body.ondragstart = () => false;
};
