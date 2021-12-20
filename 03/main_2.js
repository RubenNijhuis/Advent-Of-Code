fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, file_data) => {
	let data_split;
	let oxygen;
	let scrubber;
	let data_width;
	let value_columns;
	let filtered_input_data_oxygen;
	let filtered_input_data_scrubber;

	// Initialize data
	oxygen = 1;
	scrubber = 1;
	data_split = file_data.split(/\n/);
	data_width = data_split[0].length;
	value_columns = [];
	filtered_input_data_oxygen = data_split;
	filtered_input_data_scrubber = data_split;

	// Go through each row and the column and check which bit exists more often;
	for (let j = 0; j < data_width; j++) {
		let amount_zeroes_oxygen = 0;
		let amount_zeroes_scrubber = 0;
		
		if (filtered_input_data_oxygen.length !== 1) {
			for (let i = 0; i < filtered_input_data_oxygen.length; i++)
				filtered_input_data_oxygen[i][j] == '0' ? amount_zeroes_oxygen++ : null;
			
			filtered_input_data_oxygen = filtered_input_data_oxygen.filter(filtered_data => {
				most_common = amount_zeroes_oxygen > (filtered_input_data_oxygen.length / 2) ? '0' : '1';
				return (filtered_data[j] !== most_common);
			})
		}

		if (filtered_input_data_scrubber.length !== 1) {
			for (let i = 0; i < filtered_input_data_scrubber.length; i++)
				filtered_input_data_scrubber[i][j] == '0' ? amount_zeroes_scrubber++ : null;
			
			filtered_input_data_scrubber = filtered_input_data_scrubber.filter(filtered_data => {
				most_common = amount_zeroes_scrubber > (filtered_input_data_scrubber.length / 2) ? '0' : '1';
				return (filtered_data[j] === most_common);
			})
		}
	}
	
	// Turn value columns into binary and do the converting operations
	oxygen = parseInt(filtered_input_data_oxygen.join(''), 2);
	scrubber = parseInt(filtered_input_data_scrubber.join(''), 2);

	// Output
	console.log(oxygen);
	console.log(scrubber);
	console.log(oxygen * scrubber);
});
