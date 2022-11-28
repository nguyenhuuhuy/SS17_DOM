// let h1 = document.getElementById('heading-1');
// h1.addEventListener('click', function() {
//     console.log("Clicked");
// })

// thêm phần tử trong danh sách
// let ul = document.getElementById('ul-1')
// let li = `<li>Kante</li>`;
// ul.innerHTML += li;

// xóa phần tử trong danh sách
// let li = document.getElementById('nm')
// li.remove();

//bài 1: thêm phần tử vào trong một thẻ
// cách 1: thêm được nhiều phần tử
/*var list = document.querySelectorAll('li');
    console.log(list);
    list[0].innerHTML = "Ronaldo";
    console.log(list);
    list[1].innerHTML = "Messi";
    list[2].innerHTML = "Neymar";

    let check = document.getElementById('myBt')
    check.addEventListener('click', function () {
        let li = document.createElement("li");
        console.log(li);
        li.innerText = prompt("Nhập tên");
        console.log(li);
        let ul = document.getElementById("listlayer");
        ul.appendChild(li);
    });
*/

//cách 2: thêm thẳng vào id
/*let myInput = document.getElementById('myBt');
myInput.addEventListener('click', function() {
    document.getElementById('k').innerHTML = prompt('nhập tên cầu thủ: ')
})
*/

// cách 3: tiêu chuẩn nhất
/*let button = document.getElementById('myBt');
let ul = document.getElementById('listlayer');
button.addEventListener('click', function() {
   let li = document.createElement('li');
   li.innerHTML = prompt('nhập tên: ')
   ul.appendChild(li)
})
*/

//bài 2:

//dùng sự kiện onkeypress = tên biến(event)

/* let ul = document.getElementById("listlayer");
function Enter(enter) {
  if (enter.keyCode == 13) {
    let myInput = document.getElementById("my-input").value;
      var li = document.createElement("li");
      li.innerHTML = myInput;
      ul.appendChild(li);
  }
}
*/

/*let ul = document.getElementById('listlayer')
function checkEnter(enter) {
    if (enter.keyCode == 13) { // enter == số 13 xét điều kiện để chạy hàm
        let myInput = document.getElementById('my-input'); // tạo biến truy cập vào ô input
        let a = document.createElement('li') // gọi biến a , thêm thẻ li
        a.innerHTML = myInput.value; // in biến a ra ngoài bằng với giá trị đã nhập ở ô input
         ul.appendChild(a); // nhét biến a vừa đc nhập giá trị vào ul 

    }
}
*/


