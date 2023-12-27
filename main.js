function inputdata() {
    var nomorfaktur = document.getElementById("nofaktur").value;
    var kodebarang = document.getElementById("kodebarang").value;
    var hargajual = document.getElementById("hargajual").value;
    var jumlahjual = document.getElementById("jumlahjual").value;
    
    var total = hargajual * jumlahjual;

    var diskon =0;
    if (jumlahjual > 10){
        diskon = 0.05 * total;
    }
   

    var tabel = document.getElementById("table");

    var baris = tabel.insertRow(1);

    var kol1 = baris.insertCell(0);
    var kol2 = baris.insertCell(1);
    var kol3 = baris.insertCell(2);
    var kol4 = baris.insertCell(3);
    var kol5 = baris.insertCell(4);
    var kol6 = baris.insertCell(5);


    kol1.innerHTML = nomorfaktur;
    kol2.innerHTML = kodebarang;
    kol3.innerHTML = hargajual;
    kol4.innerHTML = jumlahjual;
    kol5.innerHTML = total.toFixed(2);
    kol6.innerHTML = diskon.toFixed(2);
}
