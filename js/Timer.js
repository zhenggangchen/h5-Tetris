/**
 * Created by czg on 2017/3/13.
 */
(function (window) {
    'use strict';
    function Timer() {
        this.canvas = new Canvas('timer', 100, 70);
        this.time = 0;
        this.timerId;
        this._init();
    }

    Timer.prototype = {
        constructor: Timer,
        _init: function () {
            this._render();
            this.resume();
        },
        _format: function (second) {
            var hours = Math.floor(second / 3600);
            second = second - hours * 3600;
            var minutes = Math.floor(second / 60);
            second = second - minutes * 60;
            if (hours < 10) {
                hours = '0' + hours;
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (second < 10) {
                second = '0' + second;
            }
            return hours + ':' + minutes + ':' + second;
        },
        _render: function () {
            this.canvas.drawText(this._format(this.time));
        }, 
        pause: function () {
            window.clearInterval(this.timerId);
        },
        resume: function () {
            var self=this;
            this.timerId = window.setInterval(function () {
                self.time += 1;
                self._render();
            }, 1000)
        },
        stop: function () {
           this.pause();
        }

    };
    window.Timer = Timer;
})(window);











