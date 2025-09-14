<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class Faculty extends Model
{
    /** @use HasFactory<\Database\Factories\FacultyFactory> */
    use HasFactory, TracksUser;

    protected $table = '_faculties';

    protected $fillable = [
        'code',
        'faculty_en',
        'faculty_ar',
        'created_by',
        'updated_by',
    ];
}
