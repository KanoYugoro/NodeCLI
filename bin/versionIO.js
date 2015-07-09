#! /usr/bin/env node

exports = module.exports = {}
var fs = require('fs');

exports.readVersion = function(file,callback)
{
	fs.readFile(file,function(err,data)
	{
		if (err)
		{
			callback(err);
		}
		else
		{
			var result = JSON.parse(data);
			callback(null,result.version);
		}
	})
}

exports.writeVersion = function(file,newversion,callback)
{
	fs.readFile(file, function (err, data) {			
		var toparse = data.toString();
		var result = JSON.parse(toparse);
		var oldversion = result.version;
		result.version = newversion;
		var towrite = JSON.stringify(result);
		fs.writeFile(file,towrite,function(err){
			if (err)
			{
				console.log(err);
			}
			callback(oldversion,result.version);
		});
	});
}