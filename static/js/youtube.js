/* code by https://digipress.info/tech/how-to-include-youtube-vimeo-video-with-autoplay-slick-js/ */
function resizePlayer(iframes, ratio) {
  if (!iframes[0]) return;
  var win = $(".main-slider"),
      width = win.width(),
      playerWidth,
      height = win.height(),
      playerHeight,
      ratio = ratio || 16/9;

  iframes.each(function(){
    var current = $(this);
    if (width / ratio < height) {
      playerWidth = Math.ceil(height * ratio);
      current.width(playerWidth).height(height).css({
        left: (width - playerWidth) / 2,
        top: 0
        });
    } else {
      playerHeight = Math.ceil(width / ratio);
      current.width(width).height(playerHeight).css({
        left: 0,
        top: (height - playerHeight) / 2
      });
    }
  });
}

/* code by https://myscreate.com/youtube-defer/ */
$(function(){
  $('.slideMovie').each(function() {
    var iframe = $('.slideMovie').children('iframe');
    var url = iframe.attr('data-src');
    var id = url.match(/[\/?=]([a-zA-Z0-9_-]{11})[&\?]?/)[1];
    iframe.before('<img src="http://img.youtube.com/vi/'+id+'/mqdefault.jpg" />').remove();
    $('.slideMovie_wrap').on('click', function() {
      $('#startYouTubeMovie').remove();
      $('.slideMovie').after('<div class="slideMovie"><iframe src="https://www.youtube.com/embed/'+id+'?autoplay=1&enablejsapi=1&controls=0&loop=1&iv_load_policy=3" frameborder="0"></iframe></div>').remove();
    });
  });
});