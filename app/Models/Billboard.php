<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Billboard extends Model
{
    use HasFactory;

    protected $fillable = [
        'image_url',
        'monthly_rate',
        'latitude',
        'longitude',
        'available',
        'size',
        'campaign_id',
    ];

    public function campaign(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Campaign::class);
    }

    public function casts(): array
    {
        return [
            'size'=> \App\Enums\BillboardSize::class,
            'type'=> \App\Enums\BillboardType::class,
        ];

    }
}
