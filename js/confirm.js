function chonNgay(){
    // hiển thị ngày mua
    var ngay = document.getElementById("chonNgay");
    var text = ngay.options[ngay.selectedIndex].text;
    document.getElementById("ngayMua").innerHTML = "Ngày mua: "+text;


    // tính tiền
    var total = 0;
    var soLuong = document.querySelectorAll("td#soLuong");
    var donGia = document.querySelectorAll("td#donGia");
    for (let i = 0; i < soLuong.length; i++) {
        total += Number(soLuong[i].innerHTML)*Number(donGia[i].innerHTML);
    }
    document.getElementById("thanhTien").innerHTML = `<strong>Thành tiền:</strong>` + " " + total + " (đồng)";


    // ẩn hiện nút thanh toán
    var thanhToan = document.getElementById("thanhToan");
    if(thanhToan.innerHTML=="Trạng thái: chưa thanh toán")
        document.getElementById('nutThanhToan').style.visibility = 'visible';
    else
        document.getElementById('nutThanhToan').style.visibility = 'hidden';
}







// chức nâng nhân viên duyệt đơn và giao hàng

function xemThem(){
    document.getElementById("chonNV").selectedIndex = "0";
    document.getElementById('quayLai').style.display = 'block';
    document.getElementById('hoaDon').style.display = 'block';
    document.getElementById('tieuDe').style.display = 'none';
}
function quayLai(){
    document.getElementById('quayLai').style.display = 'none';
    document.getElementById('hoaDon').style.display = 'none';
    document.getElementById('tieuDe').style.display = 'block';
}
function chonNV(){
    var NV = document.getElementById("chonNV");
    var text = NV.options[NV.selectedIndex].text;
    
    if(text.length!=0){
        console.log(typeof text.length)
        document.getElementById('duyetDon').style.visibility = 'visible';
    }
}
function chonDuyetDon(){
    document.getElementById('in').style.visibility = 'visible';
    document.getElementById('duyetDon').style.visibility = 'hidden';
}
function chonIn(){
    document.getElementById('in').style.visibility = 'hidden';
    document.getElementById('quayLai').style.display = 'none';
    document.getElementById('hoaDon').style.display = 'none';
    document.getElementById('tieuDe').style.display = 'block';
}