<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;
use App\Models\Post;
use Illuminate\Support\Arr;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = $request->user();
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $user,
            ],
            "greeting" => "Bienvenidos a PixelGram",
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            "message" => collect(Arr::only($request->session()->all(),["success","error"]))
            ->mapWithKeys(function($body,$key){
                return [
                    "type" => $key,
                    "body" => $body
                ];
            }),
            "can" => [
                "post_create" => $user && $user->can("create",Post::class)
            ],
        ];
    }
}
