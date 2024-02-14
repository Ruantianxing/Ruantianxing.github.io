var oul = document.querySelector("section ul")
        var data
        class test{
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
            }).then(res => {
                // console.log("success", res['tarot']);
                data = res['tarot']
                res['tarot'].map((item)=>{
                    oul.innerHTML += `
                    <li>
                        <img src="${item.image}" alt="" id="${item.count}">
                        <p>${item.name}</p>
                    </li>
                    `
                })
            }).catch(err => {
                console.log("error", err);
            });
            await console.log(data);
            this.input()
            }
            async input(){
                for(let i = 1; i <= data.length; i++){
                    var oli = document.querySelector(`section ul li:nth-child(${i})`);
                    oli.onclick = () => {
                        document.getElementById('cover').style.display = 'block';
                        document.querySelector(".box2").style.display = "flex";
                        // document.querySelector(".box").style.background = "#171923";
                        // console.log(i);
                        document.querySelector(".box2 header").innerHTML = `
                        ${data[i - 1].name}
                        <i class="iconfont icon-guanbi1"></i>`
                        let a = data[i - 1].interpretation.split("逆位:")[0]
                        let b = data[i - 1].interpretation.split("逆位:")[1]
                        document.querySelector(".box2 section").innerHTML = `
                        <img src="${data[i - 1].image}" alt="">
                        <div class="text">
                            <div class="card-text">
                                <h2>简介:</h2>
                                <span>${data[i - 1].description}</span>
                                <p id="move">${data[i - 1].description}</p>
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
                        // document.querySelector(".box p").innerHTML = `<p id="move">${data[i - 1].description}</p>` 
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
                    };    
                }
            }
            async await(){
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

            
            
        }
    var data = new test
    data.get()
    
    document.querySelector(".box .center header ul li:nth-child(6)").onclick = ()=>{
        location.href = "./first.html"
    }

    
    