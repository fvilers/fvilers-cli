'use strict';

const { h, Text } = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');

const open = url => opn(url, { wait: false });
const handleSelect = item => {
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
    url: 'https://www.dev-one.com'
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/fvilers'
  },
  {
    label: 'GitHub',
    url: 'https://github.com/fvilers'
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/fvilers'
  },
  {
    label: 'Blog',
    url: 'https://fvilers.github.io'
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/fvilers'
  },
  {
    label: 'Quit',
    action() {
      process.exit();
    }
  }
];

module.exports = () => (
  <div>
    <br />
    <div>
      <Text>Hi! I'm Fabian.</Text>
    </div>
    <div>
      <Text>
        A belgian Entrepreneur, Software Craftsman, Amateur Photographer,
        Father, and Gamer.
      </Text>
    </div>
    <br />
    <SelectInput items={items} onSelect={handleSelect} />
  </div>
);
