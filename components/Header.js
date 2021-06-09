import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
import { BadgeCheckIcon, HomeIcon, LightBulbIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'
export default function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className="flex flex-grow justify-evenly max-w-2xl"> 
               <HeaderItem title='HOME' Icon={HomeIcon}/> 
               <HeaderItem title='TRENDING' Icon={LightBulbIcon}/> 
               <HeaderItem title='VEIFIED' Icon={BadgeCheckIcon}/> 
               <HeaderItem title='COLLECTIONS' Icon={SearchIcon}/> 
               <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
            </div>
            <Image
                src='https://links.papareact.com/ua6'
                className="object-contain"
                height="60px"
                width="100px"

            />
        </header>
    )
}
