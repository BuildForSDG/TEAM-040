import React from 'react';
import './Header.css';
import logo from '../icons/elections.ico';

import { Link } from 'react-router-dom';

 
  const Header = ({username}) => {
    
      return (
        // <!--Top bar --->
        <div>
        <div className="topbar flex ">
          <div className="flex-column  w-25-l">
        <Link to="/"><img  className=' ph4 dim logo'src={logo} alt='logo'/></Link>

            </div>
         
          
         </div>
        
        </div>
      );
    
}

export default Header;
