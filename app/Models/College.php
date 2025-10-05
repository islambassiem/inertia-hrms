<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class College extends Model
{
    /** @use HasFactory<\Database\Factories\CollegeFactory> */
    use HasFactory, TracksUser;

    protected $table = '_colleges';

    protected $fillable = [
        'code',
        'college_en',
        'college_ar',
        'created_by',
        'updated_by',
    ];
}
