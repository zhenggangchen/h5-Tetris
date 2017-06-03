/**
 * Created by czg on 2017/3/12.
 */
(function (window) {
    'use strict';
    function Block(blockType){
        this.blockType=blockType;
        this.size=30;
        this.originalSize=32;
        this.sprite=window.ResourceManager.getResource('blocks');
    }

    Block.prototype={
        constructor:Block,
        draw: function (context, x, y,blocktype,size) {
            size=size||this.size;
            context.drawImage(this.sprite,((blocktype||this.blockType)-1)*this.originalSize,0
                ,this.originalSize,this.originalSize,x*size,y*size,size,size);

        }
    };
    window.Block=Block;//???
    
    
})(window);











