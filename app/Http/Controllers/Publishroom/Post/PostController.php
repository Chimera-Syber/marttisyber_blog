<?php

namespace App\Http\Controllers\Publishroom\Post;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;

// Models
use App\Models\Post;

// Requests
use App\Http\Requests\Admin\Post\StoreRequest;

// Facades
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
    }

    /**
     * Render post list
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Publishroom/Post/PostIndex');
    }

    /**
     * Render create post page
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('Publishroom/Post/CreatePost');
    }

    /**
     * Store post
     * @param StoreRequest $request
     * @return RedirectResponse
     */
    public function store(StoreRequest $request): RedirectResponse
    {

        $data = $request->validated();

        try {

            Db::beginTransaction();

            $data['user_id'] = Auth::user()->id;
            $data['category_id'] = 1;

            $post = Post::firstOrCreate($data);

            Db::commit();

        } catch (\Exception $exception) {
            Db::rollback();
            abort(500);
        }

        return redirect()->route('publishroom.index');
    }
}
