<?php

namespace App\Http\Controllers\Publishroom;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class MainController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
    }

    public function index()
    {
        return Inertia::render('Publishroom/Publishroom');
    }
}
