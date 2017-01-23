jQuery.fn.extend({
    addCaption: function(imgCaption) {
        return this.each(function() {
            var img = $(this);
            var imgClass = img.attr('class');
            var imgStyle = img.attr('style');
            var imgAlt = img.attr('alt');

            img.removeAttr('class');
            img.removeAttr('style');
            
            if (imgCaption == undefined) {
                imgCaption = imgAlt;
            }
      
            img.wrap('<figure></figure>'); 
            img.after('<figcaption>' + imgCaption + '</figcaption>');
            img.parent('figure').attr('class', imgClass);
            img.parent('figure').attr('style', imgStyle);
    });
  }
});