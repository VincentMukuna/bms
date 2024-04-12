import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useForm } from "@inertiajs/react";
import { Label } from "@/components/ui/label";
import { Input, InputGroup } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import usePageProps from "@/lib/hooks/usePageProps";
import { CreateBillboardPageProps } from "@/Pages/Billboard/Create";
import { slugToReadable } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import React from "react";

export default function CreateBillBoardsForm() {
    const { billboard_sizes, billboard_types } =
        usePageProps<CreateBillboardPageProps>();
    useForm({});
    return (
        <Card>
            <CardHeader>
                <CardTitle>Create a new billboard</CardTitle>
                <CardDescription>Enter billboard details below</CardDescription>
            </CardHeader>
            <form></form>
            <CardContent>
                <div
                    className={
                        "grid  grid-cols-1 items-start gap-y-8 lg:grid-cols-2"
                    }
                >
                    <div className={"grid max-w-sm gap-6 "}>
                        <InputGroup>
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id={"description"}
                                placeholder={
                                    "Enter a brief description of the billboard"
                                }
                                maxLength={1000}
                            />
                        </InputGroup>

                        <InputGroup>
                            <Label htmlFor="picture">Picture</Label>
                            <Input id="picture" type="file" />
                        </InputGroup>

                        <InputGroup>
                            <Label htmlFor="daily_rate">Daily Rate</Label>
                            <Input
                                id={"daily_rate"}
                                type={"number"}
                                min={0}
                                placeholder={"100"}
                            />
                        </InputGroup>

                        <div className={"flex flex-wrap gap-2 lg:flex-nowrap"}>
                            <InputGroup>
                                <Label htmlFor={"size"}>Billboard Size</Label>
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Select a billboard size" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>
                                                Billboard Sizes
                                            </SelectLabel>
                                            {billboard_sizes.map((size) => (
                                                <SelectItem
                                                    key={size}
                                                    value={size}
                                                >
                                                    {slugToReadable(size)}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </InputGroup>
                            <InputGroup>
                                <Label htmlFor={"size"}>Billboard Type</Label>
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Select a billboard type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>
                                                Billboard Types
                                            </SelectLabel>
                                            {billboard_types.map((type) => (
                                                <SelectItem
                                                    key={type}
                                                    value={type}
                                                >
                                                    {slugToReadable(type)}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </InputGroup>
                        </div>
                    </div>

                    <div className={"grid gap-4"}>
                        <Label>Move marker to select billboard position</Label>
                        <MapContainer
                            center={[-1.296389, 36.821946]}
                            zoom={10}
                            scrollWheelZoom={false}
                            className={" z-0 aspect-video rounded grayscale"}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[-1.296389, 36.821946]}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily
                                    customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>

                        <div className={"flex gap-2"}>
                            <InputGroup>
                                <Label htmlFor="latitude">Latitude</Label>
                                <Input
                                    id={"latitude"}
                                    type={"number"}
                                    min={-90}
                                    max={90}
                                    placeholder={"1.234"}
                                />
                            </InputGroup>
                            <InputGroup>
                                <Label htmlFor="longitude">Longitude</Label>
                                <Input
                                    id={"longitude"}
                                    type={"number"}
                                    min={-180}
                                    max={180}
                                    placeholder={"-31.234"}
                                />
                            </InputGroup>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className={"mt-4 flex gap-2"}>
                <Button>Save</Button>
                <Button variant={"secondary"}>Save and Create Another</Button>
            </CardFooter>
        </Card>
    );
}
