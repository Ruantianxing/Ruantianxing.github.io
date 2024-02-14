var data = {
    "list":[
        {   
            "id": 1,
            "text": "全部卡牌",
            "sign1":"iconfont icon-yiwen",
            "speak":"查看所有的卡牌。",
            "url": "./show.html"

        },
        {
            "id": 2,
            "text": "单张卡牌",
            "sign1":"iconfont icon-yiwen",
            "speak":"抽取一张塔罗牌,可以对任何问题做出占卜。",
            "url": "./play1.html"

        },
        {
            "id":3,
            "text": "线性牌镇",
            "sign1":"iconfont icon-yiwen",
            "speak":"从左到右一次对应的是1,2,3,分别表示①代表(过去,现状,你,处境,想法,早上)的情况\n②代表(现在,路径,关系,行为,过程,下午)的情况\n③代表(未来,可能性,伙伴,结果,欲望,晚上)的状况。",
            "url": "./play2.html"
        }
    ]
}

var oul = document.querySelector('ul');
data["list"].forEach((item) => {
    oul.innerHTML += `<li>
                <div>${item.text}</div>
                <i class="${item.sign1}" id="${item.id}"></i>
            </li>`
});
var oli = document.querySelectorAll('ul li');
for(let i = 1; i <= data["list"].length;i++){
    var oi= oli[i-1].querySelector("i")
    var odiv= oli[i-1].querySelector("div")
    oi.onclick = ()=>{
        document.querySelector(".box").style.background = "#171923";
        document.querySelector(".box2").style.zIndex = 100;
        document.querySelector(".box2 header ").innerHTML = `
        ${data["list"][i - 1].text}
        <i class="iconfont icon-guanbi1"></i>
        `;
        document.querySelector(".box2 .card-text span").innerHTML=`
        ${data["list"][i - 1].speak}
        `;
        console.log("点击");
        var oiclose = document.querySelector(".box2 header i");
        var obtnclose = document.querySelector(".box2 footer .btn1");
        var obtnclchoose = document.querySelector(".box2 footer .btn2");
        oiclose.onclick = ()=>{
            document.querySelector(".box2").style.zIndex = -10;
            document.querySelector(".box").style.background = "#1a202c";
        }
        obtnclose.onclick = ()=>{
            document.querySelector(".box2").style.zIndex = -10;
            document.querySelector(".box").style.background = "#1a202c";
        }
        obtnclchoose.onclick =  ()=>{
            location.href = `${data["list"][i - 1].url}`
        }
    }
    odiv.onclick = ()=>{
        location.href = `${data["list"][i - 1].url}`
    }
}