$(document).ready(function(){
    
    function m(event){
        var X = $("#wrap").width();
        var Y = $("#wrap").height();
        
        if(event.clientX){
            var x = event.clientX;
        }else{
            var x = event.clientLeft;
        }
        if(event.clientY){
            var y = event.clientY;
        }else{
            var y = event.clientTop;
        }
        
        var mx = x/X*100;
        var my = y/Y*100;
        
        var xdeg = 30/49*(mx-50);
        var ydeg = -1*30/49*(my-50);
        
        $("#txt3").css("transform","translate(-50%,-50%) rotateX("+ydeg+"deg) rotateY("+0.4*xdeg+"deg)")
        $("#txt1").css({
            transform:"translate(-50%,-50%) rotateX("+ydeg+"deg) rotateY("+0.4*xdeg+"deg)",
            marginLeft: 0.5*xdeg+"px",
            marginTop: 0.5*ydeg+"px",
        })
        $("#txt2").css({
            transform:"translate(-50%,-50%) rotateX("+ydeg+"deg) rotateY("+0.4*xdeg+"deg)",
            marginLeft: -0.5*xdeg+"px",
            marginTop: -0.5*ydeg+"px",
        })
    }
    
    $(document).mousemove(function(){
        m(event);
    });
    
    
    
    
});




