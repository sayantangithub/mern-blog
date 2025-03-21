import {Footer, FooterLink} from 'flowbite-react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble} from "react-icons/bs"
export default function FooterCom(){
    return (
        <Footer container className='border border-t-8 border-teal-500'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5'>
                    <Link className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white' to="/" >
                              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Sayantan's</span>
                              Blog
                              </Link>
                    </div>
                    <div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
                        <div>
                        <Footer.Title title='About'/>
                        <Footer.LinkGroup col>
                            <FooterLink href='https://www.100jsprojects.com'
                            target='_blank'
                            rel="noopener noreferer">
                                100 JS Projects
                            </FooterLink>

                            <FooterLink href='/about'
                            target='_blank'
                            rel="noopener noreferer">
                               Sayantan's Blog
                            </FooterLink>
                        </Footer.LinkGroup>
                        </div>

                        <div>
                        <Footer.Title title='Follow US'/>
                        <Footer.LinkGroup col>
                            <FooterLink href='https://github.com/sayantangithub'
                            target='_blank'
                            rel="noopener noreferer">
                                Github
                            </FooterLink>

                            <FooterLink href='#'
                            target='_blank'
                            rel="noopener noreferer">
                               Discord
                            </FooterLink>
                        </Footer.LinkGroup>
                        </div>

                        <div>
                        <Footer.Title title='Legal'/>
                        <Footer.LinkGroup col>
                            <FooterLink href='#'
                            target='_blank'
                            rel="noopener noreferer">
                                Privacy Policy
                            </FooterLink>

                            <FooterLink href='#'
                            target='_blank'
                            rel="noopener noreferer">
                               Terms & Conditions
                            </FooterLink>
                        </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider/>
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright href='#' by="Sayantan's Blog" year={new Date().getFullYear()}/>
                
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href='#' icon={BsFacebook}/>
                    <Footer.Icon href='#' icon={BsInstagram}/>
                    <Footer.Icon href='#' icon={BsTwitter}/>
                    <Footer.Icon href='#' icon={BsGithub}/>
                    <Footer.Icon href='#' icon={BsDribbble}/>
                </div>
                </div>
            </div>
        </Footer>
    )
}