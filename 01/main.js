fs = require('fs')

fs.readFile('./data.txt', 'utf8', function (err, file_data) {
	let data;
	let amount_changes;

	amount_changes = 0;
	if (err) return console.log(err);
	data = file_data.split(/\n/);
	for (let i = 0; i < data.length; i++)
	{
		if (data[i + 1] > data[i])
			amount_changes++;
	}
	console.log(amount_changes + 1); // +1 fix because last entry isnt counted
});
