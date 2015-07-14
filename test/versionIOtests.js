var versionIO = require('../bin/versionIO.js');
var expect = require('chai').expect;

describe("versionIO", function() {
	describe("#writeVersion()",function() {
		it("should return the version value of the testpackage.json in the test directory",function(done){
			var result = versionIO.writeVersion("./test/testpackage.json","2.0.0",function(oldversion,newversion){
				expect(newversion).to.not.equal(oldversion);
			});
			done();
			versionIO.writeVersion("./test/testpackage.json","1.0.0",function(oldversion,newversion){});
		})
	})
	describe("#readVersion()",function() {
		it("should return the version value of the testpackage.json in the test directory",function(done2){
			var result2 = versionIO.readVersion("./test/testpackage.json",function(version){
				expect(version).to.equal("1.0.0");
			});
			done2();
		})
	})
})