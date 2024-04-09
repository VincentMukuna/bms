<?php

namespace App\Http\Controllers;

use App\Models\Billboard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Inertia\Inertia;

class BillboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $billboards = Billboard::all();
        return Inertia::render('Billboard/Index', [
            'billboards' => $billboards
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Billboard $billboard)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Billboard $billboard)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Billboard $billboard)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Billboard $billboard)
    {
        //
    }
}
