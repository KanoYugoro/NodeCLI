import { readFile } from 'fs-promise';
import { writeFile } from 'fs-promise';

export function writeVersion(fname,newversion,callback)
{
	var oldversion;
	readFile(fname)
	.then(function (data) {			
		var toparse = data.toString();
		var result = JSON.parse(toparse);
		oldversion = result.version;
		result.version = newversion;
		var towrite = JSON.stringify(result, null, 4);
		return writeFile(fname,towrite);
	}).then(function() {
		callback(oldversion, newversion);
	}).catch(function(reason) {
		console.log(reason);
	});
}

export function readVersion(fname,callback)
{
	var oldversion;
	readFile(fname)
	.then(function (data) {
		var toparse = data.toString();
		var result = JSON.parse(toparse);
		oldversion = result.version;
		
		callback(oldversion);
	}).catch(function(reason){
		console.log(reason);
	});
}