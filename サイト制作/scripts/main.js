// 以下は文字アニメーションの挙動を実装している

{
document.addEventListener('DOMContentLoaded', ()=>{
  const hero = new HeroSlider();

  // 以下は文字アニメーションのクラスとスクロール挙動

  const els = document.querySelectorAll('.animate-title');
  const cb = function(entries, observer){
      entries.forEach(entry =>{
          if(entry.isIntersecting){
           const ta = new TextAnimation(entry.target)
           ta.animate();
           observer.unobserve(entry.target)
          }
      })
  }
const io = new IntersectionObserver(cb);
els.forEach(el =>{
   io.observe(el)
})

})
}
// 以下は画像スライドアニメーションを作成している

{
document.addEventListener('DOMContentLoaded', ()=>{
  const els = document.querySelectorAll('.cover-slide');
  const cb = function(entries, observer){
      entries.forEach(entry =>{
          if(entry.isIntersecting){
           entry.target.classList.add('inview')
           observer.unobserve(entry.target)
          }
      })
  }


const io = new IntersectionObserver(cb);
els.forEach(el =>{
   io.observe(el)
})

})
}

{
  document.addEventListener('DOMContentLoaded', ()=>{
    const els = document.querySelectorAll('.travel__title');
    const cb = function(entries, observer){
        entries.forEach(entry =>{
            if(entry.isIntersecting){
             entry.target.classList.add('inview')
             observer.unobserve(entry.target)
            }
        })
    }
  
  
  const io = new IntersectionObserver(cb);
  els.forEach(el =>{
     io.observe(el)
  })
  
  })
  }

  // いかにサイドーのアニメーションを付与する

  {
    document.addEventListener('DOMContentLoaded', ()=>{
      const el = document.querySelector('.houses');
      const cb = function(entries, observer){
          entries.forEach(entry =>{
              if(entry.isIntersecting){
                document.querySelector('.side').classList.add('inview');
                document.querySelector('.rigth').classList.add('inview');
              }else{
                document.querySelector('.side').classList.remove('inview');
                document.querySelector('.rigth').classList.remove('inview');
              }
          })
      }
    const io = new IntersectionObserver(cb);
    io.observe(el)
    
    
    })
    }

