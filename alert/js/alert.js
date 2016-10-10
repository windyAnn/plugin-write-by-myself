define(['jquery' ,'jquery-ui'],function ($, $ui) {
    function Window() {
        this.cfg = {  //这里一定要用this，指向window这个对象，window的prototype才能继承该属性
            width: 200,
            height: 200,
            content: '',
            handler: null,
            title: '系统提示',
            hasCloseBtn: true,
            closeBtnHandler: null,
            boxSkin: true,
            btnValue: "确定",
            hasMask: false,
            draggable: true,
            handleDraggle: null
        }
    }
    Window.prototype={
        alert: function (cfg) {
        var Cfg = $.extend(this.cfg, cfg);//$.extend()可以将后面的覆盖前面的
            //遮罩
            if(Cfg.hasMask){
                var mask = $('<div class="window-mask"></div>');
                $("body").append(mask);
            }
            //box,弹框
            var box = $('<div class="box-banding">' +
                   '<div class="window-title">'+ Cfg.title + '</div>'  +
                    '<div class="window-content">' + Cfg.content + '</div>'+
                    '<input class="btn" type="button" value=' + Cfg.btnValue + '>'  +
                '</div>');
            $("body").append(box);
            //弹框是否可拖动
            if(Cfg.draggable){
                if(Cfg.handleDraggle){
                    box.draggable({
                        handle: Cfg.handleDraggle
                    });
                } else {
                    box.draggable();
                }
            }
            //按钮的点击事件
            $(".btn").click(function () {
                Cfg.handler&&Cfg.handler();
                $(box).remove();
                mask&&mask.remove();
            });

            //css的设定
            $('.box-banding').css({
                width: Cfg.width + 'px',
                height: Cfg.height + 'px',
                top: Cfg.y||(window.innerHeight-Cfg.height)/2 + 'px',
                left: Cfg.x||(window.innerWidth-Cfg.width)/2 + 'px'
            });
            $('.window-title').css({
                width: Cfg.width + 'px'
            });
            if(Cfg.hasCloseBtn){
                var closeBtn = $('<div class="close-btn"> X </div>');
                $(box).append(closeBtn);
                $(closeBtn).click(function () {
                    Cfg.closeBtnHandler&&Cfg.closeBtnHandler();
                    $(box).remove();
                });
            }
            //换肤
            if(Cfg.boxSkin){
                $('.box-banding').addClass('skin_a');
            }


        },
        confirm: function () {},
        prompt: function () {}
    };
    return  {Window: Window};
});
