var data;
        // 随机产生
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
            data = res['tarot']
            var odiv = document.querySelectorAll(".box section div")
            console.log(odiv);
            var oset = new Set()
            for(let j = 1;j <= 3;j++){
                let i = this.getRandomIntInclusive(0,76)
                console.log(i);
                if(!oset.has(i)){
                    oset.add(i)
                }else{
                    i = this.getRandomIntInclusive(0,76)
                }
                odiv[j - 1].innerHTML = `
                <img src="https://www.allenluuu.com//static/random-tarot/card-backs/card_back_4.webp" alt="" class="font">
                <img src="${data[i].image}" alt="" class="back" id="${data[i].id}">
                `
                var i1 = this.getRandomIntInclusive(0,1)
                console.log(i1);
                if(i1) {
                    odiv[j - 1].querySelector(".box .sec2 div .back")
                    .style.transform = "rotateX(180deg)";
                }
            
            }
        })
        .catch(res=>{
            console.log("error",res);
        })
        await this.turn()
        await this.click()
    }
    turn(){
        var oturn = document.querySelectorAll(".box .sec2 div")
        var obox2 = document.querySelectorAll(".box .sec2 div")

        console.log(obox2);
        for(let i = 0;i < oturn.length;i++){
            oturn[i].onclick = ()=>{
                oturn[i].style.transform = "rotateY(180deg)"
                obox2[i].onclick = ()=>{
                    var oid= obox2[i].querySelector(".back").id - 1
                    console.log(oid);
                    document.getElementById('cover').style.display = 'block';
                    document.querySelector(".box2").style.display = "flex";
                    document.querySelector(".box2").style.zIndex = 100;
                    // document.querySelector(".box").style.background = "#171923";
                    // console.log(i);
                    document.querySelector(".box2 header").innerHTML = `
                    ${data[oid].name}
                    <i class="iconfont icon-guanbi1"></i>`
                    let a = data[oid].interpretation.split("逆位:")[0]
                    let b = data[oid].interpretation.split("逆位:")[1]
                    document.querySelector(".box2 section").innerHTML = `
                    <img src="${data[oid].image}" alt="">
                    <div class="text">
                        <div class="card-text">
                            <h2>简介:</h2>
                            <span>${data[oid].description}</span>
                            <p id="move">${data[oid].description}</p>
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
    window.onload = ()=>{
        document.querySelector(".box1").style.display = "flex";
        document.querySelector(".box1").style.zIndex= 100;
    }
