import { exec as executeShell} from 'shelljs';

export function gitCommit(message) 
{
	if (message)
	{
		executeShell(`git add -A . && git commit -a -m \"${message}\"`);
	}
	else
	{
		console.log("Please specify a message before committing");
	}
}

export function gitTag(version, message) 
{
	if (message)
	{
		executeShell(`git tag -a v\"${version}\" -m \"${message}\"`);
	}
	else
	{
		console.log("Please specify a message before tagging");
	}
}

export function gitPush() 
{
	executeShell("git push origin --tags");
}