// main.js
//

(function(w, $, undefined) {
  'use strict';

	var Menu = {

    init: function() {
      Menu.bindEvts();
    },

    bindEvts: function() {
      $('a[href="#"]').on('click', false);
      $('.has-children ul').hover(Menu.highlightRow, Menu.unHighlightRow);
    },

    highlightRow: function() {
      $(this)
        .parent()
        .addClass('highlight-row');
    },

    unHighlightRow: function() {
      $(this)
        .parent()
        .removeClass('highlight-row');
    }
  };

	$(Menu.init);
})(this, jQuery);
