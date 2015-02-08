/**
 * @file 数据结构--双向链表
 * @author Ming Liu(wenbo.fe@gmail.com)
 * @date 2015-02-08
 */

define(function (require, exports, module) {
    'use strict';

    /**
     * @constructor
     * @param {*} value 节点的值
     */
    function Node(value) {
        // 节点值
        this.value = value;
        // next指针
        this.next = null;
        // prev指针
    }
    /**
     * @constructor
     */
    function DoubleChain() {
        // 数据集合
        this.dataSet = [];
        // Head节点
        this.head = new Node('head');
        // Foot节点
        this.foot = new Node('foot');
    }


    return DoubleChain;
});
