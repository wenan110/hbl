define(["jquery"],function($){
    function SecondF(){
        $.ajax({
            type:"get",
            url:"../json/Main.json",
            success:function(arr){
                var node = $(`<img src="${arr[0].pic}" alt="">`)
                node.appendTo($(".AD #AD"));
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    function SecondC(){
        $.ajax({
            type:"get",
            url:"../json/Second.json",
            success:function(arr){
                for(var i = 0;i < arr.length;i++){
                    var node = $(`
                <li>
                <a href="http://localhost:9999/third.html"><img src="${arr[i].pic}" alt=""></a>
                <div>${arr[i].maney}<span>${arr[i].title1}</span></div>
                <div><a href="http://localhost:9999/third.html">${arr[i].title2}</a></div>
                <div>${arr[i].title3}</div>
                <div>${arr[i].title4}</div>
                <div><span class="iconfont">&#xe63a;</span><span>购物车</span><input type="CheckBox"><span>对比</span></div>
            </li>
                
                `)
                node.appendTo($(".surface ul"));
                }
                
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    return {
        SecondF:SecondF,
        SecondC:SecondC
     
       
    }
})