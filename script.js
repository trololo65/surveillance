let bl = document.getElementById('bl');
let zr = document.getElementById('zr');
let wr = document.getElementById('wr');
let but = document.getElementById('but');
let tyk = true;
but.onclick = function () {
	if (tyk) {
		tyk = false;
		wr.style.borderRadius = 0;
		wr.style.border = 0;
		zr.style.left = 'calc(50% - 15px)';
		zr.style.top = 'calc(50% - 15px)';
	} else {
		tyk = true;
		wr.style.borderRadius = '50%';
		wr.style.border = '1px dashed #666';
		zr.style.left = 'calc(50% - 15px)';
		zr.style.top = 'calc(50% - 15px)';
	}
}
wr.onmousemove = function () {
	let blTop = bl.offsetTop;
	let blLeft = bl.offsetLeft;
	// console.log(event.pageX / ((wr.offsetWidth / 2) / (bl.offsetWidth / 2)));
	let posXZr = event.pageX / ((wr.offsetWidth / 2) / (bl.offsetWidth / 2));
	// console.log(event.pageY / ((wr.offsetHeight / 2) / (bl.offsetHeight / 2)));
	let posYZr = event.pageY / ((wr.offsetHeight / 2) / (bl.offsetHeight / 2));

	let posXZrCenter = event.pageX / ((wr.offsetWidth / 2) / (zr.offsetWidth / 2));
	let posYZrCenter = event.pageY / ((wr.offsetHeight / 2) / (zr.offsetHeight / 2));

	let a = (wr.offsetWidth - event.pageX) / (wr.offsetWidth / zr.offsetWidth) - (zr.offsetWidth / 2);
	let b = (wr.offsetHeight - event.pageY) / (wr.offsetHeight / zr.offsetHeight) - (zr.offsetHeight / 2);

	if (tyk) {
		zr.style.left = posXZr - (zr.offsetWidth / 2) + '%';
		zr.style.top = posYZr - (zr.offsetHeight / 2) + '%';	
	} else {
		zr.style.left = posXZr - posXZrCenter + a + '%';
		zr.style.top = posYZr - posYZrCenter + b + '%';	
	}
}