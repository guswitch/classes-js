import Character from './character.js';

export default class Game{
    _body;
    _canvas;
    _ctx;
    constructor(){
       this._body = document.body;
       this._canvas = document.createElement("canvas");
       this._canvas.className = "game-screen";

       this._body.appendChild(this._canvas);
       this._ctx = this._canvas.getContext("2d");
       
       this.RenderSemiCircle();
       const character = new Character(100,false);
       character.Born();
    }

    RenderSemiCircle() {
        this._ctx.ellipse(50, 50, 10, 10, 0, 0, Math.PI);
        this._ctx.fill();
    }
}

new Game()
