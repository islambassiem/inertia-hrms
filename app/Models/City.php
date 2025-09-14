<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class City extends Model
{
    /** @use HasFactory<\Database\Factories\CityFactory> */
    use HasFactory, TracksUser;

    protected $table = '_cities';

    protected $fillable = [
        'code',
        'city_en',
        'city_ar',
        'created_by',
        'updated_by',
    ];
}
