'use strict';

import {Rule} from "eslint";
import {CallExpression, Identifier, MemberExpression} from 'estree'

const methodsList = {
    'wx': {
        'canIUse': {
            args: []
        }
    },

}
// ExpressionStatement——表达式语句

const create = (context: Rule.RuleContext): Rule.RuleListener => ({
    // 函数调用
    CallExpression(node: CallExpression) {
        const {callee,arguments:args} = node;
        switch (callee.type) {
            case 'Identifier':
                // 全局函数调用
                const own = methodsList.hasOwnProperty(callee.name);
                if(!own) context.report({
                    node,
                    message:`${callee.name} is undefined`
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
const ruleModule: Rule.RuleModule = {
    meta: {
        type: 'problem',
        docs: {
            recommended: true
        }
    },
    create
};
export = ruleModule