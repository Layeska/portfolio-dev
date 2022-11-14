import React from 'react'
import { Link } from 'react-router-dom'

/*import home from '../assets/menu/home.svg'
import aboutMe from '../assets/menu/aboutMe.svg'
import skill from '../assets/menu/skill.svg'
import portfolio from '../assets/menu/portfolio.svg'
import contactMe from '../assets/menu/contactMe.svg'*/

import ChangeTheme from '../components/ChangeTheme'
import ChangeIdiom from './ChangeIdiom'

import { useTranslation } from 'react-i18next'

const Menu = () => {
    const [t] = useTranslation('global')

    return (
        <>
            <div className='assets'>
                <ChangeTheme/>
                <ChangeIdiom/>
            </div>
                <div id='menuHamburger'>
                    <input type='checkbox' name='nav-btn' id='nav-btn'/>
                    <label htmlFor='nav-btn'></label>
                    <nav className='menuHamburger' id='menuH'> 
                        <ul>
                            <li> <Link to={'/'}> {t('header.home')} </Link> </li>
                            <li> <Link  to={'/about'}> {t('header.about-me')} </Link> </li>
                            <li> <Link to={'/skill'}> {t('header.skills')} </Link> </li>
                            <li> <Link to={'/portfolio'}> {t('header.portfolio')} </Link> </li>
                        </ul>
                    </nav>
                </div>
            
            <div className='menuExtend'>
                <header>
                    <div className='imageProfile'>
                        <img src='https://i.postimg.cc/4N7gC452/1625891191158.jpg' alt='Image of profile'/>
                    </div>
                    <div className='socialMedia'>
                        <hr />
                        <ul>
                            <li><a href='https://www.linkedin.com/in/ana-juárez' target='_blank'><i className='fa-brands fa-linkedin'></i></a></li>
                            <li><a href='https://github.com/Layeska?tab=repositories' target='_blank'><i className='fa-brands fa-github'></i></a></li>
                            <li><a href='https://t.me/lisa1921' target='_blank'><i className='fa-brands fa-telegram'></i></a></li>
                            <li><a href='mailto:lisa13suarez@gmail.com?Subject=Interesado%20en%20mi%20CV%20de%20Portafolio%20' target='_blank'><i className='fa-solid fa-envelope'></i></a></li>
                            <li><a href=' https://wa.me/50587500768?text=I%20am%20interesed%20in%your%20CV' target='_blank'><i className="fa-brands fa-whatsapp"></i></a></li>
                        </ul>
                        <hr />
                    </div>
                    <nav className='menu'>
                        <ul className='listMenu'>
                            <li>
                                <Link to={'/'} className='active'>
                                    <span className='react'></span>
                                    <span className='circle'></span>
                                    {t('header.home')}
                                </Link>
                            </li>
                            <li>
                                <Link to={'/about'} className='active'>
                                    <span className='react'></span>
                                    <span className='circle'></span>
                                    {t('header.about-me')}
                                </Link>
                            </li>
                            <li>
                                <Link to={'/skill'} className='active'>
                                    <span className='react'></span>
                                    <span className='circle'></span>
                                    {t('header.skills')}
                                </Link>
                            </li>
                            <li>
                                <Link to={'/portfolio'} className='active'>
                                    <span className='react'></span>
                                    <span className='circle'></span>
                                    {t('header.portfolio')}
                                </Link>
                            </li>
                        </ul>
                        
                    </nav>
                    <div className='footer'> <footer>  Copyright &copy; 2022 | Ana Juarez ♥ </footer> </div>
                </header>
            </div>
        </>
    )
}

export default Menu

/*
<div className='menuIPad'>
                <header>
                    <nav>
                        <ul>
                            <li> <Link to='/'><img src={home} alt='Icon of Home'/></Link> </li>
                            <li> <Link to={'/about'}><img src={aboutMe} alt='Icon of about me'/></Link> </li>
                            <li> <Link to={'/skill'}><img src={skill} alt='Icon of skills'/></Link> </li>
                            <li> <Link to={'/portfolio'}><img src={portfolio} alt='Icon of portfolio'/></Link> </li>
                            <li> <Link to={'/contact'}><img src={contactMe} alt='Icon of contact me'/></Link> </li>
                        </ul>
                    </nav>
                </header>
            </div>
*/