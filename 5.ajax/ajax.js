function  ajax(url,fnSucc,fnFailed){
    //1.创建Ajax对象
        var  oAjax=null;
        if(window.ActiveXObject){
            oAjax=new ActiveXObject("Microsoft.XMLHTTP");
        }else{
            oAjax=new XMLHttpRequest();
        }

        //2.链接服务器
        oAjax.open("GET",url,true);
        //3.发送请求
        oAjax.send(null);

    //4.接收服务器的返回
        oAjax.onreadystatechange=function(){
                if(oAjax.readyState==4){//完成
                    if(oAjax.status==200){ //成功
                        fnSucc(oAjax.responseText);
                    }else{
                        if(fnFailed){
                            fnFailed(oAjax.status);
                        }
                    }
                }
        };


}
