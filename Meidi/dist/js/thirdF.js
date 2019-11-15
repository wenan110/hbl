define(["jquery"],function($){
    function thirdF(){
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
    return {
        thirdF:thirdF
    
     
       
    }
})
