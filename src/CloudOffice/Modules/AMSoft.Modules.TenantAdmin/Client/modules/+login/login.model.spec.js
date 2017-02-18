"use strict";
describe('Login Model', function () {
    it('has email', function () {
        var loginModel = { email: 'test@test.test', password: 'Super Cat', rememberMe: true };
        expect(loginModel.email).toEqual('test@test.test');
    });
    it('has password', function () {
        var loginModel = { email: 'test@test.test', password: 'Super Cat', rememberMe: true };
        expect(loginModel.password).toEqual('Super Cat');
    });
    it('has rememberMe', function () {
        var loginModel = { email: 'test@test.test', password: 'Super Cat', rememberMe: true };
        expect(loginModel.rememberMe).toEqual(true);
    });
});
//# sourceMappingURL=login.model.spec.js.map