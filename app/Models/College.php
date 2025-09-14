<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

final class College extends Model
{
    /** @use HasFactory<\Database\Factories\CollegeFactory> */
    use HasFactory, TracksUser;

    protected $table = '_colleges';

    protected $fillable = [
        'branch_id',
        'code',
        'college_en',
        'college_ar',
        'created_by',
        'updated_by',
    ];

    /**
     * @return BelongsTo<Branch, $this>
     */
    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }
}
