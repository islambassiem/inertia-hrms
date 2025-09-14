<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class Achievement extends Model
{
    /** @use HasFactory<\Database\Factories\AchievementFactory> */
    use HasFactory, TracksUser;

    protected $fillable = [
        'employee_id',
        'title',
        'donor',
        'year',
        'created_by',
        'updated_by',
    ];
}
