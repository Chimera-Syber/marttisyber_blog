<?php

namespace App\Http\Controllers\Publishroom\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

use App\Models\Post;

class CreateController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
    }

    public function index()
    {
        return Inertia::render('Publishroom/Post/CreatePost');
    }

    public function store(Request $request)
    {
        Validator::make($request->all(), [
           'title' => ['required']
        ])->validate();

        Post::create($request->all());

        return redirect()->route('publishroom.index');
    }
}
