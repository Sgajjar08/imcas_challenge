<?php
use App\User;
use Illuminate\Support\Facades\Input;
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
    return view('index');
});

Route::any('/search', function (Request $request) {
    $q = $request->input('q');
    $products = Product::where ( 'name', 'LIKE', '%' . $q . '%' )->get ();
    if (count ( $name ) > 0)
        return view ( 'pages.search' )->withDetails ( $products )->withQuery ( $q );
    else
        return view ( 'pages.home' )->withMessage ( 'No Details found. Try to search again !' );
});

Route::resource('products', 'ProductsController');