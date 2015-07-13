exports = module.exports = {}

exports.bumpPatch = function(version){
	var stringarray = version.split(".");
	var patchnumber = Number(stringarray[2]);
	patchnumber = patchnumber+1;
	
	var result = (stringarray[0]+"."+stringarray[1]+"."+patchnumber);
	return result;
}

exports.bumpMinor = function(version){
	var stringarray = version.split(".");
	var patchnumber = Number(stringarray[1]);
	patchnumber = patchnumber+1;
	
	var result = (stringarray[0]+"."+patchnumber+"."+stringarray[2]);
	return result;
}

exports.bumpMajor = function(version){
	var stringarray = version.split(".");
	var patchnumber = Number(stringarray[0]);
	patchnumber = patchnumber+1;
	
	var result = (patchnumber+"."+stringarray[1]+"."+stringarray[2]);
	return result;
}

