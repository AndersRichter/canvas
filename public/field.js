'use strict';

let ctx = document.querySelector("canvas").getContext('2d');

// import Cell from "./cell.js";

export default class Field {

	constructor () {
		let imgUrl = [];
		imgUrl.push("cube.png");
		imgUrl.push("whitch110-160.png");
		imgUrl.push("jack110-160.png");

		let imgs = [];
		let ok = 0;

		for(let i = 0; i < imgUrl.length; i++) {
			let img = new Image();
			imgs.push(img);
			img.onload = function () {
				ok++;
				if (ok >= imgUrl.length){
					alert("ok");
					ctx.drawImage(imgs[0], 0, 0);
					ctx.drawImage(imgs[1], 100, 100);
					ctx.drawImage(imgs[2], 200, 200);
				}
			};
			img.src = imgUrl[i];
		}
		this.mass = [];
		this.mass = imgs;
	}

	drawField () {
		ctx.drawImage(this.mass[0], 500, 500);
		ctx.drawImage(this.mass[1], 600, 600);
		ctx.drawImage(this.mass[2], 700, 700);
	}
}

// let img = new Image();
// img.src = 'cube.png';
//
// img.onload = function () {
// 	for (let i = 0; i < count; i++) {
// 		ctx.drawImage(img, z[i].x, z[i].y);
// 	}
// };

// let v = 0;
// for (let i = 0; i < count; i++) {
// 	z[i] = new Cell();
// 	z[i].setId(i);
// 	z[i].setCoordinates(v, v);
// 	v += 50;
// }

// let z = [];
