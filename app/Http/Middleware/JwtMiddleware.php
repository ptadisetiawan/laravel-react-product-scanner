<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;

class JwtMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
            if (!$user) throw new Exception('User not found');
        } catch (\Exception $e) {
            if ($e instanceof TokenInvalidException) {
                return response()->json([
                    'data' => null,
                    'status' => false,
                    'err_' => [
                        'message' => 'Token invalid',
                        'code' => 1
                    ]
                ],400);
            } else if ($e instanceof TokenExpiredException) {
                return response()->json([
                    'data' => null,
                    'status' => false,
                    'err_' => [
                        'message' => 'Token expired',
                        'code' => 1
                    ]
                ], 400);
            } else {
                if ($e->getMessage() === 'User Not Found') {
                    return response()->json([
                        "data" => null,
                        "status" => false,
                        "err_" => [
                            "message" => "User Not Found",
                            "code" => 1
                        ]
                    ],400);
                }
                return response()->json([
                    'data' => null,
                    'status' => false,
                    'err_' => [
                        'message' => 'Authorization Token not found',
                        'code' => 1
                    ]
                ], 400);
            }
        }
        return $next($request);
    }
}
