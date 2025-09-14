<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\FamilyRelationship;
use App\Enums\Gender;
use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

final class Dependent extends Model
{
    /** @use HasFactory<\Database\Factories\DependentFactory> */
    use HasFactory, TracksUser;

    protected $fillable = [
        'employee_id',
        'name',
        'identification',
        'gender',
        'date_of_birth',
        'relationship',
        'created_by',
        'updated_by',
    ];

    public function casts(): array
    {
        return [
            'gender' => Gender::class,
            'date_of_birth' => 'date',
            'releationship' => FamilyRelationship::class,
        ];
    }

    /**
     * @return BelongsTo<Employee, $this>
     */
    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class);
    }
}
