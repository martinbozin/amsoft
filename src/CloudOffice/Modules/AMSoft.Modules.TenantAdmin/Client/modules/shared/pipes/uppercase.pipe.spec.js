"use strict";
var uppercase_pipe_1 = require("./uppercase.pipe");
describe('Pipe appfUppercase', function () {
    var pipe;
    beforeEach(function () {
        pipe = new uppercase_pipe_1.UppercasePipe();
    });
    it('transforms "abc" to "ABC"', function () {
        expect(pipe.transform('abc')).toEqual('ABC');
    });
    it('transforms "abc def" to "ABC DEF"', function () {
        expect(pipe.transform('abc def')).toEqual('ABC DEF');
    });
    it('leaves "ABC DEF" unchanged', function () {
        expect(pipe.transform('ABC DEF')).toEqual('ABC DEF');
    });
});
//# sourceMappingURL=uppercase.pipe.spec.js.map