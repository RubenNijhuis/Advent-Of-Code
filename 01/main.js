fs = require('fs')

fs.readFile('./data.txt', 'utf8', (err, file_data) => {
	let data;
	let amount_changes;
	let amount_changes_window;

	amount_changes = 1; // +1 as the start is counted as an increase
	amount_changes_window = 0;
	data = file_data.split(/\n/);
	for (let i = 0; i < data.length; i++)
	{
		let window_one = Number(data[i+0]) + Number(data[i+1]) + Number(data[i+2])
		let window_two = Number(data[i+1]) + Number(data[i+2]) + Number(data[i+3])
		if (window_one < window_two)
			amount_changes_window++;
		
		if (data[i + 1] > data[i])
			amount_changes++;
	}
	console.log(amount_changes);
	console.log(amount_changes_window);
});
