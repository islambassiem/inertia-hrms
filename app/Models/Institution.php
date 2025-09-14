<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class Institution extends Model
{
    /** @use HasFactory<\Database\Factories\InstitutionFactory> */
    use HasFactory, TracksUser;

    protected $table = '_institutions';

    protected $fillable = [
        'code',
        'institution_en',
        'institution_ar',
        'created_by',
        'updated_by',
    ];
}
