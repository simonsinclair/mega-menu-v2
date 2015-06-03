// main.js
//

(function(w, $, undefined) {
  'use strict';

	var Menu = {

    open: false,
    $primaryNav: '',
    $secondaryNav: '',

    init: function() {
      Menu.$primaryNav = $('#js-primary-nav');
      Menu.$secondaryNav = $('#js-secondary-nav');
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
        Menu.togglePrimaryNav(16);
        Menu.toggleSecondaryNav(16);
        $('#js-secondary-nav').addClass('secondary-nav--hidden');
        $('#js-mega-menu').addClass('mega-menu--open');
        Menu.open = true;

      } else {

        $('#js-toggle-menu').removeClass('toggle-menu--active');
        Menu.togglePrimaryNav(16);
        Menu.toggleSecondaryNav(16);
        $('#js-secondary-nav').removeClass('secondary-nav--hidden');
        $('#js-mega-menu').removeClass('mega-menu--open');
        Menu.open = false;

      }
    },

    // TURD
    togglePrimaryNav: function(delay) {
      var $anchors     = $('a', Menu.$primaryNav);
      var currAnchor   = 0;
      var totalAnchors = 11;

      function toggleAllAnchorsWithDelay() {
        var anchor = $anchors[ currAnchor ];

        setTimeout( function() {
          if( Menu.open ) {
            $(anchor).addClass('hidden');
          } else {
            $(anchor).removeClass('hidden');
          }

          currAnchor++;

          if( currAnchor < totalAnchors ) {
            toggleAllAnchorsWithDelay();
          }
        }, delay );
      }

      toggleAllAnchorsWithDelay();
    },

    toggleSecondaryNav: function(delay) {
      var $anchors     = $('a', Menu.$secondaryNav);
      var currAnchor   = 0;
      var totalAnchors = 6;

      function toggleAllAnchorsWithDelay() {
        var anchor = $anchors[ currAnchor ];

        setTimeout( function() {
          if( Menu.open ) {
            $(anchor).addClass('hidden');
          } else {
            $(anchor).removeClass('hidden');
          }

          currAnchor++;

          if( currAnchor < totalAnchors ) {
            toggleAllAnchorsWithDelay();
          }
        }, delay );
      }

      toggleAllAnchorsWithDelay();
    }
  };

	$(Menu.init);
})(this, jQuery);
