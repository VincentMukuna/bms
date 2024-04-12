<?php

namespace Database\Factories;

use App\Models\Campaign;
use Illuminate\Database\Eloquent\Factories\Factory;

class CampaignFactory extends Factory
{
    protected $model = Campaign::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->sentence(3),
            'objective' => $this->faker->paragraph(3,),
            'start_date' => $this->faker->dateTimeBetween($startDate = '-20 days', $endDate = '+30 days')->format('Y-m-d'),
            //end date is 30 days after the start date
            'end_date' => $this->faker->dateTimeBetween($startDate = 'now', $endDate = '+30 days')->format('Y-m-d'),
            'budget' => $this->faker->randomFloat(2, 100000, 1000000),

        ];
    }
}
