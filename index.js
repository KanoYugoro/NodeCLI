#! /usr/bin/env node

var program = require('commander');
var gitfunctions = require('./bin/gitfunctions.js');
var versionIO = require('./bin/versionIO.js');
var versionbumper = require('./bin/versionbumper.js');

versionIO.readVersion('package.json',function(version) {
	var packageversion = version;

program
	.version('0.0.1')
	.option('-M , --major', 'Bump major')
	.option('-m , --minor', 'Bump minor')
	.option('-p , --patch', 'Bump patch')
	.option('-t , --tag [message]', 'Git tag the repo')
	.option('-c , --commit [message]', 'Commit to git')
	.option('-P , --push', 'Push to the repo')
	.parse(process.argv);
	
if (program.major)
{
	packageversion = versionbumper.bumpMajor(packageversion);
}

if (program.minor)
{
	packageversion = versionbumper.bumpMinor(packageversion);
}

if (program.patch)
{
	packageversion = versionbumper.bumpPatch(packageversion);
}

if (program.major || program.minor || program.patch)
{
	versionIO.writeVersion('package.json',packageversion,function(oldversion,newversion){});
}

if (program.tag)
{
	
}

if (program.commit) 
{
	console.log(program.commit);
	gitfunctions.gitCommit(program.commit);
}

if (program.push)
{
	gitfunctions.gitPush();
}
});
