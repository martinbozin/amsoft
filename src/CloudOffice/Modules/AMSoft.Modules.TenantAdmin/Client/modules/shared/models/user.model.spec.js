"use strict";
// todo: I dont think user follows angular style guides
describe('User Model', function () {
    it('has displayName', function () {
        var userModel = { displayName: 'test', roles: ['1'] };
        expect(userModel.displayName).toEqual('test');
    });
    it('has displayName', function () {
        var userModel = { displayName: 'test', roles: ['admin'] };
        expect(userModel.roles[0]).toEqual('admin');
    });
});
//# sourceMappingURL=user.model.spec.js.map