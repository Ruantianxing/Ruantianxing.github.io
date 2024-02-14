// 随机产生
var i,data
class test{
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
    }
    
    async get(){
        await fetch("https://yapi.pro/mock/232862/xiaobaobao")
        .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject({
                status: res.status,
                statusText: res.statusText
            });
        }
        })
        .then(res=>{
            i = this.getRandomIntInclusive(0,76)
            console.log(i);
            data = res['tarot']
            document.querySelector(".box section .box1")
            .innerHTML = `
            <img src="https://www.allenluuu.com//static/random-tarot/card-backs/card_back_4.webp" alt="" class="font">
            <img src="${data[i].image}" alt="" class="back">
            `
        })
        .catch(res=>{
            console.log("error",res);
        })
        await this.turn()
        await this.click()
    }
    turn(){
        var oturn = document.querySelector(".box section .box1")
        var obox2 = document.querySelector(".box section .box1")
        var i1 = this.getRandomIntInclusive(0,1)
        console.log(i1);
        if(i1) {
            document.querySelector(".box .sec2 .box1 .back")
            .style.transform = "rotateX(180deg)";
        }
        oturn.onclick = ()=>{
            oturn.style.transform = "rotateY(180deg)"
            obox2.onclick = ()=>{
                document.getElementById('cover').style.display = 'block';
                document.querySelector(".box2").style.display = "flex";
                document.querySelector(".box2").style.zIndex = 100;
                // document.querySelector(".box").style.background = "#171923";
                // console.log(i);
                document.querySelector(".box2 header").innerHTML = `
                ${data[i].name}
                <i class="iconfont icon-guanbi1"></i>`
                let a = data[i].interpretation.split("逆位:")[0]
                let b = data[i].interpretation.split("逆位:")[1]
                document.querySelector(".box2 section").innerHTML = `
                <img src="${data[i].image}" alt="">
                <div class="text">
                    <div class="card-text">
                        <h2>简介:</h2>
                        <span>${data[i].description}</span>
                        <p id="move">${data[i].description}</p>
                    </div>
                    <div class="card-pros">
                        <h2>正位:</h2>
                        <span>${a}</span>
                    </div>
                        <div class="card-cons">
                            <h2>逆位:</h2>
                            <span>${b}</span>
                        </div>
                    </div>`
                    // document.querySelector(".box p").innerHTML = `<p id="move">${data[i].description}</p>` 
                document.querySelector(".box2 header i").onclick = (event)=>{
                    document.getElementById('cover').style.display = 'none';
                    document.querySelector(".box2").style.display = "none";
                    // document.querySelector(".box").style.background = "#2D3748";
                    // event.stopPropagation();//阻止冒泡
                }
                document.querySelector(".box2 footer button").onclick =(event)=>{
                    document.getElementById('cover').style.display = 'none';
                    document.querySelector(".box2").style.display = "none";
                    // document.querySelector(".box").style.background = "#2D3748";
                    // event.stopPropagation();//阻止冒泡
                }
                this.await()
            }
        }
    }
    await(){
        // var obox = document.querySelector(".box");
            var obox = document.querySelector(".box2 section .text .card-text")
            console.log(obox);
            obox.onmouseover = function() {
                obox.querySelector("p").style.display = 'block';
            };

            obox.onmouseout = function() {
                obox.querySelector("p").style.display = 'none';
            };

            obox.onmousemove = function(evt) {
                obox.querySelector("p").style.left = evt.offsetX + 'px';
                obox.querySelector("p").style.top = evt.offsetY + 'px';
            };

    }
    async click(){
        document.getElementById('cover').style.display = 'block'; //显示遮罩层
        var btn1 = document.querySelector("header .pic1 button")
        var btn2 = document.querySelector(" header .pic2 button")
        var btn3 = document.querySelector(" header .pic3 button")
        var oclose = document.querySelector(" .box1 footer button")
        console.log(oclose);
        var otext = document.querySelector(".box1 section input")
        var oin = document.querySelector(" header .pic2 span")
        var close = document.querySelector(" .box3 footer button")
        btn1.onclick = ()=>{
            location.href = "./first.html"
        }
        otext.oninput = (res)=>{
            // console.log(res.target.value);
            oin.innerHTML = `
            ${res.target.value}
            `
        }
        btn2.onclick = ()=>{
            location.reload()
            
        }
        oclose.onclick = ()=>{
            console.log(111);
            document.getElementById('cover').style.display = 'none';
            document.querySelector(".box1").style.zIndex = "-50";
        }
        btn3.onclick = ()=>{
            document.getElementById('cover').style.display = 'block';
            document.querySelector(".box3").style.zIndex = 100;
        }
        close.onclick = ()=>{
            document.getElementById('cover').style.display = 'none';
            document.querySelector(".box3").style.zIndex = -50;
        }
    }
}

var obj = new test()
obj.get()
// obj.turn()
// obj.click()
// 旋转 + 信息

