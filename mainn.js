function inputdata() {
    var a = document.forms['data']['kodepelanggan'].value;
    var b = document.forms['data']['namapelanggan'].value;
    var c = document.forms['data']['nohp'].value;

    var tabel = document.getElementById("table");

    var baris = tabel.insertRow(1);

    var kol1 = baris.insertCell(0);
    var kol2 = baris.insertCell(1);
    var kol3 = baris.insertCell(2);

    kol1.innerHTML = a;
    kol2.innerHTML = b;
    kol3.innerHTML = c;
}
