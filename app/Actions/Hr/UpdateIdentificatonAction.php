<?php

declare(strict_types=1);

namespace App\Actions\Hr;

use App\Data\IdentificationData;
use App\Models\Identification;

final class UpdateIdentificatonAction
{
    public function handle(Identification $identification, IdentificationData $data): void
    {
        $identification->update($data->toArray());
    }
}
