function getElement(id) {
    return document.getElementById(id);
}
function xacDinhLoaiGrap() {
    if (getElement("grabX").checked) {
        return "grabX";
    }
    else if (getElement("grabSUV").checked) return "grabSUV"
    else if (getElement("grabBlack").checked) return "grabBlack"
    else return "Chưa chọn loại xe";
}
function tinhGiaCho(tgCho, giaCho) {
    var tich = 0;
    if (tgCho >= 3) {
        tich = (tgCho / 3) * giaCho
    }
    else if (tgCho < 3) {
        tich = 0
    };
    return tich;
}
function tinhTienSoKmDauTien(giaTien) {
    return giaTien;
}
function tinhTienKm(km, giaTien) {
    return km * giaTien;
}
function tinhTienKmNguoiDung(km, giaTienSoKmDau, giaTienSoKmTu1Den19, giaTienSoKmTu19TroLen) {
    var thanhTien = 0;
    if (km <= 1) {
        thanhTien = tinhTienSoKmDauTien(giaTienSoKmDau);
    } else if (km > 1 && km <= 19) {
        thanhTien = tinhTienSoKmDauTien(giaTienSoKmDau) + tinhTienKm((km - 1), giaTienSoKmTu1Den19);
    } else if (km > 19) {
        thanhTien = tinhTienSoKmDauTien(giaTienSoKmDau) + tinhTienKm(18, giaTienSoKmTu1Den19) + tinhTienKm((km - 19), giaTienSoKmTu19TroLen);
    }
    return thanhTien;
}
function tinhTienThoiGianCho(tg, giaTien) {
    if (tg < 3) {
        return 0;
    } else {
        return parseInt(tg / 3) * giaTien;
    }
}
getElement("btnTinhTien").onclick = function () {
    var loaiXe = xacDinhLoaiGrap();
    var km = getElement("soKm").value;
    var tg = getElement("thoiGianCho").value;
    switch (loaiXe) {
        case "grabX":
            var giaTienSoKmDau = 8000;
            var giaTienSoKmTu1Den19 = 7500;
            var giaTienSoKmTu19TroLen = 7000;
            var giaTienThoiGianCho = 2000;
            getElement("divThanhTien").style.display = "block";
            getElement("xuatTien").innerHTML = tinhTienKmNguoiDung(km,giaTienSoKmDau,giaTienSoKmTu1Den19,giaTienSoKmTu19TroLen) + tinhTienThoiGianCho(tg,giaTienThoiGianCho);
            break;
        case "grabSUV":
            var giaTienSoKmDau = 9000;
            var giaTienSoKmTu1Den19 = 8500;
            var giaTienSoKmTu19TroLen = 8000;
            var giaTienThoiGianCho = 3000;
            getElement("divThanhTien").style.display = "block";
            getElement("xuatTien").innerHTML = tinhTienKmNguoiDung(km,giaTienSoKmDau,giaTienSoKmTu1Den19,giaTienSoKmTu19TroLen) + tinhTienThoiGianCho(tg,giaTienThoiGianCho);
            break;
            break;
        case "grabBlack":
            var giaTienSoKmDau = 10000;
            var giaTienSoKmTu1Den19 = 9500;
            var giaTienSoKmTu19TroLen = 9000;
            var giaTienThoiGianCho = 3500;
            getElement("divThanhTien").style.display = "block";
            getElement("xuatTien").innerHTML = tinhTienKmNguoiDung(km,giaTienSoKmDau,giaTienSoKmTu1Den19,giaTienSoKmTu19TroLen) + tinhTienThoiGianCho(tg,giaTienThoiGianCho);
            break;
            break;
        default:
            alert(loaiXe);
            break;
    }
}