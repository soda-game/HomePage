/* code by https://myscreate.com/youtube-defer/ */
$(function(){
    $('.slideMovie').each(function() {
      var iframe = $(this).children('iframe');
      var url = iframe.attr('data-src');
      var id = url.match(/[\/?=]([a-zA-Z0-9_-]{11})[&\?]?/)[1];
      iframe.before('<img src="http://img.youtube.com/vi/'+id+'/mqdefault.jpg" />').remove();
      $(this).on('click', function() {
        $(this).after('<div class="slideMovie"><iframe src="https://www.youtube.com/embed/'+id+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>').remove();
      });
    });
});