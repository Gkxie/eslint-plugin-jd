const {resolve} = require('path');
// ts配置文件
const tsConfigFile = resolve(__dirname, '../tsconfig.json');
// 源码目录
const srcPath = resolve(__dirname, '../src');
// rules的源码目录
const srcRulesDir = `${srcPath}/lib/rules/*.ts`;
// 生成文件目录
const destLibDir = resolve(__dirname, '../lib');

module.exports = {
    tsConfigFile,
    srcPath,
    srcRulesDir,
    destLibDir
};