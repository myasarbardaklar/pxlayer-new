'use strict'

$(document).ready(function () {
  $('.pxl-bottombar .pxl-bottombar__item').click(function () {
    $(this).parent().find('.pxl-bottombar__item').removeClass('active')
    $(this).addClass('active')
  })

  $('[data-slide-next]').click(function (e) {
    e.preventDefault()

    let nextItemValue = $(this).data('slide-next')

    // push the current item
    let $currentItem = $(this).parent('.w-slide-nav__item')
    $currentItem.css('transform', 'translateX(-100%)')
    $currentItem.removeClass('w-slide-nav__item--activated')

    // pull the next item
    let $nextItem = $currentItem.siblings(
      '.w-slide-nav__item[data-slide="' + nextItemValue + '"]'
    )
    $nextItem.css('transform', 'none')
    $nextItem.addClass('w-slide-nav__item--activated')

    // solving click animation bug
    $currentItem.parent('.w-slide-nav__wrapper').css('pointer-events', 'none')
    $currentItem.one(
      'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
      function () {
        $currentItem.parent('.w-slide-nav__wrapper').css('pointer-events', '')
      }
    )

    // set the height of wrapper
    $currentItem
      .parent('.w-slide-nav__wrapper')
      .css('height', $nextItem.outerHeight())
  })
  $('[data-slide-prev]').click(function (e) {
    e.preventDefault()

    let prevItemValue = $(this).data('slide-prev')

    // push the current item
    let $currentItem = $(this).parent('.w-slide-nav__item')
    $currentItem.css('transform', '')
    $currentItem.removeClass('w-slide-nav__item--activated')

    // pull the previous item
    let $prevItem = $currentItem.siblings(
      '.w-slide-nav__item[data-slide="' + prevItemValue + '"]'
    )
    $prevItem.css('transform', 'none')
    $prevItem.addClass('w-slide-nav__item--activated')

    // solving click animation bug
    $currentItem.parent('.w-slide-nav__wrapper').css('pointer-events', 'none')
    $currentItem.one(
      'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
      function () {
        $currentItem.parent('.w-slide-nav__wrapper').css('pointer-events', '')
      }
    )

    // set the height of wrapper
    $currentItem
      .parent('.w-slide-nav__wrapper')
      .css('height', $prevItem.outerHeight())
  })

  $('[data-drawer-navigation-trigger]').click(function (e) {
    e.preventDefault()

    let drawerNavigationValue = $(this).data('drawer-navigation-trigger')
    let $drawerNavigation = $(
      `.w-drawer-navigation[data-drawer-navigation="${drawerNavigationValue}"]`
    )

    if ($drawerNavigation) {
      $drawerNavigation.addClass('w-drawer-navigation--activated')
      $('html').css('overflow', 'hidden')
    } else {
      alert('Drawer navigation not found.')
    }
  })

  $('.w-drawer-navigation').click(function (e) {
    let $target = $(e.target)

    if (
      !$target.is('.w-drawer-navigation__wrapper') &&
      !$target.is('.w-drawer-navigation__wrapper *')
    ) {
      $(this).removeClass('w-drawer-navigation--activated')
      $('html').css('overflow', '')
    }
  })
  $('.w-drawer-navigation__close').click(function (e) {
    e.preventDefault()

    let $drawerNavigation = $(this).parents('.w-drawer-navigation')

    $drawerNavigation.removeClass('w-drawer-navigation--activated')
    $('html').css('overflow', '')
  })
})
