import React from "react";
import { BsHeart, BsSearch } from 'react-icons/bs';
import highResolutionImage from '../../assets/images/pex.jpg';
import PropertieCard from "../PropertieCard/PropertieCard";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { GET_ALL_PROPERTIES, getProperties } from "../redux/actions/actions";
import { HiOutlineRefresh } from 'react-icons/hi';

const Properties = () => {
    
    const dispatch = useDispatch();
    const properties = useSelector((state) => state.properties);

    useEffect(() => {
        dispatch(getProperties());
    }, [dispatch]);

    const sortedProperties = properties.slice().sort((a, b) => a.id - b.id);
    const [selectedPriceRange, setSelectedPriceRange] = useState(null);
    const [selectedTypeOfPlace, setSelectedTypeOfPlace] = useState(null);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [selectedRegion, setSelectedRegion] = useState(null);

    const priceRanges = [
        { label: "All", value: "All" },
        { label: "For Rent", value: "For Rent" },
        { label: "For Sale", value: "For Sale" },
    ];

    const typesOfPlaces = [
        { label: "All", value: "all" },
        { label: "Apartment", value: "apartment" },
        { label: "Beach House", value: "beach" },
        { label: "House", value: "house" },
        { label: "Tiny House", value: "tiny" },
        { label: "Tree House", value: "tree" }
    ];

    const regions = [
        { label: "Region 1", value: "region1" },
        { label: "Region 2", value: "region2" }
    ];

    const handlePriceSelection = (price) => {
        setSelectedPriceRange(price);
    };

    const handleTypeSelection = (type) => {
        setSelectedTypeOfPlace(type);
    };

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
    };

    const handleRegionSelection = (region) => {
        setSelectedRegion(region);
    };


    return (
        <div className="flex mt-20">
            {/* Main Container */}
            <div className="w-3/4 p-8 ml-4">
                {/* Search Bar */}
                <div className="flex items-center mb-4">
                  <div className="relative flex-grow">
                    <input type="text" className="border border-gray-300 rounded-lg p-2 pl-10 w-full" />
                      <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                        <BsSearch className="text-gray-400" />
                      </div>
                  </div>
              <select className="border border-gray-300 rounded-lg p-2 w-48 ml-4 text-gray-500">
                <option value="" hidden>Short By</option>
                <option value="option1">By Price: Low to high</option>
                <option value="option2">By Price: High to low</option>
                <option value="option3">By Newest</option>
                <option value="option4">By Oldest</option>
              </select>
            </div>


                {/* Property Cards */}
                <div className="grid grid-cols-3 gap-4">
                    {/* Card 1 */}
                    {properties.length > 0 ? (
                        sortedProperties.map((e) => (
                            <PropertieCard
                              name={e.name}
                              zone={e.zone}
                              price={e.price}
                              description={e.description}
                              image={e.image}
                              />
                        ))
                    ) : (
                        <h3>Loading...</h3>
                    )}              
                </div>
            </div>

            {/* Filters Container */}
            <div className="w-1/4 p-8 border-l border-gray-300 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                    <h4>Price</h4>
                    <HiOutlineRefresh className="text-2xl font-light cursor-pointer" />
                </div>
                <div className="mb-4">
                    <h4>Price Range</h4>
                    <div className="flex">
                        <input
                            type="number"
                            placeholder="Min"
                            className="border border-gray-300 rounded-lg p-2 w-1/2 mr-2"
                            value={minPrice}
                            onChange={handleMinPriceChange}
                        />
                        <input
                            type="number"
                            placeholder="Max"
                            className="border border-gray-300 rounded-lg p-2 w-1/2"
                            value={maxPrice}
                            onChange={handleMaxPriceChange}
                        />
                    </div>
                  </div>
                <div className="mb-6">
                    {priceRanges.map((price) => (
                        <div
                            key={price.value}
                            className={`cursor-pointer flex items-center mb-2 ${selectedPriceRange === price.value ? 'text-blue-500' : 'text-gray-600'}`}
                            onClick={() => handlePriceSelection(price.value)}
                        >
                            <div className={`w-4 h-4 border rounded-full mr-2 ${selectedPriceRange === price.value ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}></div>
                            {price.label}
                        </div>
                    ))}
                </div>

                <div className="mb-6">
                    <h4>Type Of Place</h4>
                    {typesOfPlaces.map((type) => (
                        <div
                            key={type.value}
                            className={`cursor-pointer flex items-center mb-2 ${selectedTypeOfPlace === type.value ? 'text-blue-500' : 'text-gray-600'}`}
                            onClick={() => handleTypeSelection(type.value)}
                        >
                            <div className={`w-4 h-4 border rounded-full mr-2 ${selectedTypeOfPlace === type.value ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}></div>
                            {type.label}
                        </div>
                    ))}
                </div>
                <div className="mb-6">
                    <h4>Region</h4>
                    <select
                        value={selectedRegion}
                        onChange={handleRegionSelection}
                        className="border border-gray-300 rounded-lg p-2 text-gray-600"
                    >
                        <option value="">Select Region</option>
                        {regions.map((region) => (
                            <option key={region.value} value={region.value}>
                                {region.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>                  
        </div>
    );
};

export default Properties;
