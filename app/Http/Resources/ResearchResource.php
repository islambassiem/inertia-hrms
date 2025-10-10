<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin \App\Models\Research
 */
final class ResearchResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'type' => new ResearchTypeResource($this->type),
            'status' => new ResearchStatuResource($this->status),
            'progress' => new ResearchProgressResource($this->progress),
            'nature' => new ResearchNatureResource($this->nature),
            'domain' => new ResearchDomainResource($this->domain),
            'citation' => new ResearchCitationResource($this->citation),
            'language' => new ResearchLanguageResource($this->language),
            'title' => $this->title,
            'publication_location' => $this->publication_location,
            'publication_date' => $this->publication_date,
            'publisher' => $this->publisher,
            'edition' => $this->edition,
            'isbn' => $this->isbn,
            'magazine' => $this->magazine,
            'publishing_url' => $this->publishing_url,
            'summary' => $this->summary,
            'key_words' => $this->key_words,
            'pages_number' => $this->pages_number,
        ];
    }
}
