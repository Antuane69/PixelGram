<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;

class PostController extends Controller
{
    public function index(){

        $posts = Post::with("user")->latest()->get();
        $now = now();

        return Inertia::render("Posts/Index",[
            "posts" => $posts,
            "now" => $now
        ]);

    }

    public function store(StorePostRequest $request){

        auth()->user()->posts()->create(
            $request->validated()
        );

        return redirect()->route("posts.index")->with("message",[
            "type" => "success",
            "body" => "Publicación Creada Exitosamente",
        ]);
        
    }
}
