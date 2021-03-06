import React from "react";

export interface BannerProp {
    imgurl: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    reverse: boolean;
}

export interface BtnProp {
    buttonText: string;
    type: "button" | "submit" | "reset" | undefined;
    onClick?: (e: React.FormEvent<EventTarget>) => void;
}

export interface CarouselProp {
    carouselData: Array<string>
}

export interface FiltersProp {
    category: string;
    minPrice: string;
    maxPrice: string;
    areaMax: string;
    roomsMin: string;
    bathsMin: string;
    type: string;
}

export interface FilteredDataProp {
    filteredData: PropertyValues[];
}

export interface LoginValues {
    email: string;
    password: string;
}

export interface RegisterValues {
    email: string;
    realtorName: string;
    password: string;
    profileImg: string | ArrayBuffer | null;
    confirmPassword: string;
}

export interface PropertyValues {
    images: string[] | undefined;
    rooms: number;
    bathrooms: number;
    price: number;
    sqft: number;
    description: string;
    title: string;
    place: string;
    type: string;
    contact: number | string;
    _id?: string;
    owner: any;
    availability: boolean;
    category: string;
}
