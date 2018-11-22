/**
 * Created by silence on 2017/12/20.
 */
$(function(){

    $(window).on('resize',function(){
        var width=$(window).width();
        var fontSize=(width/640)*100;

        $('html').css('font-size',fontSize)
    }).trigger('resize')

})