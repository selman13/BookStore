import Link from 'next/link'
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";

const SocialMedia = () => {

    const medias = [
        {
        id: 0,
        icon : <FaInstagram size={25}/>
        },

        {
        id: 1,
        icon : <FaXTwitter size={25}/>
        },
        
        {
        id: 2,
        icon : <FaWhatsapp size={25}/>
        },

        {
        id: 3,
        icon : <BiLogoTelegram size={25}/>
        }
    ]

  return (
    <div className='flex gap-5'>
        {medias.map((media) => {
            return (
                <Link href="/" key={media.id}>{media.icon}</Link>

            )
        })}
    </div>
  )
}

export default SocialMedia