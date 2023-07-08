import getCars from '@/actions/getCars';
import getCarsBySearch from '@/actions/getCarsBySearch';
import { CarCard, CustomFilter, Hero, SearchBar } from './components';
import { fuels, yearsOfProduction } from '@/constants';
import Image from 'next/image'
import LocaleSwitcher from './components/locale-switcher';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

export default async function Home({
  params: { lang },searchParams
}: {
  params: { lang: Locale },searchParams:any
}) {
  
const allCars = await getCars(searchParams.model, searchParams.manufacturer, searchParams.fuel, searchParams.year);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  const dictionary = await getDictionary(lang)
  return (
    <main className="overflow-hidden">
      <Hero 
      title="Find, book or rent a car --quickly and easily!"
      subtitle='Streamline your car rental experience with our effortless booking process.'
      buttontext='Explore the cars'
      lang={lang}
      dictionary={dictionary}
      />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
        <LocaleSwitcher />
          <h1 className='text-4xl font-extrabold'>{dictionary['Home'].header}</h1>
          <p>{dictionary['Home'].headerDes} </p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels}/>
            <CustomFilter title='year' options={yearsOfProduction}/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car}/>        
              ))}
            </div>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no result</h2>
            <p>no Cars available</p>
          </div>
        )}

      </div>
    </main>
  )
}
