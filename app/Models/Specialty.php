<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class Specialty extends Model
{
    /** @use HasFactory<\Database\Factories\SpecialtyFactory> */
    use HasFactory, TracksUser;

    protected $table = '_specialties';

    protected $fillable = [
        'code',
        'specialty_en',
        'specialty_ar',
        'created_by',
        'updated_by',
    ];
}
