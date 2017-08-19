/**
 * Created by Administrator on 2017/5/1 0001.
 */

$(function(){

    /*<!--顶部导航栏隐藏效果-->*/

    $("#navigation1 #ul1 #MV").mouseover(function(){
        $("#navigation1 #ul1 #MV .ul1a").show();
    })
    $("#navigation1 #ul1 #MV").mouseleave(function(){
        $("#navigation1 #ul1 #MV .ul1a").hide();
    })
    $("#navigation1 #ul2 #dn").mouseover(function(){
        $("#navigation1 #ul2 #dn .ul2dn").show();
    })
    $("#navigation1 #ul2 #dn").mouseleave(function(){
        $("#navigation1 #ul2 #dn .ul2dn").hide();
    })



    //顶部导航栏滚动效果
    $(window).scroll(function(){
//        $(window).scrollTop()获取或设置匹配元素的滚动条的垂直高度位置
//        console.log($(document).scrollTop());
        var scrollTop=$(document).scrollTop();
//        console.log(scrollTop);
        if(scrollTop>50){
            $("#navigation").css({
                position:"fixed",
                top:"0",
                "margin":"auto",
                "z-index":999,
                width:"100%"
            })
        }else{
            $("#navigation").css({
                position:"relative",
                "z-index":1
            })
        }
    })

   //搜索框聚焦和离开
    $(".text").click(function(){
         $("#inputa").css("backgroundColor","#fff")
         $(".text").css("backgroundColor","#fff")
         $("#butt").css("backgroundColor","#fff")

    })
    $(".text").blur(function(){
        $("#inputa").css("backgroundColor","#ccc")
        $(".text").css("backgroundColor","#ccc")
        $("#butt").css("backgroundColor","#ccc")
    })






    //滚动小人
    $(window).scroll(function(){
//        $(window).scrollTop()获取或设置匹配元素的滚动条的垂直高度位置
//        console.log($(document).scrollTop());
        var scrollTop=$(document).scrollTop();
//        console.log(scrollTop);
        if(scrollTop>500){
            $("#gun").show(1000);
        }else{
            $("#gun").hide(1000);
        }
    })
//    点击小人返回顶部
    $("#gun").click(function(){
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    })




    //第一轮播图
    //自动播放
    var nowIndex=0;
//一个li的长度
    var imgLen=$("#wheel .wheelul li").length;
//自动播放定时器调用函数
    var timera=setInterval(function(){
//    判断索引  走到最后时回到原点
        if(nowIndex<imgLen-1){
            nowIndex++;
        }else{
            nowIndex=0;
        }
        chang(nowIndex);
    },4000);
//自动播放函数
    function chang(index){
        var target=index*403;
//        ul在改变自身的位置
        $("#wheel .wheelul").animate({marginTop:"-"+target+"px"},500);
//        对应的文字发生变变化
        $("#wheel .wheelol li a").eq(index).css("color","#35d7dc");
        $("#wheel .wheelol li a").eq(index-1).css("color","#fff");
        $("#wheel .wheelol li a").eq(index+1).css("color","#fff");
    }

    function  again(){
        timera=setInterval(function(){
//    判断索引  走到最后时回到原点
            if(nowIndex<imgLen-1){
                nowIndex++;
            }else{
                nowIndex=0;
            }
            chang(nowIndex);
        },4000);
    }



    //对应的文字悬浮时 清定时轮播 离开后恢复 对应文字悬浮时图片变化
    $(".wheelol1>li").mouseover(function(){
        clearInterval(timera);
        nowIndex=$(this).index();
        chang(nowIndex)
    })
    $(".wheelol1>li").mouseleave(function(){
        again();
    })


    //对图悬浮时清定时器 离开回复
    $("#wheel .wheelul li").mouseover(function(){
        clearInterval(timera);
    })
    $("#wheel .wheelul li").mouseleave(function(){
       again();
    });





    //周榜
//
//    var tia=0;
////一个li的长度
//    var tib=$(".timer1 ul li").length;
//    //获取当前是周几
//    var  t=new Date().getDay()
////自动播放定时器调用函数
//    var timeraa=setInterval(function(){
////    判断索引  走到最后时回到原点
//        if(tia<tib-1){
//            tia++;
//        }else{
//            tia=0;
//        }
//        ti(tia);
//    },10000);
////自动播放函数
//    function ti(index){
//        var timeti=index*580;
////        ul在改变自身的位置
//        $("#timer .timer2 ul").animate({marginTop:"-"+timeti+"px"},100);
////        对应的周几发生变化
//        $("#timer .timer1 ul li").eq(index).css("backgroundColor","#35dcd7")
//        $("#timer .timer1 ul li").eq(index-1).css("backgroundColor","#eee")
//        $("#timer .timer1 ul li").eq(index+1).css("backgroundColor","#eee")
//    }
//    function  tii(){
//        timeraa=setInterval(function(){
////    判断索引  走到最后时回到原点
//            if(tia<tib-1){
//                tia++;
//            }else{
//                tia=0;
//            }
//            ti(tia);
//        },10000);
//    }
//    $(".timer1a>li").mouseover(function(){
//        clearInterval(timeraa);
//        tia=$(this).index();
//        ti(tia)
//    })
//    $(".timer1a>li").mouseleave(function(){
//        tii();
//    })



//    移动时触发
    $(".timer1a li").click(function(){
        $(this).addClass("active").siblings().removeClass("active")
        $(".bud").hide().eq($(".timer1a li").index(this)).show();
    })
    //每天变一次
    //获取当前是周几
    var  t=new Date().getDay()
    if(t==1){
        $(".timer1a .ac1").css("background","#35d7dc")
            $(".bud1").show().siblings().hide()
    }
    if(t==2){
        $(".timer1a .ac2").css("background","#35d7dc")
        $(".bud2").show().siblings().hide()
    }
    if(t==3){
        $(".timer1a .ac3").css("background","#35d7dc")
        $(".bud3").show().siblings().hide()
    }
    if(t==4){
        $(".timer1a .ac4").css("background","#35d7dc")
        $(".bud4").show().siblings().hide()
    }
    if(t==5){
        $(".timer1a .ac5").css("background","#35d7dc")
        $(".bud5").show().siblings().hide()
    }
    if(t==6){
        $(".timer1a .ac5").css("background","#35d7dc")
        $(".bud5").show().siblings().hide()
    }
    if(t==0){
        $(".timer1a .ac5").css("background","#35d7dc")
        $(".bud5").show().siblings().hide()
    }

    //<!--周榜冠军轮播图-->
    var weeka=0;
//一个li的长度
    var weekb=$("#week .weeka ul li").length;
//自动播放定时器调用函数
    var timerb=setInterval(function(){
//    判断索引  走到最后时回到原点
        if(weeka<weekb-1){
            weeka++;
        }else{
            weeka=0;
        }
        fn(weeka);
    },2000);
//自动播放函数
    function fn(index){
        var weekh=index*350;
//        ul在改变自身的位置
        $("#week .weekb ul").animate({marginTop:"-"+weekh+"px"},10);
        $("#week .weekc ul").animate({marginTop:"-"+weekh+"px"},10);
//        对应的文字发生变化
        $("#week .weeka ul li a").eq(index).css("color","#35d7dc");
        $("#week .weeka ul li a").eq(index-1).css("color","#000");
        $("#week .weeka ul li a").eq(index+1).css("color","#000");
    }




    <!--一周新歌-->

    function song(index){
        var songa=index*406;
//        ul在改变自身的位置
        $("#song .songb ul").animate({marginTop:"-"+songa+"px"},10);
    }
    var songaa=0;
    var songab=$("#song .songb ul li").length;

    $("#t10").click(function(){
        if(songaa<(songab-1)){
            songaa++;
        }else{
            songaa=0;
        }
        song(songaa);
    })

    $("#t20").click(function(){
        if(songaa>0){
            songaa--;
        }else{
            songaa=songab-1;
        }
        song(songaa);
    })







    //<!--周榜吉尼斯-->
    function jn(index){
        var jnss=index*1220;
//        ul在改变自身的位置
        $("#jns .jnsb ul").animate({marginRight:"-"+jnss+"px"},10);
    }
    var jnssa=0;
    var jnssb=$("#jns .jnsb ul li").length;
    $("#lt").click(function(){
        if(jnssa<(jnssb-1)){
            jnssa++;
        }else{
            jnssa=0;
        }
        jn(jnssa);
    })

//    点击左边按钮
    $("#gt").click(function(){
        if(jnssa>0){
            jnssa--;
        }else{
            jnssa=jnssb-1;
        }
        jn(jnssa)
    })


    $("#jns .jnsb .jnsbc1").mouseover(function(){
        $("#jns .jnsb  #jnsb1").show()
    })
    $("#jns .jnsb .jnsbc1").mouseleave(function(){
        $("#jns .jnsb #jnsb1").hide()
    })
    $("#jns .jnsb .jnsbc2").mouseover(function(){
        $("#jns .jnsb  #jnsb2").show()
    })
    $("#jns .jnsb .jnsbc2").mouseleave(function(){
        $("#jns .jnsb #jnsb2").hide()
    })
    $("#jns .jnsb .jnsbc3").mouseover(function(){
        $("#jns .jnsb  #jnsb3").show()
    })
    $("#jns .jnsb .jnsbc3").mouseleave(function(){
        $("#jns .jnsb #jnsb3").hide()
    })
    $("#jns .jnsb .jnsbc4").mouseover(function(){
        $("#jns .jnsb  #jnsb4").show()
    })
    $("#jns .jnsb .jnsbc4").mouseleave(function(){
        $("#jns .jnsb #jnsb4").hide()
    })
    $("#jns .jnsb .jnsbc5").mouseover(function(){
        $("#jns .jnsb  #jnsb5").show()
    })
    $("#jns .jnsb .jnsbc5").mouseleave(function(){
        $("#jns .jnsb #jnsb5").hide()
    })
    $("#jns .jnsb .jnsbc6").mouseover(function(){
        $("#jns .jnsb  #jnsb6").show()
    })
    $("#jns .jnsb .jnsbc6").mouseleave(function(){
        $("#jns .jnsb #jnsb6").hide()
    })
    $("#jns .jnsb .jnsbc7").mouseover(function(){
        $("#jns .jnsb  #jnsb7").show()
    })
    $("#jns .jnsb .jnsbc7").mouseleave(function(){
        $("#jns .jnsb #jnsb7").hide()
    })
    $("#jns .jnsb .jnsbc8").mouseover(function(){
        $("#jns .jnsb  #jnsb8").show()
    })
    $("#jns .jnsb .jnsbc8").mouseleave(function(){
        $("#jns .jnsb #jnsb8").hide()
    })


    $("#jns .jnsb .jnsbc1").mouseover(function(){
        $("#jns .jnsb  #jnsb1a").show()
    })
    $("#jns .jnsb .jnsbc1").mouseleave(function(){
        $("#jns .jnsb #jnsb1a").hide()
    })
    $("#jns .jnsb .jnsbc2").mouseover(function(){
        $("#jns .jnsb  #jnsb2a").show()
    })
    $("#jns .jnsb .jnsbc2").mouseleave(function(){
        $("#jns .jnsb #jnsb2a").hide()
    })
    $("#jns .jnsb .jnsbc3").mouseover(function(){
        $("#jns .jnsb  #jnsb3a").show()
    })
    $("#jns .jnsb .jnsbc3").mouseleave(function(){
        $("#jns .jnsb #jnsb3a").hide()
    })
    $("#jns .jnsb .jnsbc4").mouseover(function(){
        $("#jns .jnsb  #jnsb4a").show()
    })
    $("#jns .jnsb .jnsbc4").mouseleave(function(){
        $("#jns .jnsb #jnsb4a").hide()
    })
    $("#jns .jnsb .jnsbc5").mouseover(function(){
        $("#jns .jnsb  #jnsb5a").show()
    })
    $("#jns .jnsb .jnsbc5").mouseleave(function(){
        $("#jns .jnsb #jnsb5a").hide()
    })
    $("#jns .jnsb .jnsbc6").mouseover(function(){
        $("#jns .jnsb  #jnsb6a").show()
    })
    $("#jns .jnsb .jnsbc6").mouseleave(function(){
        $("#jns .jnsb #jnsb6a").hide()
    })
    $("#jns .jnsb .jnsbc7").mouseover(function(){
        $("#jns .jnsb  #jnsb7a").show()
    })
    $("#jns .jnsb .jnsbc7").mouseleave(function(){
        $("#jns .jnsb #jnsb7a").hide()
    })
    $("#jns .jnsb .jnsbc8").mouseover(function(){
        $("#jns .jnsb  #jnsb8a").show()
    })
    $("#jns .jnsb .jnsbc8").mouseleave(function(){
        $("#jns .jnsb #jnsb8a").hide()
    })





    /*<!--合作伙伴-->*/
    $("#he .heh1a").mouseover(function(){
        $("#he .heh1a #heh1").show()
    })
    $("#he .heh1a").mouseleave(function(){
        $("#he .heh1a #heh1").hide()
    })
    $("#he .heh1b").mouseover(function(){
        $("#he .heh1b #heh2").show()
    })
    $("#he .heh1b").mouseleave(function(){
        $("#he .heh1b #heh2").hide()
    })

















})