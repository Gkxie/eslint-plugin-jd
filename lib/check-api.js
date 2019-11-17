'use strict';
const methodsList = {
    'wx': {
        'canIUse': {
            args: []
        }
    },
};
// ExpressionStatement——表达式语句
const create = (context) => ({
    // 函数调用
    CallExpression(node) {
        const { callee, arguments: args } = node;
        switch (callee.type) {
            case 'Identifier':
                // 全局函数调用
                const own = methodsList.hasOwnProperty(callee.name);
                if (!own)
                    context.report({
                        node,
                        message: `${callee.name} is undefined`
                    });
                break;
            case 'MemberExpression':
                // 对象成员调用
                break;
            default:
                break;
        }
    }
});
const ruleModule = {
    meta: {
        type: 'problem',
        docs: {
            recommended: true
        }
    },
    create
};
module.exports = ruleModule;
