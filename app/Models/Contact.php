<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\ContactType;
use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class Contact extends Model
{
    /** @use HasFactory<\Database\Factories\ContactFactory> */
    use HasFactory;

    use TracksUser;

    protected $fillable = [
        'employee_id',
        'type',
        'value',
    ];

    public function casts(): array
    {
        return [
            'type' => ContactType::class,
        ];
    }
}
