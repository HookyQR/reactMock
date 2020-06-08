const loremWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.".split(' ');

const lorem = (ratio) => loremWords.slice(0, 1 + ratio * loremWords.length | 0).join(' ');

export default lorem;
