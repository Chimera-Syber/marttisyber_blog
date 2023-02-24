<?php

use App\Http\Controllers\ProfileController;

// Publishroom
use App\Http\Controllers\Publishroom\MainController;
use App\Http\Controllers\Publishroom\Post\PostController;
use App\Http\Controllers\Publishroom\Category\CategoryController;

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

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::group(['namespace' => 'Publishroom', 'prefix' => 'publishroom', 'middleware' => ['auth', 'verified']], function() {
    Route::get('/', [MainController::class, 'index'])->name('publishroom.index');

    Route::group(['namespace' => 'Post', 'prefix' => 'post', 'middleware' => ['auth', 'verified']], function() {
       Route::get('/', [PostController::class, 'index'])->name('publishroom.post.index');
       Route::get('/create', [PostController::class, 'create'])->name('publishroom.post.create');
       Route::post('/store', [PostController::class, 'store'])->name('publishroom.post.store');
    });

    Route::group(['namespace' => 'Category', 'prefix' => 'category', 'middleware' => ['auth', 'verified']], function() {
        Route::get('/', [CategoryController::class, 'index'])->name('publishroom.category.index');
        Route::get('/create', [CategoryController::class, 'create'])->name('publishroom.category.create');
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
