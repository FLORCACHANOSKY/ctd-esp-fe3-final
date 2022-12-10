import React from 'react'
import { useContextGlobal } from './utils/global.context';

const imgStyle = {
  backgroundColor:'black',
  width: '20px',
  height: '20px',
  margin: '5px',
  
};


const Footer = () => {
  const {providerValue } = useContextGlobal();
  const {stateTheme} = providerValue;
  return (
    
    <footer className={stateTheme.theme}>
      
        <p className="footer > p">Powered by</p>

        <img  src="/images/DH.png" alt='DH-logo' />
        <img style={imgStyle} className="footer > img" src="/images/ico-facebook.png" alt='FB-logo'  />
        <img style={imgStyle} className="footer > img" src="/images/ico-instagram.png" alt='IG-logo' />
        <img style={imgStyle} className="footer > img" src="/images/ico-whatsapp.png" alt='WP-logo' />
        <img style={imgStyle} className="footer > img" src="/images/ico-tiktok.png" alt='TK-logo' />

    </footer>
  )
}

export default Footer
