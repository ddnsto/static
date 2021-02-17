function is_weixin(){
    var ua = navigator.userAgent.toLowerCase(); //判断浏览器的类型
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;
    } else {
        return false;
    }
}
if (!is_weixin()) { // 如果不是微信内置浏览器，就动态跳转到以下页面
    window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx625c717c569120b22&redirect_uri=xxx&response_type=code&scope=snsapi_base&state=hyxt#wechat_redirect';
}
//*************///

function qstz() {


     var a, b, c, d, e, f,
    a = document.getElementById("qstz01").value;
    b = document.getElementById("qstz02").value;
    c = document.getElementById("qstz03").value;                 
    d = document.getElementById("qstz04").value;
    e = document.getElementById("qstz05").value;
    f = document.getElementById("qstz06").value;

      if((parseFloat(c)+parseFloat(d))/2-(parseFloat(e)+parseFloat(f)-parseFloat(a)-parseFloat(b))/(parseFloat(b)-parseFloat(a))*((parseFloat(d)-parseFloat(c))/2)<parseFloat(c)) {
      document.getElementById("qstz07").value = parseFloat(c).toFixed(0);
    } else if(((parseFloat(c)+parseFloat(d))/2-(parseFloat(e)+parseFloat(f)-parseFloat(a)-parseFloat(b))/(parseFloat(b)-parseFloat(a))*((parseFloat(d)-parseFloat(c))/2))>parseFloat(d)) {
      document.getElementById("qstz07").value = parseFloat(d).toFixed(0);
    } else {document.getElementById("qstz07").value = ((parseFloat(c)+parseFloat(d))/2-(parseFloat(e)+parseFloat(f)-parseFloat(a)-parseFloat(b))/(parseFloat(b)-parseFloat(a))*((parseFloat(d)-parseFloat(c))/2)).toFixed(0);
    } 

      if((parseFloat(c)+parseFloat(d))/2-(parseFloat(e)+parseFloat(f)-parseFloat(a)-parseFloat(b))/(parseFloat(b)-parseFloat(a))*((parseFloat(d)-parseFloat(c))/2)<parseFloat(c)) {
      document.getElementById("qstz08").value = parseFloat(c).toFixed(0);
    } else if(((parseFloat(c)+parseFloat(d))/2-(parseFloat(e)+parseFloat(f)-parseFloat(a)-parseFloat(b))/(parseFloat(b)-parseFloat(a))*((parseFloat(d)-parseFloat(c))/2))>parseFloat(d)) {
      document.getElementById("qstz08").value = parseFloat(d).toFixed(0);
    } else 
    {
      document.getElementById("qstz08").value = ((parseFloat(c)+parseFloat(d))/2-(parseFloat(e)+parseFloat(f)-parseFloat(a)-parseFloat(b))/(parseFloat(b)-parseFloat(a))*((parseFloat(d)-parseFloat(c))/2)).toFixed(0);
    } 
};

//*****************//
function stls() {

    var a, b, c, d, e, x, y, z;
    a = document.getElementById("stl01").value;
    b = document.getElementById("stl02").value;
    c = document.getElementById("stl03").value;
    d = document.getElementById("stl04").value;
    document.getElementById("stl05").value = Math.abs(((parseFloat(d)-parseFloat(c))+((parseFloat(b)-parseFloat(a)))*2)/4).toFixed(0);
    document.getElementById("stl06").value = Math.abs((parseFloat(d)-parseFloat(c)-(((parseFloat(d)-parseFloat(c))+(parseFloat(b)-parseFloat(a))*2)/4)*2)/2).toFixed(0);

    
    if((parseFloat(d)-parseFloat(c))/2>=parseFloat(a)-parseFloat(b)) {
      document.getElementById("stl07").value = '凸轮外推外倾调大(分)' 
    } else {document.getElementById("stl07").value = '凸轮内收外倾调小(分)' 
    }

    if((((parseFloat(d)-parseFloat(c))+(parseFloat(b)-parseFloat(a))*2)/4)*2>(parseFloat(d)-parseFloat(c))) {
      document.getElementById("stl08").value  = '凸轮外推外倾调大(分)' 
    } else {document.getElementById("stl08").value =  '凸轮内收外倾调小(分)' 
    }


};


function stlx() {


    var a, b, c, d;
    a = document.getElementById("stlx01").value;
    b = document.getElementById("stlx02").value;
    c = document.getElementById("stlx03").value;
    d = document.getElementById("stlx04").value;
    document.getElementById("stlx05").value = Math.abs(((parseFloat(d)-parseFloat(c))+((parseFloat(b)-parseFloat(a)))*2)/4).toFixed(0);
    document.getElementById("stlx06").value = Math.abs((parseFloat(d)-parseFloat(c)-(((parseFloat(d)-parseFloat(c))+(parseFloat(b)-parseFloat(a))*2)/4)*2)/2).toFixed(0);

    
    if((parseFloat(d)-parseFloat(c))/2>=parseFloat(a)-parseFloat(b)) {
      document.getElementById("stlx07").value = '凸轮内收外倾调大(分)' 
    } else {
      document.getElementById("stlx07").value = '凸轮外推外倾调小(分)' 
    }
 
    if((((parseFloat(d)-parseFloat(c))+(parseFloat(b)-parseFloat(a))*2)/4)*2>(parseFloat(d)-parseFloat(c))) {
      document.getElementById("stlx08").value  = '凸轮内收外倾调大(分)' 
    } else {
      document.getElementById("stlx08").value =  '凸轮外推外倾调小(分)' 
    }
};
//*************//

function pkjj() {


    var a, b, c, d, e, x, y, z;
    a = document.getElementById("pk01").value;
    b = document.getElementById("pk02").value;
    c = document.getElementById("pk03").value;
    d = document.getElementById("pk04").value;
    e = document.getElementById("pk05").value;
    x = document.getElementById("pk06").value;
    document.getElementById("pk05").value = Math.abs(((parseFloat(b) - parseFloat(a))) / 15 - ((parseFloat(c) - parseFloat(d))) / 25 / 2).toFixed(1);
    document.getElementById("pk06").value = Math.abs(((parseFloat(b) - parseFloat(a))) / 15 + ((parseFloat(c) - parseFloat(d))) / 25 / 2).toFixed(1);


    if((((parseFloat(b) - parseFloat(a))) / 15 - ((parseFloat(c) - parseFloat(d))) / 25 / 2).toFixed(1)>=0) {
      document.getElementById("pk07").value = '增加(毫米)' 
    } else {
      document.getElementById("pk07").value = '减少(毫米)' 
    }

    if((((parseFloat(b) - parseFloat(a))) / 15 + ((parseFloat(c) - parseFloat(d))) / 25 / 2).toFixed(1)>=0) {
      document.getElementById("pk08").value  = '增加(毫米)' 
    } else {
      document.getElementById("pk08").value =  '减少(毫米)' 
    }
    
};
//************//
function nllz() {

    var a, b, c, d,
    a = document.getElementById("nllz01").value;
    b = document.getElementById("nllz02").value;
    c = document.getElementById("nllz03").value;
    d = document.getElementById("nllz04").value;
    document.getElementById("nllz05").value = ((parseFloat(a) + parseFloat(c))/40).toFixed(1);
    document.getElementById("nllz06").value = ((parseFloat(a) + parseFloat(d))/40).toFixed(1);
    document.getElementById("nllz07").value = ((parseFloat(b) + parseFloat(c))/40).toFixed(1);
    document.getElementById("nllz08").value = ((parseFloat(b) + parseFloat(d))/40).toFixed(1);

  
    
};


function nlly() {

    var a, b, c, d,
    a = document.getElementById("nlly01").value;
    b = document.getElementById("nlly02").value;
    c = document.getElementById("nlly03").value;
    d = document.getElementById("nlly04").value;
    document.getElementById("nlly05").value = ((parseFloat(a) + parseFloat(d))/40).toFixed(1);
    document.getElementById("nlly06").value = ((parseFloat(a) + parseFloat(c))/40).toFixed(1);
    document.getElementById("nlly07").value = ((parseFloat(b) + parseFloat(d))/40).toFixed(1);
    document.getElementById("nlly08").value = ((parseFloat(b) + parseFloat(c))/40).toFixed(1);

    
    
    
};

