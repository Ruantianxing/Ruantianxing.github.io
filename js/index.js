// 切换登录注册
var box_l = document.querySelector(".l-box");
var sign1 = document.querySelector(".r-box .r-b-box");
var sign2 = document.querySelector(".l-box .l-span1");
var sign3 = document.querySelector(".r-box .l-b-box");

var box_l1 = document.querySelector(".second");
// console.log(box_l.className);


// 初始化页面
function begin(){
    var data = JSON.parse(sessionStorage.getItem("obj"))
    if(data){
        document.getElementById("text1").value = data.username 
        document.getElementById("text2").value = data.password
    }
}


function sign(){
    console.log("移动");
    box_l.style.transform = "translateX(100%)";
    document.querySelector(".l-s-span").style.transform = "translateX(-525%)";
    setTimeout(()=>{
        document.querySelector(".l-s-in1").style.transform = " translateX(-180%)";
    },100)
    setTimeout(()=>{
        document.querySelector(".l-s-in2").style.transform = " translateX(-180%)";
    },500)
    setTimeout(()=>{
        document.querySelector(".l-s-in4").style.transform = " translateX(-180%)";
    },800)
    setTimeout(()=>{
        document.querySelector(".l-s-in3").style.transform = "translateX(-233%)";
    },400)
    setTimeout(()=>{
        document.querySelector(".r-box .l-b-box").style.transform="translateY(0)"
    },700)


    setTimeout(()=>{
        document.querySelector(".l-span").style.transform = "translateY(-500%)";
    },200)
    document.querySelector(".l-in1").style.transform = " translateX(-150%)";
    setTimeout(()=>{
        document.querySelector(".l-in2").style.transform = " translateX(-150%)";
    },500)
    setTimeout(()=>{
        document.querySelector(".l-span1").style.transform = " translateX(900%)";
    },800)
    setTimeout(()=>{
        document.querySelector(".l-in3").style.transform = "translateY(500%)";
    },100)
    setTimeout(()=>{
        document.querySelector(".r-box .r-b-box").style.transform = "translateY(800%)"
    },100)
    document.querySelector(".l-box").style. borderRadius = "0 1.25rem 1.25rem 0"
}
 sign1.addEventListener('click', function() {
    sign()
});
// console.log(box_l.className);
 sign2.addEventListener('click', function() {
    sign()
});


function log(){
    box_l.style.transform = "translateX(0)";
    document.querySelector(".l-s-span").style.transform = "translateY(-525%)";
    setTimeout(()=>{
        document.querySelector(".l-s-in1").style.transform = " translateX(400%)";
    },100)
    setTimeout(()=>{
        document.querySelector(".l-s-in2").style.transform = " translateX(400%)";
    },490)
    setTimeout(()=>{
        document.querySelector(".l-s-in4").style.transform = " translateX(400%)";
    },800)
    document.querySelector(".l-s-in3").style.transform = "translateY(250%)";
    setTimeout(()=>{
        document.querySelector(".r-box .l-b-box").style.transform="translateX(-200%)"
        document.querySelector(".r-box .l-b-box").style.setProperty('--animate-duration', '5s');
    },600)


    setTimeout(()=>{
        document.querySelector(".l-span").style.transform = "translateY(0)";
    },200)
    document.querySelector(".l-in1").style.transform = " translateX(0)";
    setTimeout(()=>{
        document.querySelector(".l-in2").style.transform = " translateX(0)";
    },500)
    setTimeout(()=>{
        document.querySelector(".l-span1").style.transform = " translateX(0)";
    },800)
    document.querySelector(".l-in3").style.transform = "translateY(0)";
    document.querySelector(".r-box .r-b-box").style.transform = "translateY(0)"
    document.querySelector(".l-box").style. borderRadius = "1.100% 0 0 1.100%"
    begin()
}


sign3.addEventListener('click', function() {
    log()
})




var data = JSON.parse(sessionStorage.getItem("obj"))


// 登录
btn = document.querySelector(".l-box .l-in3")
btn.addEventListener('click',()=>{
    if(document.getElementById("text1").value && document.getElementById("text2").value){
        console.log(JSON.parse(sessionStorage.getItem("obj")))
        
    }else{
        alert("账号密码不能为空")
        return
    }
    // console.log(data.password,data.username);
    if(document.getElementById("text1").value == data.username &&
       document.getElementById("text2").value == data.password){
        console.log('密码正确');
        location.href='./first.html'
    }
    
})
// 注册
btn1 = document.querySelector(".l-box .l-s-in3")
console.log(btn1);
btn1.addEventListener('click',()=>{
    var username = document.getElementById("text3").value
    var phone = document.getElementById("text4").value
    var password = document.getElementById("text5").value
    console.log(username,phone,password);
    if(username === "" || phone === "" || password === ""){
        alert("账号密码邮箱不能为空")
        return
    }
    obj = {
        username,
        phone,
        password
    }
    sessionStorage.clear();
    sessionStorage.setItem("obj",JSON.stringify(obj))
    data = JSON.parse(sessionStorage.getItem("obj"))
    log()
})