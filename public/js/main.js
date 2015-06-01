// main.js
//

(function(w, $, undefined) {
  'use strict';

	var Menu = {

    open: false,

    init: function() {
      Menu.bindEvts();
    },

    bindEvts: function() {
      $('a[href="#"]').on('click', false);
      $('#js-toggle-menu').on('click', Menu.toggle);
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
    },

    toggle: function() {
      if( !Menu.open ) {

        $('#js-toggle-menu').addClass('toggle-menu--active');
        Menu.hidePrimaryNav();
        $('#js-secondary-nav').addClass('secondary-nav--hidden');
        $('#js-mega-menu').addClass('mega-menu--open');
        Menu.open = true;

      } else {

        $('#js-toggle-menu').removeClass('toggle-menu--active');
        Menu.showPrimaryNav();
        $('#js-secondary-nav').removeClass('secondary-nav--hidden');
        $('#js-mega-menu').removeClass('mega-menu--open');
        Menu.open = false;

      }
    },

    hidePrimaryNav: function() {

    },

    showPrimaryNav: function() {

    }
  };

	$(Menu.init);
})(this, jQuery);
