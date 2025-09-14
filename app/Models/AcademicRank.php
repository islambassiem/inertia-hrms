<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\AcademicRank as AcademicRankEnum;
use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

final class AcademicRank extends Model
{
    /** @use HasFactory<\Database\Factories\AcademicRankFactory> */
    use HasFactory, TracksUser;

    protected $fillable = [
        'employee_id',
        'academic_rank',
        'effective_date',
        'end_date',
        'created_by',
        'updated_by',
    ];

    public function casts(): array
    {
        return [
            'academic_rank' => AcademicRankEnum::class,
            'effective_date' => 'date',
            'end_date' => 'date',
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
