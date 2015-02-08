/**
 * @file 数据结构--数组
 * @author Ming Liu(wenbo.fe@gmail.com)
 * @date 2015-02-08
 */

define(function (require, exports, module) {
    'use strict';

    /**
     * @constructor
     */
    function Array_() {
        // 数据集合
        this.dataSet = [];
    }

    /**
     * 创建二维数组--matrix
     * @param  {number} rows 行数
     * @param  {number} cols 列数
     * @param  {*} defaultValue 默认的初始值
     * @public
     */
    Array_.matrix = function (rows, cols, defaultValue) {
        for (var i = 0; i < rows; i++) {
            this.dataSet[i] = [];
            for (var j = 0; j < cols; j++) {
                this.dataSet[i][j] = defaultValue;
            }
        }
    };

    /**
     * 数字排序--sort_
     * @param {Function?} method 排序的方式
     * @protected
     * @return {Arraay} 排序后的数组
     */
    Array_.prototype.sort_ = function (method) {
        if ('up' === method) {
            return [].prototype.sort.apply(null, up);
        }
        else if ('down' === method) {
            return [].prototype.sort.apply(null, down);
        }

        return [].prototype.sort.apply(null);
    };

    function up(a, b) {
        return a - b;
    }

    function down(a, b) {
        return b - a;
    }
    return Array_;
});
