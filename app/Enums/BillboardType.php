<?php

namespace App\Enums;

enum BillboardType: string
{
    case Static = 'static';
    case Digital = 'digital';
    case Backlit = 'backlit';
    case Mobile = 'mobile';
}
