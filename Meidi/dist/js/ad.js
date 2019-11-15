define(['jquery'], function($) {
    function banner(){
        $.ajax({
            type:"get",
            url:"../json/Main.json",
            success:function(arr){
              for(var i = 1 ;i < 9;i++){   
                var node = $(`<a href="" class = "active"><img src="${arr[i].pic}" alt=""></a>`)
                node.appendTo($(".banner #banner #banner-inner #banner-last"))
              }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    function scoll(){      
        $(function(){
            var timer = null;          
            var iNow = 0 ;// 代表当前第几章照片          
            var oBanner = $(".banner #banner #banner-inner #banner-last") 
            var oli = $(".banner #banner #banner-inner #banner-middle ul li")
            // 鼠标移入移出点点
            oli.mouseenter(function(){
                bannerMiddle.removeClass("active")
                oli.css("backgroundColor","");
                
                $(this).css("backgroundColor","white");
                iNow = $(this).index();
                oBanner.animate({left:-iNow * 1200},200)
            })
            oli.mouseleave(function(){
                oli.css("backgroundColor","");
                timer = setInterval(function(){                   
                    iNow++
                    tab()
                    var oimg = $(".banner").find("#banner").find(" #banner-inner").find("#banner-last").find("a")              
                    function tab(){  
                        bannerMiddle.removeClass("active").eq(iNow).addClass("active");       
                        oBanner.animate({left:-iNow * 1200},500,function(){
                            if(iNow == oimg.size()-1){
                                iNow = 0;
                                oBanner.css("left",0)
                                bannerMiddle.eq(0).addClass("active"); 
                                
                            }
                           
                        })
                    }
                },3000);
            })
            // 定时器
            var bannerMiddle = $(".banner #banner-middle ul li")
            timer = setInterval(function(){  
                iNow++
                tab()
                var oimg = $(".banner").find("#banner").find(" #banner-inner").find("#banner-last").find("a")             
                 //    切换
                function tab(){     
                    bannerMiddle.removeClass("active").eq(iNow).addClass("active");            
                    oBanner.animate({left:-iNow * 1200},500,function(){
                        if(iNow == oimg.size()-1){
                            iNow = 0;
                            oBanner.css("left",0)  
                            bannerMiddle.eq(0).addClass("active");                    
                        }
                       
                    })
                }
            },3000);
            // 鼠标移入移出banner
            var bannerLast = $(".banner #banner-last")
            var bannerMiddle = $(".banner #banner-middle ul li")
            var Bleft = $(".banner #banner #banner-inner #left")
            var Bright = $(".banner #banner #banner-inner #right")
            // Bleft.click(function(){
            //     iNow++ 
               
            // })
            Bleft.mouseenter(function(){
                Bleft.css("display","block")
                Bright.css("display","block")
            })
          
            Bright.mouseenter(function(){
                Bright.css("display","block")
                Bleft.css("display","block")
            })
            bannerLast.mouseenter(function(){
                clearInterval(timer);
                Bleft.css("display","block")
                Bright.css("display","block")

            })
            bannerMiddle.mouseenter(function(){
                clearInterval(timer);
            })
            bannerLast.mouseleave(function(){
                Bleft.css("display","none")
                Bright.css("display","none")
                timer = setInterval(function(){     
                    iNow++                 
                    tab()
                    var oimg = $(".banner").find("#banner").find(" #banner-inner").find("#banner-last").find("a")        
                    function tab(){                   
                        oBanner.animate({left:-iNow * 1200},500,function(){
                            if(iNow == oimg.size()-1){
                                iNow = 0;
                                oBanner.css("left",0)
                                bannerMiddle.eq(0).addClass("active"); 
                            }
                           
                        })
                    }
                },3000);
            }) 
               
        })
    }
   
    return{
        banner:banner,
        scoll:scoll
    }
    
});