var rssContent = 'tigertigertiger';
$('.marquee').html(rssContent);

/*Start of Plugin*/
(function( $ ) {
$.fn.marquee = function(params){
    params = $.extend( {direction : 'left',duration : '2000', delayStart : '0'}, params);
    var duration = parseInt(params.duration);
    var delay = parseInt(params.delayStart);
    
    var par = $(this);
    par.wrapInner('<span></span>');
    
    var parCh = par.children('span');
    var leftMargin = parCh.css('margin-left').replace('px','');
    var rightMargin = par.innerWidth()-leftMargin-parCh.width();
    
    function dirRight(){
        parCh.css({'margin-left':''+leftMargin+'px'});
        parCh.animate({
              'margin-left':''+rightMargin+'px'
            },duration,
              'linear',
            function(){
              dirRight();
            });
    }
    
    function dirLeft(){
        parCh.css({'margin-left':''+rightMargin+'px'});
        parCh.animate({
              'margin-left':''+leftMargin+'px'
            },duration,
              'linear',
            function(){
              dirLeft();
            });
    }
    
    if(params.direction == 'right'){
        setTimeout(function(){dirRight()},delay);
    }
    if(params.direction == 'left'){
        parCh.css({'margin-left':''+rightMargin+'px'});
        setTimeout(function(){dirLeft()},delay);
    }
    
    $(window).resize(function(){
        rightMargin = par.innerWidth()-leftMargin-parCh.width();
    });
};}( jQuery ));
/*End of Plugin*/

/*Call plugin*/
$('.marquee').marquee({
    //Set the direction of marquee
    'direction':'left',
    
    //delay the start of marquee
    'delayStart':'0',
    
    //Set the duration of marquee in millisecond
    'duration':'8000'
});