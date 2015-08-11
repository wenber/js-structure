/**
 * @file 数据结构--哈希
 * @author Ming Liu(wenbo.fe@gmail.com)
 * @date 2015-02-08
 */

define(function (require, exports, module) {
    'use strict';

    /**
     * @constructor
     */
    function Hash() {
        // 数据集合
        this.dataSet = {};
    }

    /**
     * set
     * @param {string} key 键名
     * @param {*} val 键值
     */
    Hash.prototype.set = function (key, val) {
        this.dataSet[key] = val;
    };

    /**
     * get
     * @param {string} key 键名
     * @return {*}
     */
    Hash.prototype.get = function (key) {
        return this.dataSet[key];
    };

    /**
     * has
     * @param {string} key 键名
     * @return {boolean}
     */
    Hash.prototype.has = function (key) {
        return this.dataSet.hasOwnproperty(key);
    };

    return Hash;
});
