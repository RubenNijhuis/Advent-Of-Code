fs = require('fs')

fs.readFile('./data.txt', 'utf8', (err, file_data) => {
	let data;
	let amount_changes;

	amount_changes = 1; // +1 as the start is counted as an increase
	data = file_data.split(/\n/);
	for (let i = 0; i < data.length; i++)
	{
		if (data[i + 1] > data[i])
			amount_changes++;
	}
	console.log(amount_changes);
});
