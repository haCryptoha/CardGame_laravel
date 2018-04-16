<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    const FIELD_NAME = 'name';
    const FIELD_ADDRESS = 'address';
    const FIELD_TRANSACTION_HASH = 'transaction_hash';
    protected $fillable = ['name'];

    public static function updateAddress($name, $address, $transactionHash)
    {
        $c = self::firstOrNew([self::FIELD_NAME => $name]);
        $c[self::FIELD_ADDRESS] = $address;
        $c[self::FIELD_TRANSACTION_HASH] = $transactionHash;
        $c->save();
    }
}