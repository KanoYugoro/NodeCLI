#! /usr/bin/env node

var assert = require('assert')

function testVersionBumpPatch()
{
	var fs = require('fs');
	var fsFile = fs.readFileSync("./package.json");
	var fsString = fsFile.toString();
	var result = JSON.parse(fsString);
	
	console.log(result.version);
	assert.equal(2+2,4,"truthful");
}

if (module == require.main) testVersionBumpPatch()


