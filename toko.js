const prompt = require('prompt-sync')();
const {store, getAll} = require('./index');

function tambahBarang(){
    const id = prompt('Masukkan ID Barang : ');
    const nama = prompt('Masukkan Nama Barang : ');
    const harga = prompt('Masukkan Harga Barang : ');
    const kuantitas = prompt('Masukkan Jumlah Barang : ');

    const barang = {
        id,
        nama,
        harga,
        kuantitas,
    };
    store('barang', barang)

}

function operasi() {
    console.log('Aplikasi Toko')
    console.log('1. Menyimpan data stok barang'); 
    console.log('2. Menampilkan semua data stok barang');
    console.log('3. Menampilkan total harga semua barang (harga * kuantitas)')
    console.log('4. Update data barang *opsional')
    console.log('5. Hapus data barang *opsional')
    console.log('6. Exit')
    ap = parseInt(prompt('Pilih Aplikasi: '));
    switch (ap) {
        case 1:
            console.log('Aplikasi Input Stok Barang');
            tambahBarang();
            operasi();

        case 2:
            console.log('Aplikasi Data Stok')
            getAll();
            operasi();

        case 3:
            console.log('Total Harga Stok');

        case 6:
            process.exit(0)

            default:
            operasi()
    }
        
    
}
operasi()