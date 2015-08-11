/**
 * @file 数据结构
 * @author Ming Liu(wenbo.fe@gmail.com)
 * @date 2015-02-08
 */

define(function () {

    return {

        /**
         * 栈
         * @type {Object}
         */
        Stack: require('./lib/stack'),

        /**
         * 数组
         * @type {Object}
         */
        Array_: require('./lib/array_'),

        /**
         * 队列
         * @type {Object}
         */
        Queue: require('./lib/queue'),

        /**
         * 单向链表
         * @type {Object}
         */
        SingleChain: require('./lib/singleChain'),

        /**
         * 双向链表
         * @type {Object}
         */
        DoubleChain: require('./lib/doubleChain'),

        /**
         * 循环链表
         * @type {Object}
         */
        LoopChain: require('./lib/loopChain'),

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
