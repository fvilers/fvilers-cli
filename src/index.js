"use strict";

const path = require("path");
const meow = require("meow");
const termImg = require("term-img");
const terminalImage = require("terminal-image");
const importJsx = require("import-jsx");
const { h, render } = require("ink");
const ui = importJsx("./ui");

meow(`
	Usage
	  $ fvilers
`);

const source = path.join(__dirname, "avatar.png");
const fallback = async () => {
  const image = await terminalImage.file(source);
  console.log(image);
};

termImg(source, { fallback });
render(h(ui));
