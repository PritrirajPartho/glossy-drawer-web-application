import React, { useEffect, useState } from 'react';
import MyCoursesCard from './MyCoursesCard';


const MyCourses = () => {

     const [data, setData] = useState([]);
     useEffect(() => {
         fetch('https://glossy-drawer-web-application-server-do8z3mu0m-pritrirajpartho.vercel.app/courses')
             .then(res => res.json())
             .then(data => { setData(data) })
     }, [])

     return (
          <div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mb-10 md:mx-auto sm:text-center md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"></h2>
                <div className="grid gap-5 mb-8 mt-10 lg:grid-cols-3 ">
                    {
                        data.map(detail => <MyCoursesCard
                            key={detail.id}
                            detail={detail}
                        ></MyCoursesCard>)
                    }

                </div>
            </div>
        </div>
        </div>
     );
};

export default MyCourses;