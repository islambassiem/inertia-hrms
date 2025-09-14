<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class Entity extends Model
{
    /** @use HasFactory<\Database\Factories\EntityFactory> */
    use HasFactory, TracksUser;

    protected $table = '_entities';

    protected $fillable = [
        'code',
        'entity_en',
        'entity_ar',
        'created_by',
        'udated_by',
    ];
}
