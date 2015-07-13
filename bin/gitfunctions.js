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

exports.gitTag = function(version,message)
{
	if (message)
	{
		var tempstring = "git tag -a v"+version+" -m \""+message+"\"";
		shell.exec(tempstring);
	}
	else
	{
		console.log("Please specify a message before tagging");
	}
}

exports.gitPush = function()
{
	shell.exec("git push origin --tags");
}