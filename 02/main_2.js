fs = require('fs')

fs.readFile('./data.txt', 'utf8', (err, file_data) => {
	let data;
	let data_word_split;
	let depth;
	let horizontal;

	horizontal = 0;
	depth = 0;
	aim = 0;
	data = file_data.split(/\n/);
	data_word_split = []
	for (let i = 0; i < data.length; i++)
		data_word_split.push(data[i].split(/ /));
	for (var i = 0; i < data_word_split.length; i++)
	{
		const [direction, value] = data_word_split[i];
		if (direction == 'forward')
		{
			horizontal += Number(value);
			depth += Number(value) * aim
		}
		if (direction == 'down')
			aim += Number(value);
		if (direction == 'up')
			aim -= Number(value);
	}
	console.log(horizontal * depth);
});
