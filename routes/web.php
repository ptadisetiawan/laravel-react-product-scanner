<?php

use Illuminate\Support\Facades\Route;

// Route::view('/', 'app');
// Route::view('/{path}', 'app');
// Route::view('/result/{path}', 'app');

Route::get('/{path?}', [
    'uses' => 'ReactController@show',
    'as' => 'react',
    'where' => ['path' => '.*']
]);
