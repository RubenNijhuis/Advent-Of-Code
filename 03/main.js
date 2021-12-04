fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, file_data) => {
	let data_split;
	let gamma;
	let epsilon;
	let data_width;
	let value_columns;

	// Initialize data
	gamma = 0;
	epsilon = 0;
	data_split = file_data.split(/\n/);
	data_width = data_split[0].length;
	value_columns = [];

	// Go through each row and the column and check which bit exists more often;
	for (let j = 0; j < data_width; j++) {
		let amount_zeroes = 0;

		for (let i = 0; i < data_split.length; i++)
			data_split[i][j] == '0' ? amount_zeroes++ : null;
	
		amount_zeroes > (data_split.length / 2) ?
			value_columns.push('0') :
			value_columns.push('1');
	}

	// Turn value columns into binary and do the converting operations
	gamma = parseInt(value_columns.join(''), 2);
	value_columns = value_columns.map((data) => data === '0' ? '1' : '0');
	epsilon = parseInt(value_columns.join(''), 2);

	// Output
	console.log(gamma * epsilon);
});