<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class Sponsorship extends Model
{
    /** @use HasFactory<\Database\Factories\SponsorshipFactory> */
    use HasFactory, TracksUser;

    protected $table = '_sponsorships';

    protected $fillable = [
        'code',
        'sponsorship_en',
        'sponsorship_ar',
        'created_by',
        'updated_by',
    ];
}
