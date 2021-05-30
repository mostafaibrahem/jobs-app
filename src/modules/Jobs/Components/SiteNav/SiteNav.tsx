import React from 'react';
import { Link } from 'react-router-dom';


function SiteNav() {

  return (
   <nav className='main__site--nav container'>
       <h3 className='site-text'>JobsNow</h3>
       <ul>
           <li><Link to={'/'}>Home</Link></li>
           <li><Link to={'/Search'}>Search</Link></li>
           <li><Link to={'/'}>History</Link></li>
       </ul>
   </nav>

  );
}

export default SiteNav;
