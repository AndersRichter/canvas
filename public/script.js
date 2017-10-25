'use strict';

import Field from "./field.js";

// let ctx = document.querySelector("canvas").getContext('2d');

let z = new Field();
z.drawField();

//
// let whitch = new Image();
// whitch.src = 'whitch110-160.png';
//
// let jack = new Image();
// jack.src = 'jack110-160.png';

// const side_of_cube = 90;
// const new_cube_x = 47;
// const new_cube_y = 47;
//
// const one_px = 55;
// const indent = 3.5 * one_px;
// const size_of_desk = 10 * one_px;
//
// let count = 8;
//
// let start = indent + (size_of_desk - count * side_of_cube)/2;
//
//
// function loadImages(sources, callback) {
// 	let images = {};
// 	let loadedImages = 0;
// 	let numImages = 0;
// 	// get num of sources
// 	for(let src in sources) {
// 		numImages++;
// 	}
// 	for(let src in sources) {
// 		images[src] = new Image();
// 		images[src].onload = function() {
// 			if(++loadedImages >= numImages) {
// 				callback(images);
// 			}
// 		};
// 		images[src].src = sources[src];
// 	}
// }
//
// let sources = {
// 	img: 'cube.png',
// 	whitch: 'whitch110-160.png',
// 	jack: 'jack110-160.png'
// };
//
// loadImages(sources, function(images) {
// 	let xx = 850 / 2 - new_cube_x;
// 	let yy = start;
// 	let dif = 0;
// 	for (let i = 0; i < count; i++) {
// 		let x = xx + dif;
// 		let y = yy + dif;
// 		for (let j = 0; j < count; j++) {
// 			ctx.drawImage(images.img, x, y);
// 			x -= new_cube_x;
// 			y += new_cube_y;
// 		}
// 		dif += new_cube_x;
// 	}
//
// 	ctx.drawImage(images.jack, 365, 390, 77, 109);
// 	ctx.drawImage(images.jack, 365+new_cube_x, 390+new_cube_x, 77, 109);
// 	ctx.drawImage(images.jack, 365-new_cube_x, 390+new_cube_x, 77, 109);
//
// 	ctx.drawImage(images.whitch, 385+new_cube_x, 390+3*new_cube_x, 77, 109);
// 	ctx.drawImage(images.whitch, 385, 390+4*new_cube_x, 77, 109);
// });





