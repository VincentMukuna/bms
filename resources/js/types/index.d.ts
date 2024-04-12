export interface User extends Document {
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};

export interface Document {
    id: number;
    created_at: string;
    updated_at: string;
}

export interface Billboard extends Document {
    image_url: string;
    daily_rate: number;
    latitude: number;
    longitude: number;
    size: BillboardSize;
    type: BillboardType;
    campaign_id: number;
}

export type BillboardSize = "small" | "medium" | "large";
export type BillboardType = "static" | "digital" | "mobile" | "backlit";
