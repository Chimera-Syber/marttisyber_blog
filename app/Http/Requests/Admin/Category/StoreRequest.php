<?php

namespace App\Http\Requests\Admin\Category;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'title' => 'required|string',
            'description' => 'nullable|string',
            'seo_keys' => 'nullable|string',
            'seo_description' => 'nullable|string'
        ];
    }

    /**
     * Errors messages
     * @return string[]
     */
    public function messages()
    {
        return [
            'title.required' => 'Необходимо заполнить название',
            'title.string' => 'Название должно быть строкой',
            'description.string' => 'Описание должно быть строкой',
            'seo_keys.string' => 'SEO keys должны быть строкой',
            'seo_description' => 'SEO описание должно быть строкой'
        ];
    }
}
