<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class Address extends Model
{
    /** @use HasFactory<\Database\Factories\AddressFactory> */
    use HasFactory;

    use TracksUser;

    protected $fillable = [
        'employee_id',
        'building_number',
        'street',
        'district',
        'city',
        'postal_code',
        'secondary_number',
    ];
}
