<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property \App\Enums\Bank $bank
 */
final class Bank extends Model
{
    /** @use HasFactory<\Database\Factories\BankFactory> */
    use HasFactory;

    use TracksUser;

    protected $fillable = [
        'employee_id',
        'bank',
        'account',
    ];

    protected function casts(): array
    {
        return [
            'bank' => \App\Enums\Bank::class,
        ];
    }
}
