/**
 * @file 数据结构
 * @author Ming Liu(wenbo.fe@gmail.com)
 * @date 2015-02-08
 */

define(function (require, exports, module) {
    return {

        /**
         * 栈
         * @type {Object}
         */
        Stack: require('./lib/stack'),

        /**
         * 栈
         * @type {Object}
         */
        Array_: require('./lib/array_'),

        /**
         * 队列
         * @type {Object}
         */
        Queue: require('./lib/queue'),

        /**
         * 列表
         * @type {Object}
         */
        List: require('./lib/list'),

        /**
         * 链表
         * @type {Object}
         */
        Chain: require('./lib/chain'),

        /**
         * 集合
         * @type {Object}
         */
        Set: require('../lib/set'),

        /**
         * 字典
         * @type {Object}
         */
        Dictionary: require('./lib/dictionary'),

        /**
         * 哈希
         * @type {Object}
         */
        Hash: require('./lib/hash')
    };
});
