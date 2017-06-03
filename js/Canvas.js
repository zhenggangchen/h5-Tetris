/**
 * Created by czg on 2017/3/12.
 */
/*
 * Canvas操作类
 * canvasId Canvas元素的ID属性
 * width    Canvas元素的宽度
 * height   Canvas元素的高度
 *
 * */
(function (window) {
    'use strict';
    function Canvas(canvasId, width, height) {
        this.canvasId = canvasId;
        this.el = document.getElementById(canvasId);
        if (!this.el) {
            throw new Error('Must provider a right canvas id.');
        }
        this.context = this.el.getContext('2d');
        this.width = width || window.innerWidth;
        this.height = height || window.innerHeight;
        this._init();
    }

    Canvas.prototype = {
        constructor: Canvas,
        _init: function () {
            this.el.width = this.width;
            this.el.height = this.height;
        },
        clear: function (fromX, fromY, toX, toY) {
            fromX = fromX || 0;
            fromY = fromY || 0;
            toX = toX || this.width;
            toY = toY || this.height;
            this.context.clearRect(fromX, fromY, toX, toY);
        },
        drawText: function (text, x, y) {
            this.clear();
            this.context.font = '25px Arial';
            this.context.fillStyle = 'purple';
            this.context.textAlign = 'center';
            this.context.fillText(text, x === undefined ? this.width / 2 : x, y === undefined ? 45 : y);
        }
    };
    window.Canvas = Canvas;
})(window);
























