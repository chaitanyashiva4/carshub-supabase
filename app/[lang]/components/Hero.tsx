'use client'

import { HeroProps } from '@/types';
import Image from 'next/image'
import CustomButton from './CustomButton';
import { getDictionary } from '@/get-dictionary';

const  Hero = async({title,subtitle,buttontext,lang,dictionary}:HeroProps) => {
    const handleScrole = () => {

    }

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className='hero__title'>
                {dictionary['Home'].title}
                </h1>
                <p className='hero__subtitle'>
                {dictionary['Home'].subtitle}
                </p>
                <CustomButton
                    title={dictionary['Home'].buttontext}
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScrole}
                />
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image src="/hero.png" alt="hero" fill className='object-contain'/>
                </div>
                <div className='hero__image-overlay'/>
            </div>
        </div>
    );
}

export default Hero;