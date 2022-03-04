/**
 * Tinh tiền lương nhân viên
 *
 * * Đầu vào
 *  - số lương/ngày
 *  - số ngày công
 * * Xử lý
 *  - lương = lương/ngày * số ngày công
 * * Đầu ra: show kết quả
 */
var payDate = Number(prompt("Nhập số lương của bạn: "));
var day = Number(prompt("Nhập số ngày bạn làm: "));

var pay = payDate * day;
console.log("Tiền lương bạn nhận là: " + pay);


/**
 * Tinh giá trị trung bình của tổng 5 số thực
 *
 * * Đầu vào
 *  - realNumber1, realNumber2, realNumber3, realNumber4, realNumber5
 * * Xử lý
 *  - trung bình = (realNumber1 + realNumber2 + realNumber3 + realNumber4 + realNumber5)/5
 * * Đầu ra: show kết quả
 */
var realNumber1, realNumber2, realNumber3, realNumber4, realNumber5;
realNumber1 = Number(prompt("Nhập số thứ 1: "));
realNumber2 = Number(prompt("Nhập số thứ 2: "));
realNumber3 = Number(prompt("Nhập số thứ 3: "));
realNumber4 = Number(prompt("Nhập số thứ 4: "));
realNumber5 = Number(prompt("Nhập số thứ 5: "));
var averaged = (realNumber1 + realNumber2 + realNumber3 + realNumber4 + realNumber5) / 5;
console.log("giá trị trung bình của tổng 5 số thực là: " + averaged);


/**
 * Quy đổi tiền
 *
 * * Đầu vào
 *  - số tiền cần đổi
 *  - giá USD
 * * Xử lý
 *  - quy đổi sang VND = số tiền cần đổi * giá USD
 * * Đầu ra: show kết quả
 */
const USD_RATE = 23500;
var usd = Number(prompt("Nhập số USD cần đổi: "));
var vnd = USD_RATE * usd;
console.log(vnd +" vnd");


/**
 * Tính chu vi, diện tích hình chữ nhật
 *
 * * Đầu vào
 *  - chiểu dài
 *  - chiều rộng
 * * Xử lý
 *  - chu vi = (dài + rộng)/2
 *  - diện tích = dài * rộng
 * * Đầu ra: show kết quả
 */
var width = Number(prompt("Nhập chiều dài: "));
var height = Number(prompt("Nhập chiều rộng: "));

var perimeter = (width + height) / 2;
var acreage = width * height;
console.log("chu vi và diện tích hình chữ nhật lần lượt là: " + perimeter + " , " + acreage);


/**
 * Tính tổng 2 ký số
 *
 * * Đầu vào
 *  - số có 2 chữ số
 * * Xử lý
 *  - lấy số hàng chục: int so_hang_chuc = so / 10
 *  - lấy số hàng đơn vị: int so_hang_donvi = so % 10
 *  - tính tổng kí số: tong = so_hang_chuc + so_hang_donvi
 * * Đầu ra: show kết quả
 */
var number = Number(prompt("Nhập kí số có 2 chữ số: "));
var so_hang_chuc = Math.floor(number / 10);
var so_hang_donvi = number % 10;

var tongkyso = so_hang_chuc + so_hang_donvi;
console.log("tổng 2 ký số là: " + tongkyso);