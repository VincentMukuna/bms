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
            'address'=> $this->faker->address,
            'description'=> $this->faker->sentence,
            'county' => $this->faker->city,
            'daily_rate' => $this->faker->randomFloat(0, 1000, 500000),
            'latitude' => $this->faker->randomFloat(8, -1.246389, -1.392066),
            'longitude' => $this->faker->randomFloat(8, 36.621946, 37.028193),
            'size' => $this->faker->randomElement(['small', 'medium', 'large']),
            'type' => $this->faker->randomElement(['digital', 'static', 'mobile']),
        ];
    }
}
