/**
 * @file 数据结构--栈
 * @author Ming Liu(wenbo.fe@gmail.com)
 * @date 2015-02-08
 */

define(function (require, exports, module) {
    'use strict';

    /**
     * @constructor
     */
    function Stack() {
        // 数据集合
        this.dataSet = [];
        // 栈顶指针
        this.top = 0;
    }

    /**
     * 入栈操作--push 向当前栈压入一个新的元素
     * @param {*} element 用户入栈的元素
     * @protected
     * @return {*} 返回入栈的元素
     */
    Stack.prototype.push = function (element) {
        return this.dataSet[this.top++] = element;
    };

    /**
     * 出栈操作--pop 移出栈顶元素
     * @protected
     * @return {*} 返回栈顶元素
     */
    Stack.prototype.pop = function () {
        return this.dataSet[--this.top];
    };

    /**
     * 预览操作--getTop 预览栈顶元素
     * @protected
     * @return {*} 返回栈顶元素
     */
    Stack.prototype.getTop = function () {
        return this.dataSet[this.top - 1];
    };

    /**
     * 获取栈的长度操作--getLength 得到栈的长度
     * @protected
     * @return {*} 返回栈顶元素
     */
    Stack.prototype.getLength = function () {
        return this.dataSet.length;
    };

    /**
     * 清空操作--clear 清空栈内元素
     * @protected
     */
    Stack.prototype.clear = function () {
        this.top = 0;
    };

    /**
     * 复制操作--copy 复制一个新的栈结构
     * @protected
     * @return {Object} 返回副本
     */
    Stack.prototype.copy = function () {
        var copyObj = new Stack();
        var len = 0;

        while (len < this.top) {
            copyObj.push(this.dataSet[len++]);
        }

        return copyObj;
    };

    /**
     * 回文操作--revert 反转栈结构
     * @param {boolean} deep 是否自身结构翻转
     * {
     *     true: 自身结构反转，并返回自身，
     *     false: 自身结构不反转，返回一个反转结构的副本
     * }
     * @protected
     * @return {Object} 反转后的对象
     */
    Stack.prototype.revert = function (deep) {
        var copyObj = new Stack();
        var len = this.top;

        while (len--) {
            copyObj.push(this.data[len]);
        }

        if (deep) {
            this.dataSet = copyObj.dataSet;
        }

        return copyObj;
    };

    /**
     * 栈判空操作--isEmpty 判读栈是否为空
     * @protected
     * @return {boolean} 判断结果
     */
    Stack.prototype.isEmpty = function () {
        return !!this.dataSet.length;
    };
    return Stack;
});
