/// <binding AfterBuild='copy-tenant-administration' />
var gulp = require("gulp"),
    del = require('del');

var modulesPathBase = "Modules";
var applicationmodules = [
    {
        name: 'AMSoft.Modules.TenantAdmin',
        version: 'netcoreapp1.1'
    }
];

var copyExtension = function (currentModule) {
    var currentModuleName = currentModule.name;
    var currentModuleVersion = currentModule.version;

    //Views
    gulp.src("../../Modules/" + currentModuleName + "/Views/**/*").pipe(gulp.dest(modulesPathBase + "\\" + currentModuleName+"\\Views"));

    //Content (images, scripts, fonts, etc...)
    gulp.src("../../Modules/" + currentModuleName + "/Content/**/*").pipe(gulp.dest(modulesPathBase + "\\" + currentModuleName + "\\Content"));
    gulp.src("../../Modules/" + currentModuleName + "/wwwroot/**/*").pipe(gulp.dest(modulesPathBase + "\\" + currentModuleName + "\\wwwroot"));

    //Angular (app)
    gulp.src("../../Modules/" + currentModuleName + "/app/**/*").pipe(gulp.dest(modulesPathBase + "\\" + currentModuleName + "\\app"));

    //bin
    gulp.src("../../Modules/" + currentModuleName + "/bin/Debug/" + currentModuleVersion + "/**/*.dll").pipe(gulp.dest(modulesPathBase + "\\" + currentModuleName));
};


gulp.task('clean-modules', function () {
    var modulesForDelete = [];
    applicationmodules.forEach(function (currentModule) {
        modulesForDelete.push(modulesPathBase + "\\" + currentModule.name);
    });
    return del(modulesForDelete);
});

gulp.task('copy-modules', function (cb) {
    for (var i = 0; i < applicationmodules.length; i++) {
        copyExtension(applicationmodules[i]);
    }
    cb();
});

gulp.task('copy-tenant-administration', function (cb) {
    copyExtension(applicationmodules[0]);
    cb();
});