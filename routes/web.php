<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/login', function () {
    return view('welcome');
});
Route::get('/dashboard', function(){
    return view('dashboard');
});
Route::get('/course', function(){
    return view('dashboard');
});
Route::get('/gradeS', function(){
    return view('dashboard');
});
Route::get('/calification', function(){
    return view('dashboard');
});
Route::get('/asignateC', function(){
    return view('dashboard');
});
Route::get('/asignateN', function(){
    return view('dashboard');
});
Route::get('/asignateA', function(){
    return view('dashboard');
});
Route::get('/asignateM', function(){
    return view('dashboard');
});
Route::get('/reportN', function(){
    return view('dashboard');
});
Route::get('/reportM', function(){
    return view('dashboard');
});
Route::get('/register', function(){
    return view('dashboard');
});
