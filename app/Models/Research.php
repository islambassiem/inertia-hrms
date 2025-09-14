<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\ResearchCitation;
use App\Enums\ResearchDomain;
use App\Enums\ResearchLanguage;
use App\Enums\ResearchNature;
use App\Enums\ResearchProgress;
use App\Enums\ResearchStatus;
use App\Enums\ResearchType;
use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class Research extends Model
{
    /** @use HasFactory<\Database\Factories\ResearchFactory> */
    use HasFactory, TracksUser;

    protected $fillable = [
        'employee_id',
        'type',
        'status',
        'progress',
        'nature',
        'domain',
        'citation',
        'language',
        'title',
        'publication_location',
        'publication_date',
        'publisher',
        'edition',
        'isbn',
        'magazine',
        'publishing_url',
        'summary',
        'key_words',
        'pages_number',
        'created_by',
        'updated_by',
    ];

    public function casts(): array
    {
        return [
            'type' => ResearchType::class,
            'status' => ResearchStatus::class,
            'progress' => ResearchProgress::class,
            'nature' => ResearchNature::class,
            'domain' => ResearchDomain::class,
            'citation' => ResearchCitation::class,
            'language' => ResearchLanguage::class,
            'publication_date' => 'date',

        ];
    }
}
