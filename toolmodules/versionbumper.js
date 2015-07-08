#! /usr/bin/env node

import "fs";


function getVersion(callback)
{
	var fsFile = fs.readFile("./package.json", function(err, data)
	{
		var fsString = fsFile.toString();
		var result = JSON.parse(fsString);
		if (callback)
		{
			callback(result);
		}
	});
}

function versionBumpPatch()
{
	
}


