new HTMLDocument(body => {
	block();
	prepare();
	start();
	function prepare() {
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
			background: '#182f',
		}).apply(board);
		const squares = [];
		for (let [i, j] = [0, 0]; i < 8; (() => {
			j++;
			if (j === 8) {
				j = 0;
				i++;
			}
		})()) {
			squares[i] ? () => false : (() => {
				squares[i] = [];
			})();
			squares[i][j] = board.append('div', ['style*']);
			squares[i][j].value = -1;
			squares[i][j].set = function (value) {
				this.value = value;
				this.clear().write(fonts[value]);
			};
			new Style({
				gridArea: (i + 1) + '/' + (j + 1),
				background: document.palette.light,
				cursor: 'default',
				textAlign: 'center',
			}).apply(squares[i][j]);
		}
		const fonts = {
			'-1': '',
			0: '\u26ab',
			1: '\u26aa',
		};
	}
	function start() {
	
	}
	function next() {}
	function pass() {}
	function end() {}
	
}).load();

function block(bool) {
	document.body.oncontextmenu = () => !bool;
	document.body.onselectstart = () => !bool;
	document.body.ondragstart = () => !bool;
}
