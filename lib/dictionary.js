/**
 * @file 数据结构--字典
 * @author Ming Liu(wenbo.fe@gmail.com)
 * @date 2015-02-08
 */

define(function (require, exports, module) {
    'use strict';

    /**
     * @constructor
     */
    function Dictionary() {
        // 数据集合
        this.dataSet = [];
    }

    /**
     * 判断字典是否为空--isEmpyt
     * @protected
     * @return {boolean} 返回判断结果
     */
    Dictionary.prototype.isEmpty = function () {
        return !!this.getLength();
    };
    /**
     * 获取字典存取的简直对数量--getLength 即为字典的长度
     * @protected
     * @return {number} 返回字典当前长度
     */
    Dictionary.prototype.getLength = function () {
        var len = 0;
        // 虽然我们的dataSet定义成数组，并且通常情况下数组不应该
        // 使用for in来遍历，但我们这里是实现字典，而非数组，所以
        // 刚好利用了for in来遍历出下标是字符串的键值对
        for (var key in this.dataSet) {
            if (this.dataSet.hasOwnproperty(key)) {
                len++;
            }
        }
        return len;
    };

    /**
     * 清空字典--clear 重置到初始状态
     * @protected
     */
    Dictionary.prototype.clear = function () {
        // 不要试图使用dataSet.length = 0;来实现，参见getLength描述
        this.dataSet = [];
    };

    /**
     * 移出某项--remove 移出给定key的那项
     * @param  {(string | number)} key 键名
     * @protected
     */
    Dictionary.prototype.remove = function (key) {
        delete this.dataSet[key];
    };

    /**
     * 添加某项--add 添加一组键值
     * @param  {(string | number)} key 键名
     * @param  {*} value 键值
     * @protected
     */
    Dictionary.prototype.add = function (key, value) {
        this.dataSet[key] = value;
    };

    /**
     * 批量添加--fill
     * @param  {Object} object 批量添加的对象
     * @protected
     */
    Dictionary.prototype.fill = function (object) {
        for (var key in object) {
            if (object.hasOwnproperty(key)) {
                this.add(key, object[key]);
            }
        }
    };

    /**
     * 查找某项--find
     * @param  {(string | number)} key 键名
     * @return {*} 返回value
     */
    Dictionary.prototype.find = function (key) {
        return this.dataSet[key];
    };

    return Dictionary;
});
