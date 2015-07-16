import { readFile } from 'fs';
import { writeFile } from 'fs';

export function writeVersion(file,newversion,callback)
{
	readFile(file, function (err, data) {			
		if (err)
		{
			console.log(err)
		}
		var toparse = data.toString();
		var result = JSON.parse(toparse);
		var oldversion = result.version;
		result.version = newversion;
		var towrite = JSON.stringify(result, null, 4);
		writeFile(file,towrite,function(otherErr){
			if (otherErr)
			{
				console.log(otherErr);
			}
			callback(oldversion,result.version);
		});
	});
}

export function readVersion(file,callback)
{
	readFile(file, function (err, data) {
		var toparse = data.toString();
		var result = JSON.parse(toparse);
		var oldversion = result.version;
		
		callback(oldversion);
	});
}