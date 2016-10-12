(function(global){
  'use strict';
  
  function Wbar(selector, maxvalue, barlength, barheight) {
    this.wbar = document.querySelector(selector);
    this.maxvalue = maxvalue ? maxvalue : 400;
    this.barlength = barlength ? barlength : 360;
    this.barheight = barheight ? barheight : 18;
    this.init();
  };
  
  Wbar.prototype = {
    'constructor': Wbar,

    'init': function () {
        
        function hasClass (el, class_name) {
          var _check_class_name = new RegExp('(^| )'+class_name+'( |)');
          var el_class_name = el.getAttribute('class');
          return _check_class_name.test(el_class_name);
        };
        
        function startAnimation (bar) {
          var level = 1;
          var value_length = parseInt(bar.style.width,10);
          var step_bar = value_length / 100;
          var anim_width = 0;
          var step = function () {
            anim_width = anim_width + step_bar;
            bar.style.width = anim_width +'px';
            if (level < 100) {
              level++;
              setTimeout(step, 10);
            }
          };
          setTimeout(step, 10);
        };

        var wbar = this.wbar;
        wbar.origin_class = wbar.getAttribute('class');
        var wbar_cont = wbar.querySelectorAll('.wbar');
        var total_bar = document.createElement('div');
        total_bar.setAttribute('class', 'bar');
        var value_bar = document.createElement('div');
        value_bar.setAttribute('class', 'value');
        total_bar.appendChild(value_bar);

        var len = wbar_cont.length;
        for( var i = 0; i < len ; i++ ){
          var wbar_value = wbar_cont[i].querySelector('.wbar-value').childNodes[0].nodeValue;
          var total_clone = total_bar.cloneNode(true);
          var bar_length = this.barlength * wbar_value / this.maxvalue;
          var bar_height = this.barheight;

          total_clone.style['width'] = this.barlength + 'px';
          total_clone.querySelector('.value').style['width'] = bar_length + 'px';

          total_clone.style['height'] = this.barheight + 'px';
          total_clone.querySelector('.value').style['height'] = bar_height + 'px';

          if ( hasClass(wbar_cont[i], 'blue') ) {
            total_clone.firstChild.style['background-image'] = 'linear-gradient(to top, #1991eb 0%, #2ea1f8 100%)';
          } else if ( hasClass(wbar_cont[i], 'purple') ) {
            total_clone.firstChild.style['background-image'] = 'linear-gradient(to top, #7f5be6 0%, #9d8fe3 100%)';
          } else if ( hasClass(wbar_cont[i], 'green') ) {
            total_clone.firstChild.style['background-image'] = 'linear-gradient(to top, #24b00d 0%, #59da44 100%)';
          } else if ( hasClass(wbar_cont[i], 'yellow') ) {
            total_clone.firstChild.style['background-image'] = 'linear-gradient(to top, #fdba00 0%, #f8cf5d 100%)';
          } else if ( hasClass(wbar_cont[i], 'orange') ) {
            total_clone.firstChild.style['background-image'] = 'linear-gradient(to top, #EB4E20 0%, #E4674A 100%)';
          }
          wbar_cont[i].appendChild(total_clone);
        }

        for( var i = 0; i < len ; i++ ){
          var value_bar = wbar_cont[i].querySelector('.value');
          startAnimation(value_bar);
        }
    }

  };

  global.Wbar = Wbar;
//END IIFE PATTERN
})(this);