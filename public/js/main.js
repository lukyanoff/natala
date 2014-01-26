$(function(){

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-18224204-1']);
    _gaq.push(['_trackPageview']);

    (function() {
        var ga = document.createElement('script');
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' :
            'http://www') + '.google-analytics.com/ga.js';
        ga.setAttribute('async', 'true');
        document.documentElement.firstChild.appendChild(ga);
    })();

    $('#thumbs a').TosRUs({
        keys:true,
        caption:false
    });


        $('dl.tabs dt').click(function(){
            $(this)
                .siblings().removeClass('selected').end()
                .next('dd').andSelf().addClass('selected');
        });


    if ($('#vk_comments').length){
        VK.init({apiId: 2931163, onlyWidgets: true});
        VK.Widgets.Comments("vk_comments", {limit: 10, width: "1000", attach: "*"});
    }

    if ($('.fb-comments').length){
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/ru_RU/all.js#xfbml=1&appId=442767162518877";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
})