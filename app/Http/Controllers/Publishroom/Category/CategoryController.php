<?php

namespace App\Http\Controllers\Publishroom\Category;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Category\StoreRequest;
use App\Models\Category;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

// Facades
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
    }

    public function index()
    {
        $categories = Category::orderBy('id')->paginate(10);
        return Inertia::render('Publishroom/Category/CategoryIndex', [
            'categories' => $categories,
        ]);
    }

    /**
     * Render create category page
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('Publishroom/Category/CreateCategory');
    }

    /**
     * Store category
     * @param StoreRequest $request
     * @return RedirectResponse
     */
    public function store(StoreRequest $request): RedirectResponse
    {
        $data = $request->validated();

        try {

            Db::beginTransaction();

            Category::firstOrCreate($data);

            Db::commit();

        } catch (\Exception $exception) {
            Db::rollBack();
            abort(500);
        }

        return redirect()->route('publishroom.index');
    }


}
