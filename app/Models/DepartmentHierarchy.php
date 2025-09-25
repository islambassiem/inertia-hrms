<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

final class DepartmentHierarchy extends Model
{
    /** @use HasFactory<\Database\Factories\DepartmentHierarchyFactory> */
    use HasFactory, TracksUser;

    protected $fillable = [
        'branch_id',
        'college_id',
        'department_id',
        'entity_id',
        'created_by',
        'updated_by',
    ];

    /**
     * @return BelongsTo<Institution, $this>
     */
    public function entity(): BelongsTo
    {
        return $this->belongsTo(Institution::class, 'entity_id');
    }
}
