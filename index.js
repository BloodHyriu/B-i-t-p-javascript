// Bai tap 1
document.getElementById("btnLuong").onclick = function()
{
    var soNgay = document.getElementById("ngayLam").value;
    var luong = soNgay * 100000;
    document.getElementById("luong").innerHTML = luong;
}

// Bai tap 2
document.getElementById("btn-tinhGiaTri").onclick = function()
{
    var giaTri1 = Number(document.getElementById("giaTri1").value);
    var giaTri2 = Number(document.getElementById("giaTri2").value);
    var giaTri3 = Number(document.getElementById("giaTri3").value);
    var giaTri4 = Number(document.getElementById("giaTri4").value);
    var giaTri5 = Number(document.getElementById("giaTri5").value);
    var giaTriTrungBinh = (giaTri1 + giaTri2 + giaTri3 + giaTri4 + giaTri5)/5;
    document.getElementById("giaTri").innerHTML = giaTriTrungBinh;
}

// Bai tap 3
document.getElementById("btn-tinhNgay").onclick = function()
{
    var USD = document.getElementById("tienUSD").value;
    var VND = USD * 23500;
    document.getElementById("tienVND").innerHTML = VND;
}

// Bai tap 4
document.getElementById("btn-tinhHCN").onclick = function()
{
    var chieuDai = Number(document.getElementById("chieuDai").value);
    var chieuRong = Number(document.getElementById("chieuRong").value);
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;
    document.getElementById("chuVi").innerHTML = chuVi;
    document.getElementById("dienTich").innerHTML = dienTich;
}

// Bai tap 5
document.getElementById("btn-tinhTong").onclick = function()
{
    var soCo2ChuSo = Number(document.getElementById("soCo2ChuSo").value);
    var soHangChuc = parseInt(soCo2ChuSo / 10);
    var soHangDonVi = soCo2ChuSo % 10;
    console.log(soHangChuc)
    document.getElementById("tong2So").innerHTML = soHangChuc + soHangDonVi;
}