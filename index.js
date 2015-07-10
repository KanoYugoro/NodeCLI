#! /usr/bin/env node

var program = require('commander');
var gitfunctions = require('./bin/gitfunctions.js');
program
	.version('0.0.1')
	.option('-M , --major', 'Bump major')
	.option('-m , --minor', 'Bump minor')
	.option('-p , --patch', 'Bump patch')
	.option('-b , --build', 'Building src into lib')
	.option('-t , --tag', 'Git tag the repo')
	.option('-F , --fullbuild', 'Do all the things')
	.option('-c , --commit [message]', 'Commit to git','default message')
	.parse(process.argv);
	
if (program.major) console.log("Bumping major");
if (program.minor) console.log("Bumping minor");
if (program.patch) console.log("Bumping patch");
if (program.build) console.log("Build command executed");
if (program.tag) console.log("Gittag called");
if (program.fullbuild) console.log("fullbuild called");
if (program.commit) 
{
	console.log(program.commit);
	gitfunctions.gitCommit(program.commit);
}
