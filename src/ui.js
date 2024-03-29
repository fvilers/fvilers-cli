"use strict";

const { h, Text } = require("ink");
const SelectInput = require("ink-select-input");
const opn = require("opn");

const open = (url) => opn(url, { wait: false });
const handleSelect = (item) => {
  if (item.url) {
    open(item.url);
  }

  if (item.action) {
    item.action();
  }
};
const items = [
  {
    label: "My company's website",
    url: "https://www.dev-one.com",
  },
  {
    label: "Mastodon",
    url: "https://mastodon.social/@fvilers",
  },
  {
    label: "Twitter",
    url: "https://twitter.com/fvilers",
  },
  {
    label: "GitHub",
    url: "https://github.com/fvilers",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/fvilers",
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/fvilers",
  },
  {
    label: "Quit",
    action() {
      process.exit();
    },
  },
];

module.exports = () => (
  <div>
    <br />
    <div>
      <Text>Hi! I'm Fabian.</Text>
    </div>
    <div>
      <Text>
        Entrepreneur, Software Craftsman, Amateur Photographer, Father, and
        Gamer.
        <br />
      </Text>
    </div>
    <div>
      <Text>Here's some links to know more about me :</Text>
    </div>
    <br />
    <SelectInput items={items} onSelect={handleSelect} />
  </div>
);
