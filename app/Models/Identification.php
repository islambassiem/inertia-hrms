<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\IdentificationType;
use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class Identification extends Model
{
    /** @use HasFactory<\Database\Factories\IdentificationFactory> */
    use HasFactory, TracksUser;

    protected $fillable = [
        'employee_id',
        'type',
        'id_number',
        'place_of_issue',
        'date_of_issue',
        'date_of_expiry',
        'created_by',
        'updated_by',
    ];

    public function casts(): array
    {
        return [
            'type' => IdentificationType::class,
            'date_of_issue' => 'datetime',
            'date_of_expiry' => 'datetime',
        ];
    }
}
