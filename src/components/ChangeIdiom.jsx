import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'

const ChangeIdiom = () => {
    const [t, i18n] = useTranslation('global')
    const [lang, setIsLang] = useState(false)
    
    const changeIdiom = (lang) => {
        setIsLang(lang)

        const valueLangEs = 'es'
        const valueLangEn = 'en'

        if(lang) {
            return i18n.changeLanguage(valueLangEn)
        } else {
            return i18n.changeLanguage(valueLangEs)
        }
       
    }

    const es = "Español"
    const en = "English"

    return (
        <button className='btnIdiom' onClick={() => changeIdiom(!lang)}>
    <img title='Change Idiom' className='lenguage' src='https://i.postimg.cc/DZ34795j/globe.png' alt='translate'/> 
      
    </button>
        
    )
}

export default ChangeIdiom

 /* { lang ? 
    <i className="fa-solid fa-repeat"></i>
                <img title='Idiom English' src='https://i.postimg.cc/mZ868b8K/idioma-1.png' alt='translate'/> 
                : <img title='Idioma Español' src='https://i.postimg.cc/zDcVChZM/idioma.png' alt='translate' />
            } */
    /*<button className='btnIdiom' onClick={() => changeIdiom(!lang)}>
    <img title='Idiom English' src='https://i.postimg.cc/DZ34795j/globe.png' alt='translate'/> 
      {
          lang ? "English" : "Spanish"
        }
    </button>*/
    /*
    <button className='switch' ref={btnLang}>
            <span><i className='fa-regular fa-sun'></i></span>
            <span><i className='fa-solid fa-moon'></i></span>
        </button>
    */
   /*
   
   */