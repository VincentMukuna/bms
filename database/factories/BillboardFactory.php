<?php

namespace Database\Factories;

use App\Models\Billboard;
use Illuminate\Database\Eloquent\Factories\Factory;

class BillboardFactory extends Factory
{
    protected $model = Billboard::class;

    public function definition(): array
    {
        return [
            'image_url' => $this->faker->imageUrl(),
            'daily_rate' => $this->faker->randomFloat(0, 1000, 500000),
            //latitude and longitude are the coordinates of the billboard within Nairobi
            'latitude' => $this->faker->randomFloat(8, -1.300, -1.100),
            'longitude' => $this->faker->randomFloat(8, 36.7000, 37.1219),
            'size' => $this->faker->randomElement(['small', 'medium', 'large']),
            'type' => $this->faker->randomElement(['digital', 'static', 'mobile']),
        ];
    }
}
