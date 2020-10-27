<?php

namespace App\Imports;

use App\Product;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Contracts\Queue\ShouldQueue; //IMPORT SHOUDLQUEUE
use Maatwebsite\Excel\Concerns\WithChunkReading; //IMPORT CHUNK READING
// jika tanpa queue uncomment WithChunkReading , ShouldQueue dan function chunkSize
class ProductsImport implements ToModel, WithHeadingRow, WithChunkReading, ShouldQueue
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return Product::updateOrCreate([
            'kode' => $row['kode'],
        ], [
            'name' => $row['keterangan'],
            'harga' => $row['hargajual'],
            'partai_1' => $row['qty_party'],
            'harga_partai_1' => $row['prc_party'],
            'partai_2' => $row['qty_party2'],
            'harga_partai_2' => $row['prc_party2'],
            'unit' => $row['unit']
        ]);
    }

     //LIMIT CHUNKSIZE
     public function chunkSize(): int
     {
         return 1000; //ANGKA TERSEBUT PERTANDA JUMLAH BARIS YANG AKAN DIEKSEKUSI
     }
}
