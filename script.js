
// Mengambil tombol About me dari HTML
const abtMe = document.getElementById("abtMe");

// Memastikan tombol ditemukan sebelum menjalankan kode
if (abtMe) {

    // Menjalankan fungsi ketika tombol diklik
    abtMe.addEventListener("click", function () {

        // Menampilkan pesan kepada pengunjung
        alert("Halo! Terima kasih sudah berkunjung!");

    });

}
