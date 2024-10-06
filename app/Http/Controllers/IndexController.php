<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index()
    {
        return inertia(
            'Index/Index',
            [
                'message' => 'Hello from Index Laravel Controller'
            ]
        );
    }

    public function show()
    {
        return inertia(
            'Index/Show',
            [
                'message' => 'Show from Laravel Controller'
            ]
        );
    }
}
