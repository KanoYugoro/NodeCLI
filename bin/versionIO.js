exports = module.exports = {}
var fs = require('fs');



exports.writeVersion = function(file,newversion,callback)
{
	fs.readFile(file, function (err, data) {			
		var toparse = data.toString();
		var result = JSON.parse(toparse);
		var oldversion = result.version;
		result.version = newversion;
		var towrite = JSON.stringify(result, null, 4);
		fs.writeFile(file,towrite,function(err){
			if (err)
			{
				console.log(err);
			}
			callback(oldversion,result.version);
		});
	});
}

exports.readVersion = function(file,callback)
{
	fs.readFile(file, function (err, data) {
		var toparse = data.toString();
		var result = JSON.parse(toparse);
		var oldversion = result.version;
		
		callback(oldversion);
	});
}