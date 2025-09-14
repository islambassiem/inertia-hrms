<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class Extention extends Model
{
    /** @use HasFactory<\Database\Factories\ExtentionFactory> */
    use HasFactory, TracksUser;

    protected $table = '_extentions';

    protected $fillable = [
        'number',
        'is_active',
        'owner',
        'created_by',
        'updated_by',
    ];
}
