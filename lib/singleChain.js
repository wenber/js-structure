/**
 * @file 数据结构--单向链表
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
    }
    /**
     * @constructor
     */
    function SingleChain() {
        // 数据集合
        this.dataSet = [];
        // Head接节点
        this.head = new Node('head');
    }

    /**
     * 查找节点--find
     * @param  {*} value 节点值
     * @protected
     * @return {Node} 返回该节点
     */
    SingleChain.prototype.find = function (value) {
        var node = this.head;
        while (node.value !== value) {
            node = node.next;
        }

        return node;
    };

    /**
     * 查找前一个节点--findPrev
     * @param  {*} value 节点值
     * @protected
     * @return {Node} 返回该节点前一个节点
     */
    SingleChain.prototype.findPrev = function (value) {
        var node = this.head;
        while (node.next !== null && node.next.value !== value) {
            node = node.next;
        }

        return node;
    };

    /**
     * 插入到某个节点之前--insertBefore
     * @param  {*} newValue 要插入的节点值
     * @param  {*} beforeValue 要插入的节点的后一个节点值
     * @protected
     */
    SingleChain.prototype.insertBefore = function (newValue, beforeValue) {
        var node = new SingleChain('newValue');
        var posNode = this.find('beforeValue');

        node.next = posNode;
        posNode.next = node;
    };

    /**
     * 插入到某个节点之后--insertAfter
     * @param  {*} newValue 要插入的节点值
     * @param  {*} afterValue 要插入的节点的前一个节点值
     * @protected
     */
    SingleChain.prototype.insertAfter = function (newValue, afterValue) {
        var node = new SingleChain('newValue');
        var posNode = find('afterValue');

        node.next = posNode;
        posNode.next = node;
    };

    /**
     * 移出某个节点--remove
     * @param  {*} value 要移出的节点值
     * @protected
     * @return {?Node} 移出的节点
     */
    SingleChain.prototype.remove = function (value) {
        var node = this.findPrev('value');
        var removeNode = node.next;
        if (removeNode === null) {
            return;
        }
        node.next = removeNode.next;

        return removeNode;
    };

    return SingleChain;
});
