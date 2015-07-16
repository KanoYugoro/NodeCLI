var versionbumper = require('../lib/versionbumper.js');
var expect = require('chai').expect;

describe("versionbumper", function(){
   describe("#bumpPatch()", function(){
       it("should bump up the third value in the string passed in.", function(){
           var arg = "1.0.0";
           var result = versionbumper.bumpPatch(arg);
 
           expect(result).to.equal("1.0.1");
       });
   });
   describe("#bumpMinor()", function(){
       it("should bump up the second value in the string passed in.", function(){
           var arg = "1.0.1";
           var result = versionbumper.bumpMinor(arg);
 
           expect(result).to.equal("1.1.0");
       });
   });
   describe("#bumpMajor()", function(){
       it("should bump up the first value in the string passed in.", function(){
           var arg = "1.2.3";
           var result = versionbumper.bumpMajor(arg);
 
           expect(result).to.equal("2.0.0");
       });
   });
   describe("#bumpAlpha()", function(){
       it("should bump up the alpha value in the string passed in.", function(){
		   var arg = "2.0.0";
		   var result = versionbumper.bumpAlpha(arg);
		   
		   expect(result).to.equal("2.0.0-alpha.1");
		   
		   var result2 = versionbumper.bumpAlpha(result);
		   
		   expect(result2).to.equal("2.0.0-alpha.2");
       });
   });
   describe("#bumpBeta()", function(){
       it("should bump up the alpha value in the string passed in.", function(){
		   var arg = "2.0.0-alpha.1";
		   var result = versionbumper.bumpBeta(arg);
		   
		   expect(result).to.equal("2.0.0-beta.1");
		   
		   var result2 = versionbumper.bumpBeta(result);
		   
		   expect(result2).to.equal("2.0.0-beta.2");
       });
   });
});