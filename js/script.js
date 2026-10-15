function aturPorsi(varian, arah, hargaBase) {
    // 1. Ambil input porsi sesuai varian (keju atau nori)
    var inputQty = document.getElementById('qty-' + varian);
    var nilaiBaru = parseInt(inputQty.value) + arah;
    
    // Batasi agar porsi minimal 1, tidak bisa minus
    if (nilaiBaru >= 1) {
        inputQty.value = nilaiBaru;
        
        // 2. Hitung perkalian harga total varian tersebut
        var totalBiaya = hargaBase * nilaiBaru;
        var formatRupiah = "Rp " + totalBiaya.toLocaleString('id-ID');
        
        // 3. Tampilkan harga baru ke layar kartu produk
        document.getElementById('total-harga-' + varian).innerText = formatRupiah;
        
        // 4. Update tautan dan draf teks pesanan khusus ke tombol WhatsApp
        var namaVarianResmi = varian === 'keju' ? 'Volcano Mentai Keju' : 'Volcano Mentai Nori';
        var drafPesan = "Halo Admin The Volcano Bay, saya ingin memesan:\n- Menu: " + namaVarianResmi + "\n- Jumlah: " + nilaiBaru + " porsi\n- Total Bayar: " + formatRupiah + ".\n\nMohon dibantu proses pesanannya ya, terima kasih!";
        
        var nomorWA = "628123456789"; // Ganti dengan nomor WhatsApp operasional jualan Anda
        document.getElementById('wa-btn-' + varian).href = "https://wa.me" + nomorWA + "?text=" + encodeURIComponent(drafPesan);
    }
}

// Inisialisasi awal saat web pertama kali diakses agar tombol WA langsung siap kirim 1 porsi
function siapkanTautanAwal() {
    var nomorWA = "628123456789"; // Ganti dengan nomor WhatsApp jualan Anda
    
    var pesanKeju = "Halo Admin The Volcano Bay, saya ingin memesan:\n- Menu: Volcano Mentai Keju\n- Jumlah: 1 porsi\n- Total Bayar: Rp 28.000.\n\nMohon dibantu proses pesanannya ya, terima kasih!";
    document.getElementById('wa-btn-keju').href = "https://wa.me" + nomorWA + "?text=" + encodeURIComponent(pesanKeju);
    
    var pesanNori = "Halo Admin The Volcano Bay, saya ingin memesan:\n- Menu: Volcano Mentai Nori\n- Jumlah: 1 porsi\n- Total Bayar: Rp 28.000.\n\nMohon dibantu proses pesanannya ya, terima kasih!";
    document.getElementById('wa-btn-nori').href = "https://wa.me" + nomorWA + "?text=" + encodeURIComponent(pesanNori);
    
    // Tautan WA utama di blok kontak bawah
    var pesanUmum = "Halo Admin The Volcano Bay, saya ingin bertanya tentang menu kuliner dimsum mentai.";
    document.getElementById('wa-admin-utama').href = "https://wa.me" + nomorWA + "?text=" + encodeURIComponent(pesanUmum);
}

window.onload = siapkanTautanAwal;
