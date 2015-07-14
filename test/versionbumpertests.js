var versionbumper = require('../bin/versionbumper.js');
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
           var arg = "1.0.0";
           var result = versionbumper.bumpMinor(arg);
 
           expect(result).to.equal("1.1.0");
       });
   });
   describe("#bumpMajor()", function(){
       it("should bump up the first value in the string passed in.", function(){
           var arg = "1.0.0";
           var result = versionbumper.bumpMajor(arg);
 
           expect(result).to.equal("2.0.0");
       });
   });
});