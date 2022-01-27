<?php

use App\Http\Controllers\GenreController;
use App\Http\Controllers\PopularMovies;
use App\Http\Controllers\PopularMoviesController;
use App\Http\Controllers\SearchMovieController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

// Route::get('/', function () {
//     return Inertia::render('Home', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [PopularMoviesController::class, 'index']);

Route::get('/{movieName}', [SearchMovieController::class, 'show'])->name('home.show');

//Route::get('/categories',[GenreController::class, 'index']) ->name('categories.index');
Route::get('/categories/{id}', [GenreController::class, 'show'])->name('categories.show');

Route::get("/categoriesmobile", function() {
    return Inertia::render('CategoriesMobile');
});

Route::get("/shelf", function() {
    return Inertia::render('Shelf');
});

Route::get("/notes", function() {
    return Inertia::render('Notes');
});

Route::get("/signin", function() {
    return Inertia::render('Signin');
});

Route::get("/signup", function() {
    return Inertia::render('Signup');
});

Route::get("/profile", function() {
    return Inertia::render('Profile');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
