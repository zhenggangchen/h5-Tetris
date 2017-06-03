/**
 * Created by czg on 2017/3/12.
 */
/*(function (window) {
 'use strict';

 })(window);*/
(function (window) {
    'use strict';
    //var intervalId;
    //var speed = TetrisConfig.speed;

    function Tetris() {
        this.board = new Board(this);
        this.score = new Score();
        this.Timer = new Timer();
        this.Level = new Level();
        this.nextshape = new NextShape();
        this.highscore = new HighScore();
        this._sound;
        this._state = 'playing';
        (new Keyboard()).init(this.board);
    }

    Tetris.prototype = {
        constructor: Tetris,
        _initAudio: function () {
            //完成声音
            this._sound = new Howl({
                src: ['audio/bg.wav'],
                loop: true,
                volume: 0.3
            });
            this._playsound();
        },
        _playsound: function () {
            if (window.TetrisConfig.config.enableSound) {
                this._sound.play();
            }
        }
        ,
        _startTick: function () {
            var self = this;
            TetrisConfig.intervalId = window.setInterval(function () {
                self.board.tick();
            }, TetrisConfig.speed);
        },
        _stopTick: function () {
            window.clearInterval(window.TetrisConfig.intervalId);
        },
        startGame: function () {
            this._initAudio();
            this._startTick();

        },
        endGame: function () {
            //停止声音播放
            this._sound.stop();
            //暂停监听事件
            //停止atick
            this._stopTick();
            this.Timer.stop();
        },
        pause: function () {
            if (this._state === 'over') {
                return;
            }
            //1.暂停声音
            this._sound.pause();
            //2.暂停监听事件
            this._state = 'pause';
            //3.停止atick
            this._stopTick();
            this.Timer.pause();
        },
        resume: function () {
            if (this._state === 'over') {
                return;
            }
            this._playsound();
            this._state = 'playing';
            this._startTick();
            this.Timer.resume();
        }
    };
    window.Tetris = Tetris;

})(window);








