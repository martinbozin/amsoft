"use strict";
describe('Register Model', function () {
    it('has email', function () {
        var registerModel = { email: 'test@test.test', password: 'Super Cat', username: 'test' };
        expect(registerModel.email).toEqual('test@test.test');
    });
    it('has password', function () {
        var registerModel = { email: 'test@test.test', password: 'Super Cat', username: 'test' };
        expect(registerModel.password).toEqual('Super Cat');
    });
    it('has username', function () {
        var registerModel = { email: 'test@test.test', password: 'Super Cat', username: 'test' };
        expect(registerModel.username).toEqual('test');
    });
});
//# sourceMappingURL=register.model.spec.js.map