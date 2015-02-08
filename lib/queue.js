/**
 * @file 数据结构--队列
 * @author Ming Liu(wenbo.fe@gmail.com)
 * @date 2015-02-08
 */

define(function (require, exports, module) {
    'use strict';

    /**
     * @constructor
     */
    function Queue() {
        // 数据集合
        this.dataSet = [];
    }

    /**
     * 队列判空--isEmpty 判读队列是否为空
     * @protected
     * @return {boolean} 判断结果
     */
    Queue.prototype.isEmpty = function () {
        return !!this.dataSet.length;
    };

    /**
     * 入队--enqueue 向队列尾部插入新的元素
     * @param {*} element 入队的元素
     * @protected
     * @return {*} 入队的元素
     */
    Queue.prototype.enqueue = function (element) {
        return this.dataSet.push(element);
    };

    /**
     * 出队--dequeue 移出队首元素
     * @protected
     * @return {*} 出队的元素
     */
    Queue.prototype.dequeue = function () {
        return this.dataSet.shift();
    };

    /**
     * 读取队首元素--getFirst
     * @protected
     * @return {*} 队首元素
     */
    Queue.prototype.getFirst = function () {
        return this.dataSet[0];
    };

    /**
     * 读取队尾元素--getLast
     * @protected
     * @return {*} 队尾元素
     */
    Queue.prototype.getLast = function () {
        return this.dataSet[this.getLength() - 1];
    };

    /**
     * 读取队列长度--getLength
     * @protected
     * @return {number} 队列长度
     */
    Queue.prototype.getLength = function () {
        return this.dataSet.length;
    };
    return Queue;
});
