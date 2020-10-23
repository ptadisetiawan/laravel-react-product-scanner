<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', 'UserController@register');
Route::post('login', 'UserController@login');
Route::post('product/import', 'ProductController@import')->middleware('jwt.verify');
Route::get('product', 'ProductController@index')->middleware('jwt.verify');
Route::get('product/{id}', 'ProductController@show');

// Route::get('bookall', 'ProductController@bookAuth')->middleware('jwt.verify');
// Route::get('user', 'UserController@getAuthenticatedUser')->middleware('jwt.verify');
