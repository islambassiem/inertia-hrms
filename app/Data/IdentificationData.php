<?php

declare(strict_types=1);

namespace App\Data;

use Spatie\LaravelData\Data;

final class IdentificationData extends Data
{
    public function __construct(
        public ?int $employee_id,
        public ?string $type,
        public ?string $id_number,
        public ?string $place_of_issue,
        public ?string $date_of_issue,
        public ?string $date_of_expiry
    ) {}
}
