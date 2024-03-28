import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsTwitterX, BsInstagram, BsGithub, BsDribbble} from "react-icons/bs";

const FooterCom = () => {
  return (
    <Footer container className=' border border-t-8 border-teal-500'>
        <div className=' w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                <Link to="/" className=' self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white ' >
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Hosen's</span>
                    Blog
                </Link>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                    <Footer.Title title='About' />
                    <Footer.LinkGroup col>
                        <Footer.Link href='https://65c787975289ee74a4113606--gleeful-druid-a7d9c3.netlify.app/' target='_blank' rel='noopener noreferrer'>
                            Portfolio
                        </Footer.Link>
                    </Footer.LinkGroup>
                    <Footer.LinkGroup col>
                        <Footer.Link href='https://65b5b2651cb913fc44e8c1e1--visionary-clafoutis-7c62e9.netlify.app/' target='_blank' rel='noopener noreferrer'>
                            MovieApp
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Follow Us' />
                    <Footer.LinkGroup col>
                        <Footer.Link href='https://www.facebook.com/dmhossenali/' target='_blank' rel='noopener noreferrer'>
                            Facebook
                        </Footer.Link>
                    </Footer.LinkGroup>
                    <Footer.LinkGroup col>
                        <Footer.Link href='https://github.com/hossenali2200' target='_blank' rel='noopener noreferrer'>
                             Github
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Legal' />
                    <Footer.LinkGroup col>
                        <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                            Privacy Policy
                        </Footer.Link>
                    </Footer.LinkGroup>
                    <Footer.LinkGroup col>
                        <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                             Terms & Condition
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                
                </div>
            </div>
            <Footer.Divider/>
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
            <Footer.Copyright href='#' by="Hosen's blog" year={new Date().getFullYear()}/>
            <div className='flex gap-6 sm:mt-4 mt-4 sm:justify-center'>
            <Footer.Icon href='#' icon={BsFacebook} />
            <Footer.Icon href='#' icon={BsInstagram} />
            <Footer.Icon href='#' icon={BsTwitterX} />
            <Footer.Icon href='#' icon={BsGithub} />
            <Footer.Icon href='#' icon={BsDribbble} />
            </div>
            </div>
            
        </div>
    </Footer>
  )
}

export default FooterCom