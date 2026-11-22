//Nut dang nhap vao trang chu
// const btnDangNhap = document.getElementById("btnDangNhap");

// btnDangNhap.addEventListener("click", function (event) {
//     event.preventDefault();
//     window.location.href = "./home.html";
// });
const btnDangNhap = document.getElementById("btnDangNhap");

btnDangNhap.addEventListener("click", function (event) {
    event.preventDefault();
    
    // Lưu trạng thái đã đăng nhập
    localStorage.setItem("isLoggedIn", "true");
    
    window.location.href = "./home.html";
});