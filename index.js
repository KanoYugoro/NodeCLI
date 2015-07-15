#! /usr/bin/env node

var program = require('commander');
var gitfunctions = require('./bin/gitfunctions.js');
var versionIO = require('./bin/versionIO.js');
var versionbumper = require('./bin/versionbumper.js');

versionIO.readVersion('package.json',function(version) {
	var packageversion = version;

program
	.version('0.0.1')
	.option('-a , --alpha', 'Bump alpha')
	.option('-b , --beta',  'Bump beta')
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
else
if (program.minor)
{
	packageversion = versionbumper.bumpMinor(packageversion);
}
else
if (program.patch)
{
	packageversion = versionbumper.bumpPatch(packageversion);
}
else
if (program.beta)
{
	packageversion = versionbumper.bumpBeta(packageversion);
}
else
if (program.alpha)
{
	packageversion = versionbumper.bumpAlpha(packageversion);
}

if (program.major || program.minor || program.patch)
{
	versionIO.writeVersion('package.json',packageversion,function(oldversion,newversion){});
}

if (program.tag)
{
	gitfunctions.gitTag(packageversion,program.tag);
}

if (program.commit) 
{
	gitfunctions.gitCommit(program.commit);
}

if (program.push)
{
	gitfunctions.gitPush();
}
});
