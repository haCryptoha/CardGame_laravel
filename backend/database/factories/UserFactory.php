<?php

use App\Helpers\EthereumConverter;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Models\User::class, function (Faker $faker) {
    return [

        'nickname' => $faker->firstName,
//        'email' => $faker->unique()->safeEmail,
        'address' => '0xfakex'.$faker->unique()->sha1,
    ];
});

$factory->define(App\Models\Card::class, function (Faker $faker) {
    return [
        'name'       => $faker->word,
        'created_at' => $faker->dateTimeThisMonth($max = 'now', $timezone = null),
    ];
});

$factory->define(App\Models\Attribute::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
    ];
});

$factory->define(App\Models\Transaction::class, function(Faker $faker) {
    return [
        'card_id'    => App\Models\Card::all()->random()->id,
        'user_id'    => App\Models\User::all()->random()->id,
        'price'      => EthereumConverter::convertETHPriceToInt($faker->randomFloat(13, 0, 2)),
        'created_at' => $faker->dateTimeThisMonth($max = 'now', $timezone = null),
    ];
});

$factory->define(App\Models\Listing::class, function(Faker $faker) {
    return [
        'card_id' => App\Models\Card::all()->random()->id,
        'user_id' => App\Models\User::all()->random()->id,
        'price'   => EthereumConverter::convertETHPriceToInt($faker->randomFloat(13, 0, 2)),
    ];
});
