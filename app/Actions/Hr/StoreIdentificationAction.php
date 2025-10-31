<?php

declare(strict_types=1);

namespace App\Actions\Hr;

use App\Data\IdentificationData;
use App\Models\Identification;

final class StoreIdentificationAction
{
    public function handle(IdentificationData $data): void
    {
        Identification::create($data->toArray());
    }
}
