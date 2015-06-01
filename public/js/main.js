// main.js
//

(function(w, $, undefined) {
  'use strict';

	var Menu = {

    init: function() {

      Menu.bindEvts();
    },

    bindEvts: function() {
      $('.has-children ul').hover(Menu.highlightRow, Menu.unHighlightRow);
    },

    highlightRow: function() {
      $(this)
        .parent()
        .addClass('hovered-row');
    },

    unHighlightRow: function() {
      $(this)
        .parent()
        .removeClass('hovered-row');
    }
  };

	$(Menu.init);
})(this, jQuery);
