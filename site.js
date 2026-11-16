/* Fort Maine Coon — gedeelde scripts (alle talen) */
(function(){
  var lang = document.documentElement.lang || 'nl';

  /* Menu (mobiel) */
  var menuToggle = document.getElementById('menuToggle');
  var mainNav = document.getElementById('mainNav');
  if(menuToggle && mainNav){
    menuToggle.addEventListener('click', function(){
      var isOpen = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });
    mainNav.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', function(){
        mainNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', false);
      });
    });
  }

  /* Lightbox-teksten per taal */
  if(window.lightbox){
    var lb = {
      nl:{albumLabel:'Afbeelding %1 van %2'},
      en:{albumLabel:'Image %1 of %2'},
      fr:{albumLabel:'Image %1 sur %2'}
    };
    lightbox.option(Object.assign({wrapAround:true}, lb[lang] || lb.nl));
  }

  /* Fotogalerijen per nestje (data staat in js/nesten.js) */
  var holder = document.getElementById('nestenGalerij');
  if(holder && window.NESTEN){
    var pick = function(x){ return (x && typeof x === 'object') ? (x[lang] || x.nl || '') : (x || ''); };
    holder.innerHTML = window.NESTEN.map(function(n){
      var photos = n.fotos.map(function(f){
        var file = Array.isArray(f) ? f[0] : f;
        var cap = Array.isArray(f) ? pick(f[1]) : '';
        var src = n.map + encodeURI(file);
        var alt = cap || pick(n.titel);
        return '<a href="'+src+'" data-lightbox="'+n.id+'"'+(cap ? ' data-title="'+cap+'"' : '')+'><img src="'+src+'" alt="'+alt+'" loading="lazy"></a>';
      }).join('');
      return '<div class="updates-section" style="margin-top:0;"><h3>'+pick(n.titel)+'</h3>' +
             '<p class="updates-intro">'+pick(n.intro)+'</p><div class="kitten-gallery">'+photos+'</div></div>';
    }).join('');
    holder.querySelectorAll('a,img').forEach(function(el){
      var attr = el.tagName==='A' ? 'href' : 'src';
      el.setAttribute(attr, window.SITE_ROOT + el.getAttribute(attr));
    });
  }

  /* Slideshow in de hero */
  var hero = document.getElementById('heroSlideshow');
  if(hero){
    var slides = hero.querySelectorAll('.slide');
    var dotsContainer = document.getElementById('slideDots');
    var label = dotsContainer.getAttribute('data-label') || 'Foto';
    var current = 0, timer;
    slides.forEach(function(_, i){
      var dot = document.createElement('button');
      dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', label + ' ' + (i + 1));
      dot.addEventListener('click', function(){ goTo(i); });
      dotsContainer.appendChild(dot);
    });
    function goTo(n){
      slides[current].classList.remove('active');
      dotsContainer.children[current].classList.remove('active');
      current = (n + slides.length) % slides.length;
      slides[current].classList.add('active');
      dotsContainer.children[current].classList.add('active');
    }
    function startTimer(){ timer = setInterval(function(){ goTo(current + 1); }, 5000); }
    startTimer();
    hero.addEventListener('mouseenter', function(){ clearInterval(timer); });
    hero.addEventListener('mouseleave', startTimer);
  }
})();
