// document.querySelector('#btn').addEventListener('click', ()=>{
//   document.querySelector('.animate-title').classList.toggle('inview')
// })

// document.addEventListener('DOMContentLoaded', ()=>{
//   const el = document.querySelector('.animate-title')
//   const str = el.innerHTML.trim().split("")


//   el.innerHTML = str.reduce((acc, curr) =>{
//     curr = curr.replace(" ", "&nbsp")
//     return `${acc}<span class="char">${curr}</span>`
//   }, "");
// })


// this.DOM = {};
//     // DOM要素かを判別する条件式を作成する
//     if(el instanceof HTMLElement){
//       this.DOM.el = el;
//     }else{
//       this.DOM.el = document.querySelector(el);
//     }

//     // console.log(this.DOM);
//     this.chars = this.DOM.el.innerHTML.trim().split("");
//     this.DOM.el.innerHTML = this._splitText();

// 文字が増えたとにクラスを付与することで文字アニメができるようにクラス化させる

class TextAnimation{
  constructor(el){
    this.DOM = {};
    // DOM要素かを判別する条件式を作成する
    if(el instanceof HTMLElement){
      this.DOM.el = el;
    }else{
      this.DOM.el = document.querySelector(el);
    }

    // console.log(this.DOM);
    this.chars = this.DOM.el.innerHTML.trim().split("");
    this.DOM.el.innerHTML = this._splitText();
  }

  _splitText(){
    return this.chars.reduce((acc, curr) =>{
      curr = curr.replace(" ", "&nbsp")
      return `${acc}<span class="char">${curr}</span>`
    }, "");
  }

  animate(){
    this.DOM.el.classList.toggle('inview');
  }
}