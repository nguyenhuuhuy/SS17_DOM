const myInterval = setInterval(myTimer, 1000);

function myTimer() {
    const date = new Date();
// let time = date.getHours() + ":" + date.getMinutes() + ":" +
// date.getSeconds();
 var hous = date.getHours();
 var minuter = date.getMinutes();
 var seconds = date.getSeconds();
 document.getElementById('gio').innerHTML = hous;
 document.getElementById('phut').innerHTML = minuter;
document.getElementById('giay').innerHTML = seconds;
}
var auDio = [];
var auDio_1 = "/audio/Tiengchimhot-Dangcapnhat_mtjj.mp3"
var auDio_2 = "/audio/HaNoimuathu-ThuHien_dwju.mp3"
var auDio_3 = "/audio/HueMo-PhongLan_497u7.mp3"
auDio.push(auDio_1)
auDio.push(auDio_2)
auDio.push(auDio_3)
function myMusic() {
    let aud = document.createElement('audio');
    // aud.controls= true;
const randomaudio = Math.floor(Math.random()*auDio.length);
 aud.src = auDio[randomaudio]
 console.log(randomaudio);
let div = document.getElementById('music');
    aud.autoplay = true;
    aud.preload = "auto";
    div.appendChild(aud);

}
 setInterval(myMusic, 10000);
var img = [];
var img_1 = "https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg"
var img_2 = "https://images3.content-hci.com/commimg/myhotcourses/blog/post/myhc_94121.jpg"
var img_3 = "https://ejoy-english.com/blog/wp-content/uploads/2018/05/tie%CC%82%CC%81ng-anh-u%CC%81c-.jpg"
img.push(img_1);
img.push(img_2);
img.push(img_3)
 function image() {
    let body = document.querySelector('body');
    const random = Math.floor(Math.random()*img.length)
    body.background = img[random];
    body.style.backgroundSize = "100%";
 }

setInterval(image,4000)

