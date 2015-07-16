export function bumpPatch(version)
{
	var stringarray = version.split(".");
	var patchnumber = parseInt(stringarray[2]);
	patchnumber = patchnumber+1;
	
	var result = `${stringarray[0]}.${stringarray[1]}.${patchnumber}`;
	return result;
}

export function bumpMinor(version)
{
	var stringarray = version.split(".");
	var patchnumber = parseInt(stringarray[1]);
	patchnumber = patchnumber+1;
	
	var result = `${stringarray[0]}.${patchnumber}.0`;
	return result;
}

export function bumpMajor(version)
{
	var stringarray = version.split(".");
	var patchnumber = parseInt(stringarray[0]);
	patchnumber = patchnumber+1;
	
	var result = `${patchnumber}.0.0`;
	return result;
}

export function bumpAlpha(version)
{
	if (version.indexOf("beta") > -1)
	{
		return version;
	}
	else
	if (version.indexOf("alpha") > -1)
	{
		var stringarray = version.split(".");
		var patchnumber;
		if (stringarray.length > 3)
		{
			patchnumber = parseInt(stringarray[3]);
			patchnumber = patchnumber + 1;
		}
		else
		{
			patchnumber = 1;
		}
	return `${stringarray[0]}.${stringarray[1]}.${stringarray[2]}.${patchnumber}`;
	}
	else
	{
		return `${version}-alpha.1`;
	}
}

export function bumpBeta(version)
{
	var testVersion = version;
	
	if (testVersion.indexOf("alpha") > -1)
	{
		var tempArray = testVersion.split(".");
		testVersion = parseInt(tempArray[0])+"."+parseInt(tempArray[1])+"."+parseInt(tempArray[2]);
	}
	
	if (testVersion.indexOf("beta") > -1)
	{
		var stringarray = testVersion.split(".");
		var patchnumber;
		if (stringarray.length > 3)
		{
			patchnumber = parseInt(stringarray[3]);
			patchnumber = patchnumber + 1;
		}
		else
		{
			patchnumber = 1;
		}
		return `${stringarray[0]}.${stringarray[1]}.${stringarray[2]}.${patchnumber}`;
	}
	else
	{
		return `${testVersion}-beta.1`;
	}
}