function inputdata() {
    var a = document.forms['data']['kodebarang'].value;
    var b = document.forms['data']['namabarang'].value;
    var c = document.forms['data']['hargabarang'].value;
    var d = document.forms['data']['satuan'].value;

    var tabel = document.getElementById("table");

    var baris = tabel.insertRow(1);

    var kol1 = baris.insertCell(0);
    var kol2 = baris.insertCell(1);
    var kol3 = baris.insertCell(2);
    var kol4 = baris.insertCell(3);

    kol1.innerHTML = a;
    kol2.innerHTML = b;
    kol3.innerHTML = c;
    kol4.innerHTML = d;
}
