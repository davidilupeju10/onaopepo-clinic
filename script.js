var root=document.documentElement,$=function(i){return document.getElementById(i)};
var nav=$('nav'),mb=$('menu');
$('theme').addEventListener('click',function(){var t=root.getAttribute('data-theme')==='dark'?'light':'dark';root.setAttribute('data-theme',t);try{localStorage.setItem('onaopepo-theme',t)}catch(e){}});
mb.addEventListener('click',function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
var pg=$('prog'),tb=$('top-btn');
addEventListener('scroll',function(){var h=root.scrollHeight-innerHeight;pg.style.width=(h>0?scrollY/h*100:0)+'%';tb.classList.toggle('show',scrollY>700)},{passive:true});
var f=$('form');
if(f){var q=new URLSearchParams(location.search).get('service');if(q){var s=$('s');for(var i=0;i<s.options.length;i++){if(s.options[i].text===q){s.selectedIndex=i}}}
f.addEventListener('submit',function(e){e.preventDefault();var t='Hello Onaopepo Clinic, my name is '+$('n').value.trim()+'. Phone: '+$('p').value.trim()+'. Service: '+$('s').value+'.'+($('m').value.trim()?' '+$('m').value.trim():'');window.open('https://wa.me/2348065804014?text='+encodeURIComponent(t),'_blank','noopener')})}
var y=$('yr');if(y){y.textContent=new Date().getFullYear()}
