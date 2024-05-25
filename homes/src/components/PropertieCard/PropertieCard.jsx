import React from "react";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";

const PropertieCard = ({ name, zone, price, description, image, id }) => {
    return (
        <div className="rounded-lg flex flex-col justify-between mb-10 w-fit">
            <Link to={`propertie/${id}`}>
                <div>
                    <div className="flex justify-center items-center w-fit">
                        <img src={image} alt="Property" className="casa" />
                    </div>
                    <h4 className="text-base font-semibold mt-2">{name}</h4>
                    <div className="flex items-end justify-between">
                        <p className="font-light text-base ml-2">${price}</p>
                        <BsHeart className="text-red-500 text-xl" />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default PropertieCard;
