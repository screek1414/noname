<?php

namespace App\Http\Controllers;

use App\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $comment = Comment::create([
            'course_id' => $request->id,
            'comment' => $request->comment
        ]);
        return response()->json(['comment' => $comment->toArray()]);
    }

    public function destroy(Request $request)
    {
        $comment = Comment::find($request->id);
        $comment->delete();
        return response()->json(['message' => 'Success']);
    }
}
