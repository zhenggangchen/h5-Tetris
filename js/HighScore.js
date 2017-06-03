/**
 * Created by czg on 2017/3/13.
 */
(function (window) {
    'use strict';
    function HighScore() {
        this.canvas = new Canvas('highscore', 100, 70);
        this.highscore=0;
        this._init();
    }

    HighScore.prototype = {
        constructor: HighScore,
        _init: function () {
            this.highscore=this._getScore();
            this._render();
        },
        _render: function (shape) {
            this.canvas.drawText(this.highscore);
        },
        _getScore: function (value) {
            return window.localStorage.getItem('high-score')||0;
        },
        _setScore: function (value) {
            window.localStorage.setItem('high-score',value);
        },
        checkScore: function (score) {
            if(score>this.highscore){
                this.highscore=score;
                this._setScore(score)
                this._render();
            }
        }
    };
        window.HighScore = HighScore;
})(window);
