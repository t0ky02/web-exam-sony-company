// Untuk Form
$(document).ready(function () {
  $(".submit").click(function () {
    if ($('input[type="text"]').val() == 0) {
      alert(
        "Nama depan, nama belakang atau alamat masih kosong, Periksa kembali !"
      );
    } else if ($('input[type="email"]').val() == 0) {
      alert("Email anda masih kosong, Periksa kembali !");
    } else if ($('input[type="tel"]').val() == 0) {
      alert("Nomor telpon anda masih kosong, Periksa kembali !");
    } else if ($('input[type="radio"]').val() == 0) {
      alert("Gender anda masih kosong, Periksa kembali !");
    } else if ($("select").val() == "1") {
      alert("Negara atau Kota anda masih kosong, Periksa kembali !");
    } else {
      alert("Berhasil Mengirimkan Pesan");
      resetBtn();
    }
  });
});
// Untuk Reset Button
$(document).ready(function () {
  $(".reset").click(function () {
    alert("Field berhasil di reset.");
    resetBtn();
  });
});

function resetBtn() {
  $('input[type="text"]').val("");
  $('input[type="email"]').val("");
  $('input[type="tel"]').val("");
  $('input[type="radio"').prop("checked", false);
  $("select").prop("selectedIndex", 0);
  $("textarea").val("");
}
$(document).ready(function () {
  $(`div[id$=OV]`).show();
});
$(document).ready(function () {
  $(".myButton").click(function () {
    $("div[id^=display]").hide();
    var id = $(this).attr("id");
    var end = id.slice(-2);
    $(`div[id$=${end}]`).show();
  });
});
