<?php
/*
    CryptoCards Home Controller - github.com/CryptoCardsETH/backend
    File created by Harris Christiansen (HarrisChristiansen.com)
*/

namespace App\Http\Controllers;

class HomeController extends Controller
{
    public function getIndex()
    {
        return view('pages.home');
    }
}