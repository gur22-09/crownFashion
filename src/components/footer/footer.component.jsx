import React from 'react';

import './footer.styles.scss';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer =()=>{
    
    const yihuasTwitterId = `https://twitter.com/slingingkeys?lang=en`;
    const githubRef = `https://github.com/gur22-09`;
    const linkedInRef = `https://www.linkedin.com/in/gurprit-singh/`;
    const date = new Date().getFullYear();
    return (
    <footer>
        <div className='footer'>
        &#169;{date} made by Gurprit, 
          thanks to   <a href={yihuasTwitterId}  rel="noreferrer noopener" target='_blank'> Yihua </a>  for being an awesome mentor <br />

        <a className='icon' href={githubRef}><GitHubIcon/></a> <a className='icon' href={linkedInRef}><LinkedInIcon/></a>
        </div>
    </footer>
    )
}

export default Footer;