"use client"

import { Car, CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utlis";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useState } from "react";
import CarDetails from "./CarDetails";


interface CarCardProps {
    car: Car
}

const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car;
    const [isOpen, setIsOpen] = useState(false);

    const carRent = calculateCarRent(city_mpg, year)

    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2>{make} {model}</h2>
            </div>
            <p className="flex mt-6 text-[32px] font-extrabold">
                <span className="self-start text-[14px] font-semibold">$</span>
                {carRent}
                <span className="self-end text-[14px] font-medium">
                    /day
                </span>
            </p>
            <div className="relative w-full h-40 my-3 object-contain">
            <Image src={generateCarImageUrl(car)} alt="car modal" fill priority className="object-contain" />
            </div>
            <div className="relative flex w-full mt-2">
                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    <div className="flex flex-col jestify-center items-center gap-2 ">
                        <img src="https://img.freepik.com/free-icon/steering-wheel_318-507342.jpg?size=626&ext=jpg&ga=GA1.1.975291599.1688810676&semt=ais" width={20} height={20} alt="steering wheel" />
                        <p className="text-[14px]">
                            {transmission === 'a' ? 'Automatic' : "Manual"}
                        </p>
                    </div>
                    <div className="flex flex-col jestify-center items-center gap-2 ">
                        <img src="https://www.pngkey.com/png/detail/16-169355_gear-red-free-images-at-clker-com-gear.png" alt='wheel' height={40-10} width={40-10} />
                        <p className="text-[14px]">
                            {drive.toUpperCase()}
                        </p>
                    </div>
                    <div className="flex flex-col jestify-center items-center gap-2 ">
                        <img src="https://th.bing.com/th/id/OIP.ReOUk8RRKtp-3p-cRaR7jAHaHa?pid=ImgDet&rs=1" width={30} height={30} alt="gas" />
                        <p className="text-[14px]">
                            {city_mpg} MPG
                        </p>
                    </div>
                </div>
                <div className="car-card__btn-container">
                    <CustomButton
                        title="View More"
                        containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                        rightIcon="https://cars-hub-nextjs.vercel.app/right-arrow.svg"
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>
            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        </div>
    );
}

export default CarCard;