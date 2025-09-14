<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\PositionType;
use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

final class Position extends Model
{
    /** @use HasFactory<\Database\Factories\PositionFactory> */
    use HasFactory, TracksUser;

    protected $table = '_positions';

    protected $fillable = [
        'code',
        'position_en',
        'position_ar',
        'entity_id',
        'type',
        'created_by',
        'updated_by',
    ];

    public function casts(): array
    {
        return [
            'type' => PositionType::class,
        ];
    }

    /**
     * @return BelongsToMany<Employee, $this>
     */
    public function employees(): BelongsToMany
    {
        return $this->belongsToMany(Employee::class);
    }
}
