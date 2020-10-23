<?php

namespace App\Http\Controllers;

use App\Product;
use App\Jobs\ImportJob;
use Illuminate\Http\Request;
use App\Imports\ProductsImport;
use Exception;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Facades\Excel;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $product = Product::all();
        return response()->json($product, 200);
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            if( $product = Product::where(['kode' => $id])->first()){
                return response()->json($product, 200);
            }else{
                return response()->json(['message' => 'Produk tidak ditemukan'], 404);
            }
        } catch (Exception $exception) {
            return response()->json($exception->getMessage(), 500);
        }
    }


    public function import(Request $request)
    {
        $this->validate($request, [
            'file' => 'required|mimes:xls,xlsx'
        ]);
        if ($request->hasFile('file')) {
            // tanpa queue
            // $file = $request->file('file'); //GET FILE
            // Excel::import(new ProductsImport, $file); //IMPORT FILE
            //UPLOAD FILE
            $file = $request->file('file');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $file->storeAs(
                'public',
                $filename
            );

            //MEMBUAT JOBS DENGAN MENGIRIMKAN PARAMETER FILENAME
            ImportJob::dispatch($filename);
            return response()->json([
                'message' => 'Berhasil'
            ], 200);
        } else {
            return response()->json(['message' => 'internal error'], 500);
        }
    }
}
