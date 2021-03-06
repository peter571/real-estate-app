import React from 'react';
import { PropertyValues } from "../../types"
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { Link } from "react-router-dom";

const Property = (prop: PropertyValues) => {
    const { price, _id, rooms, bathrooms, title, place, sqft, images, type } = prop;
    return (
        <div className="flex flex-col">
            <div className="aspect-w-3 aspect-h-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200 cursor-pointer">
                <Link className='' to={`/${_id}`}>
                    <img src={images![0]} className="object-cover" alt="property-img" />
                </Link>
            </div>
            <div className="mt-1">
                <div className="flex justify-between items-center my-1">
                    <div className="flex justify-between items-center gap-2">
                        <GoVerified className="text-[#2b5f2b]" />
                        <p>{type === 'for-sale' ? `${price.toLocaleString()} USD` : `${price.toLocaleString()} USD/Monthly`}</p>
                    </div>
                    <div className="cursor-pointer">
                        <img className="rounded-full h-8 w-8" src={images![0]} alt="" />
                    </div>
                </div>
                <p>{place}</p>
                <div className="flex justify-start items-center gap-4 text-sky-500">
                    {rooms} <FaBed /> | {bathrooms} <FaBath /> | {sqft.toFixed(2)} sqft <BsGridFill />
                </div>
                <p className="truncate">{title}</p>
            </div>
        </div>
    )
}

export default Property
