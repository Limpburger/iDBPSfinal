const svgSprite = require('svg-sprite');
const fs = require('fs');

const config = fs.readFileSync('./svg-sprite-config.json', 'utf-8');

const sprite = new svgSprite({
  mode: {
    symbol: true
  }
});

fs.readdirSync('./svg-icons').forEach((file) => {
  const svg = fs.readFileSync(`./svg-icons/${file}`, 'utf-8');
  sprite.add(`./svg-icons/${file}`, null, svg);
});

const result = sprite.compile();

fs.writeFileSync('./sprite.svg', result.symbol.sprite.contents);
