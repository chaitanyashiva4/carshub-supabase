'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '@/i18n-config'

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    console.log(segments);
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className='flex justify-between'>
      <p className='mr-4'>Translate to</p>
      <ul className='flex'>
        {i18n.locales.map((locale) => {
          return (
            <li className='mr-3 mb-3' key={locale} >
              <Link href={redirectedPathName(locale)}>
                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>{locale}</button>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
