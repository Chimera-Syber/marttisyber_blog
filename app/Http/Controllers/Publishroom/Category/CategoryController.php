<?php

namespace App\Http\Controllers\Publishroom\Category;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
    }

    public function index()
    {
        return Inertia::render('Publishroom/Category/CategoryIndex');
    }

    /**
     * Render create category page
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('Publishroom/Category/CreateCategory');
    }
}
