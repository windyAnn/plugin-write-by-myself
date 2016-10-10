require.config({
  paths:{
      'jquery': 'jquery-3.0.0'
  }
});
require(['jquery','alert', 'jquery-ui'],function($,a,$ui){
  // var window = new a.Window();  //这里为什么出错，原因就是你一开始加载就new了一下，他就会直接刷新就有前面的内容
   $('#a').click(function(){
       new a.Window().alert({
           title: '提示',
           content: 'welcome',
           handler: function () {
               alert("click me");
           },
           width: 250,
           height: 250,
           y:200,
           hasCloseBtn: true,
           closeBtnHandler: function () {
               alert("close?");
           },
           btnValue: "OK",
           hasMask: true,
           draggable: true,
           handleDraggle: '.window-title'
       });

   });

});

