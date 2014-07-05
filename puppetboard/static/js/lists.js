// Generated by CoffeeScript 1.6.3
(function() {
  var $;

  $ = jQuery;

  $(function() {});

  $('input.filter-list').parent('div').removeClass('hide');

  $("input.filter-list").on("keyup", function(e) {
    var ev, rex;
    rex = new RegExp($(this).val(), "i");
    $(".searchable li").hide();
    $(".searchable li").filter(function() {
      return rex.test($(this).text());
    }).show();
    if (e.keyCode === 27) {
      $(e.currentTarget).val("");
      ev = $.Event("keyup");
      ev.keyCode = 13;
      $(e.currentTarget).trigger(ev);
      return e.currentTarget.blur();
    }
  });

  $('.event-list-detail dl').hide();
   $('.event-list-detail p').click(function() {
     $(this).parent().find('dl').slideToggle();
   });

}).call(this);
