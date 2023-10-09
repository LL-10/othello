new HTMLDocument(body => {
	block();
	prepare();
	start();
	function prepare() {
		new Style({
			width: '100vw',
			height: '100vh',
			display: 'flex',
			alignItems: 'stretch',
			justifyContent: 'stretch',
			overflow: 'hidden',
			background: 'black',
			fontFamily: 'sans-serif',
		}).apply(document.documentElement);
		new Style({
			margin: '0',
			padding: '4px',
			flex: '1',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'stretch',
			overflow: 'hidden',
			background: 'inherit',
		}).apply(document.body);
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
			background: '#efe',
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
				cursor: 'default',
				textAlign: 'center',
				background: '#182',
			}).apply(squares[i][j]);
		}
		const fonts = {
			'-1': '',
			0: '\u26ab',
			1: '\u26aa',
		};
		box.resize = function () {
			const rect = box.HTMLObject.getBoundingClientRect();
			const length = Math.min(rect.width, rect.height);
			new Style({
				width: length + 'px',
				height: length + 'px',
			}).apply(board);
			squares.map((line, i) => {
				line.map((square, j) => {
					new Style({
						fontSize: length * 11 / 125 - 4 + 'px',
					}).apply(squares[i][j]);
				});
			});
		};
		box.resize();
		window.on('resize', box.resize);
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
