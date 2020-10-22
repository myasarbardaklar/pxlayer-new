'use strict'

$(document).ready(function() {
  $('.pxl-bottombar .pxl-bottombar__item').click(function() {
    $(this)
      .parent()
      .find('.pxl-bottombar__item')
      .removeClass('active')
    $(this).addClass('active')
  })
})
