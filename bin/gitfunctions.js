#! /usr/bin/env node

exports = module.exports = {}
var shell = require('shelljs');



exports.gitCommit = function(message)
{
	if (message)
	{
		shell.exec("git add -A . && git commit -a -m \"" + message + "\"");
	}
	else
	{
		console.log("Please specify a message before committing");
	}
}

exports.gitPush = function()
{
	shell.exec("git push origin master --force");
}