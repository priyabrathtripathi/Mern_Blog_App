import React from 'react'
import { Footer, FooterLink } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsInstagram,BsTwitter,BsGithub,BsLinkedin, BsDribbble} from 'react-icons/bs'
const FooterCom = () => {
    return (
        <Footer container className='border border-t-8 border-pink-400'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5'>
                        <Link to="/" className='self-center whitespace-nowrap text-lg
        sm:text-xl font-semibold dark:text-white'>
                            <span className='px-2 py-1 bg-gradient-to-r from-cyan-300
            via-purple-500 to-pink-400 rounded-lg text-white'>Priyabrath's</span>
                            Insights
                        </Link>
                    </div>
                    <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                        <div>
                            <Footer.Title title='About' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='https:www.mernprojects.com'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    MERN Stack Projects
                                </Footer.Link>
                                <Footer.Link href='/about'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Priyabrath's Blogs
                                </Footer.Link>
                            </Footer.LinkGroup></div>
                        <div>  <Footer.Title title='Follow us' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='https://github.com/priyabrathtripathi'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Github
                                </Footer.Link>
                                <Footer.Link href='https://www.linkedin.com/in/priyabrath-tripathi-5b294a182/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Linkedin
                                </Footer.Link>
                            </Footer.LinkGroup></div>
                        <div>  <Footer.Title title='Legal' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='#'
                                >
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href='#'

                                >
                                    Terms &amp; Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright href='#' by="Priyabrath's Insights" year={new Date().getFullYear()} />
                    <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                        <Footer.Icon target='_blank' href="#" icon={BsFacebook}/>
                        <Footer.Icon target='_blank' href="https://www.instagram.com/arjun_1220tiwari?igsh=MTQyNXk0cng3cnZrdQ==" icon={BsInstagram}/>
                        <Footer.Icon target='_blank' href="https://x.com/Arjun62956115?t=-9BACJTALO4iGXBkXErg2A&s=08" icon={BsTwitter}/>
                        <Footer.Icon target='_blank' href="https://github.com/priyabrathtripathi" icon={BsGithub}/>
                        <Footer.Icon target='_blank' href="https://www.linkedin.com/in/priyabrath-tripathi-5b294a182/" icon={BsLinkedin}/>
                        <Footer.Icon target='_blank' href="https://dribbble.com/Priyabrath_123" icon={BsDribbble}/>
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterCom
