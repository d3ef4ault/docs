var phoneWidth =  parseInt(window.screen.width);
var initWidth=800;
if(phoneWidth>1200){
    initWidth = 1200;
}
var phoneScale = phoneWidth/initWidth;
var ua = navigator.userAgent;

if (/Android (\d+\.\d+)|UCBrowser/.test(ua) && !/XiaoMi\/\/(\d+\.\d+)/.test(ua)){

    var version = parseFloat(RegExp.$1);
    if(version>2.3 && !/UCBrowser|MiuiBrowser/.test(ua)){
        if(/Windows/.test(ua)){
            document.write('<meta name="viewport" content="width=800, user-scalable=no"/>');
        }else{
            if(phoneScale<1){//pad纵向
                document.write('<meta name="viewport" content="width='+phoneWidth+',minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+'"/>');
            }else{//pad横向
                document.write('<meta name="viewport" content="width=device-width"/>');
            }

        }

    }else{

        if(phoneScale<1){
            //mipad纵向
            document.write('<meta name="viewport" content="width='+phoneWidth+',minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+'"/>');
        }else{//mipad 横向
            if(/UCBrowser|MiuiBrowser/.test(ua)){
                document.write('<meta name="viewport" content="width=800, user-scalable=no,minimal-ui"/>')
                //document.write('<meta name="viewport" content="width=device-width'+',minimum-scale = 1'+', maximum-scale = '+phoneScale+'"/>');
            }else{
                document.write('<meta name="viewport" content="width=device-width"/>');
            }

            /*document.write('<meta name="viewport" content="width='+phoneWidth+',minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+'"/>');*/
        }

    }
}else if(/(iPhone)|(iPad)|(iPod)/.test(ua)){
    document.write('<meta name="viewport" content="width=800, user-scalable=no,minimal-ui"/>');
    document.write('<meta content="yes" name="apple-touch-fullscreen"/>');

    /*document.write('<meta name="viewport" content="width='+phoneWidth+',minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+'"/>');*/
}else{
    document.write('<meta name="viewport" content="width='+phoneWidth+', user-scalable=no"/>');
}
