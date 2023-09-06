
import React from 'react';
import Sidebar from '../../sidebar/sidebar';
import Navbar from '../../navbar/navbar';

const Page2: React.FC = () => {
  return <>
  <div className='page-style'>
   <Sidebar />
   <div className='page-contents'>
   <Navbar />
    <p> Page 2 Content</p>
    </div>
    </div>
    </>;
};

export default Page2;