const {src, dest, parallel, series,task,watch} = require('gulp');
const ts = require('gulp-typescript');
const {exec} = require('./util');
const fileList = require('./resolvePath');

const cleanTask = (filepath) => {
    return function () {
        return exec(`npx rimraf ${filepath}`)
    }
};

const createTsTask = (srcPath, toPath) => {
    return function () {
        return src(srcPath)
            .pipe(ts.createProject(fileList.tsConfigFile)())
            .pipe(dest(toPath))
    }
};

const completeRules = createTsTask([fileList.srcRulesDir], fileList.destLibDir);

const watchTask = function () {
    return watch([`${fileList.srcPath}/lib/**`],completeRules)
};

// 删除lib文件夹
task('clean',cleanTask(fileList.destLibDir));

// 编译ts
task('complete',series(completeRules));

// 构建
task('build',series('clean',completeRules));

// 监听文件变化
task('watch',watchTask);

// 开发
task('dev',parallel('build','watch'));

