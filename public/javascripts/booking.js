/* http://localhost:8081/api/nhacungcap */

/* http://localhost:8080/api/xemdonhang */

/* var {nanoid} = require('nanoid'); */

/*  import {nanoid} from '{nanoid}'; */

/* const {nanoid} = require('nanoid'); */



/* import {nanoid} from 'nanoid' */





function delete_service_ofcart(idchitiet) {
  DELETE('http://localhost:8080/api/deletegiohang/' + idchitiet).then(res =>
    res.json().then(data => {
      console.log(data);
      if (data != "") {
        alert("Xoá sản phẩm thành công");
      }
      else {
        alert("Xóa thất bại");
      }
    })
  );
}






function getlistservice_byidcategory(id, callback) {
  var array = [];
  GET('http://localhost:8888/vacxin/get_goivacxin_phanloai/' + id).then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}





function list_all_service(callback) {
  var array = [];

  GET('http://localhost:8888/vacxin/get_all_goivacxin').then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}




function get_all_cus(callback) {
  var array = [];

  GET('http://localhost:8888/customer/get_all_cus').then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}








function list_all_service_by_id(callback) {
  var array = [];

  GET('http://localhost:8888/vacxin/get_all_goivacxin').then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(data);
      return callback(array);
    })
  );
}

function list_all_goivacxin(id, callback) {
  var array = [];

  GET('http://localhost:8888/vacxin/get_goivacxin_phanloai/' + id).then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(data);
      return callback(array);
    })
  );
}

function list_all_vacxinle(callback) {
  var array = [];

  GET('http://localhost:8888/vacxin/get_goivacxin_phanloai/' + id).then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(data);
      return callback(array);
    })
  );
}


function get_all_phanloai(callback) {
  var array = [];

  GET('http://localhost:8888/vacxin/get_all_phanloai').then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);
      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}





function list_all_vacxinle(callback) {
  var array = [];

  GET('http://localhost:8888/vacxin/get_all_vacxin').then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(data);
      return callback(array);
    })
  );
}



function get_allcity(callback) {
  var array = [];

  GET('http://localhost:8888/location/get_all_tinhthanh').then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}

function get_allcity1(callback) {
  var array = [];

  GET('http://localhost:8888/location/get_all_tinhthanh').then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}

function ham_timtengoivacxin(callback) {
  var array = [];

  GET('http://localhost:8888/vacxin/get_all_goivacxin').then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}

function ham_timtenkhachhangtheoid(id, callback) {
  var array = [];
  console.log("id kh:", id);
  GET('http://localhost:8888/customer/get_customer/' + id).then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}

function ham_getdetailbooking_duatren_madonhang(id, callback) {
  var array = [];

  GET('http://localhost:8888/booking/get_detail_booking/' + id).then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}








function get_allhometown(id_city, callback) {
  var array = [];

  GET('http://localhost:8888/location/get_quanhuyen_tinhthanh/' + id_city).then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}

function get_allwards(id_district, callback) {
  var array = [];

  GET('http://localhost:8888/location/get_phuongxa_quanhuyen/' + id_district).then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}

function get_allcity_tiem(callback) {
  var array = [];

  GET('http://localhost:8888/location/get_all_tinhthanh').then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}

function get_allhub(id_city, callback) {
  var array = [];

  GET('http://localhost:8888/location/get_trungtam_tinhthanh/' + id_city).then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}

function get_allhub1(callback) {
  var array = [];

  GET('http://localhost:8888/location/get_all_trungtam').then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}



function list_view_cus(id_city, callback) {
  console.log(id_city);
  var array = [];
  GET('http://localhost:8888/cart/get?cookie_id=' + id_city).then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(data);
      return callback(array);
    })
  );
}

function get_all_category_question(callback) {
  var array = [];
  GET('http://localhost:8888/support/get_all_category_question').then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(data);
      return callback(array);
    })
  );
}

function get_all_cate_ques(callback) {
  var array = [];
  GET('http://localhost:8888/support/get_all_category_question').then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(data);
      return callback(array);
    })
  );
}

function get_all_ques(callback) {
  var array = [];
  GET('http://localhost:8888/support/get_all_question').then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(data);
      return callback(array);
    })
  );
}

function get_all_ques_by_category(id, callback) {
  var array = [];
  GET('http://localhost:8888/support/get_all_question_by_cate?category_id=' + id).then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(data);
      return callback(array);
    })
  );
}

function search_by_phone(id, callback) {
  var array = [];
  GET('http://localhost:8888/booking/get_booking_customer/' + id).then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      if (data.code == 0) {
        console.log(data);
        localStorage.setItem("id_donhangne", JSON.stringify(data));
        window.location = "http://localhost:8889/thongtindonhang";
      }
      else {
        alert(data.message);
      }
     
    })
  );
}
















function add_product_into_cart(coookie_id, hoten, gioitinh, sdt, email, diachi, ngaysinh, moiquanhe, dsmua, phanloaids, tinhthanh, quanhuyen, phuongxa, trungtam, ngaytiem) {
  POST('http://localhost:8888/cart/add', {
    "cookie_id": coookie_id,
    "NguoiDky": {
      "HoTen": hoten,
      "GioiTinh": gioitinh,
      "SDT": sdt,
      "Email": email,
      "DiaChi": diachi,
      "NgaySinh": ngaysinh,
      "MoiQH": moiquanhe,
      "DSMua": dsmua,
      "PhanLoaiDS": phanloaids,
      "TinhThanh_ID": tinhthanh,
      "QuanHuyen_ID": quanhuyen,
      "PhuongXa_ID": phuongxa,
      "TrungTam_ID": trungtam,
      "NgayMuonTiem": ngaytiem
    }

  }).then(res =>
    res.json().then(data => {
      if (data.code == 0) {
        //window.location = "http://localhost:8889/thanhtoan";
      }
      else {
        alert(data.message);
      }
    })
  );
}

function add_product_into_cart1(coookie_id, hoten, gioitinh, sdt, email, diachi, ngaysinh, moiquanhe, dsmua, phanloaids, tinhthanh, quanhuyen, phuongxa, trungtam, ngaytiem) {
  POST('http://localhost:8888/cart/add', {
    "cookie_id": coookie_id,
    "NguoiDky": {
      "HoTen": hoten,
      "GioiTinh": gioitinh,
      "SDT": sdt,
      "Email": email,
      "DiaChi": diachi,
      "NgaySinh": ngaysinh,
      "MoiQH": moiquanhe,
      "DSMua": dsmua,
      "PhanLoaiDS": phanloaids,
      "TinhThanh_ID": tinhthanh,
      "QuanHuyen_ID": quanhuyen,
      "PhuongXa_ID": phuongxa,
      "TrungTam_ID": trungtam,
      "NgayMuonTiem": ngaytiem
    }

  }).then(res =>
    res.json().then(data => {
      if (data.code == 0) {
        console.log(data);
        window.location = "http://localhost:8889/dangkytiem_lienhe";
      }
      else {
        alert(data.message);
      }
    })
  );
}

/* add_booking(ptthanhtoan, ttthanhtoan, ngaylapdon, phanloaidh, hoten, email, sdt, cmnd, diachi, tinhthanh, quanhuyen, phuongxa, cookie_id); */
function add_booking(ptthanhtoan, ttthanhtoan, ngaylapdon, phanloaidh, hoten, email, sdt, cmnd, diachi, tinhthanh, quanhuyen, phuongxa, cookie_id) {
  POST('http://localhost:8888/booking/add_booking', {
    "PhuongThuc": ptthanhtoan,
    "TinhTrangThanhToan": ttthanhtoan,
    "NgayLapDon": ngaylapdon,
    "PhanLoaiDH": phanloaidh,
    "NguoiLH": {
      "HoTen": hoten,
      "Email": email,
      "SDT": sdt,
      "CMND": cmnd,
      "DiaChi": diachi,
      "TinhThanh_ID": tinhthanh,
      "QuanHuyen_ID": quanhuyen,
      "PhuongXa_ID": phuongxa
    },
    "CookieID": cookie_id

  }).then(res =>
    res.json().then(data => {
      if (data.code == "0") {
        alert("Đặt hàng thành công");
        localStorage.setItem("id_donhang", data.payload.id);
        console.log(data.payload.id);
        list_view_cus2();
      }
      else {
        /* alert.window("Tài khoản hoặc mật khẩu không đúng, vui lòng nhập lại"); */
        alert(data.message);
      }
    })
  );
}

function add_booking1(ptthanhtoan, ttthanhtoan, ngaylapdon, phanloaidh, hoten, email, sdt, cmnd, diachi, tinhthanh, quanhuyen, phuongxa, cookie_id) {
  POST('http://localhost:8888/booking/add_booking', {
    "PhuongThuc": ptthanhtoan,
    "TinhTrangThanhToan": ttthanhtoan,
    "NgayLapDon": ngaylapdon,
    "PhanLoaiDH": phanloaidh,
    "NguoiLH": {
      "HoTen": hoten,
      "Email": email,
      "SDT": sdt,
      "CMND": cmnd,
      "DiaChi": diachi,
      "TinhThanh_ID": tinhthanh,
      "QuanHuyen_ID": quanhuyen,
      "PhuongXa_ID": phuongxa
    },
    "CookieID": cookie_id

  }).then(res =>
    res.json().then(data => {
      if (data.code == "0") {
        alert("Đặt hàng thành công");
        localStorage.setItem("id_donhang", data.payload.id);
        console.log(data.payload.id);
      }
      else {
        /* alert.window("Tài khoản hoặc mật khẩu không đúng, vui lòng nhập lại"); */
        alert(data.message);
      }
    })
  );
}




function add_question(hoten, gioitinh, tuoi, sdt, email1, address, cauhoi, loaicauhoi) {
  POST('http://localhost:8888/support/add_question', {
    "customer_info": {
      "name": hoten,
      "sex": gioitinh,
      "age": tuoi,
      "phone": sdt,
      "email": email1,
      "address": address
    },
    "question_content": cauhoi,
    "category_id": loaicauhoi

  }).then(res =>
    res.json().then(data => {
      if (data.code == "0") {
        alert("Gửi câu hỏi thành công");
        localStorage.setItem("id_question", data.payload.question_id);
      }
      else {
        /* alert.window("Tài khoản hoặc mật khẩu không đúng, vui lòng nhập lại"); */
        alert(data.message);
      }


    })
  );
}

function post_answer(id_ques, ans_content, id_hot) {
  POST('http://localhost:8888/support/add_answer', {
    "question_id": id_ques,
    "answer_content": ans_content,
    "hotline_id": id_hot
  }).then(res =>
    res.json().then(data => {
      if (data.code == "0") {
         alert("Gửi thành công"); 
      }
      else {
        /* alert.window("Tài khoản hoặc mật khẩu không đúng, vui lòng nhập lại"); */
        alert(data.message);
      }
    })
  );
}

function login(user, pass) {
  POST('http://localhost:8888/support/hotline/login', {
    "username": user,
    "password": pass
  }).then(res =>
    res.json().then(data => {
      console.log(data.code);
      if (data.code == "0") {
        window.location = "http://localhost:8889/tuvan_bacsi";
        localStorage.setItem("id_hotline", data.payload.hotline_id);
        localStorage.setItem("name_hotline", data.payload.hotline_name);
      }
      else {
        /* alert.window("Tài khoản hoặc mật khẩu không đúng, vui lòng nhập lại"); */
        alert(data.message);
      }
    })
  );
}













