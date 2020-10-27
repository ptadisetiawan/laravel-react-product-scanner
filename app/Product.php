<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'id', 'kode', 'name', 'harga', 'partai_1', 'harga_partai_1', 'partai_2', 'harga_partai_2', 'unit'
    ];
}
