import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    // console.log(services);
    return (
        <div className='mt-32 mb-7'>
           <h1 className='text-orange-700 text-2xl font-bold text-center'>Service</h1> 
           <h1 className='text-5xl text-center mt-5'>Our Service Area</h1>
           <p className='text-center mt-5 text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
           <div className='mt-12 grid md:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServicesCard key={service._id} data={service} ></ServicesCard>)
                }
           </div>
        </div>
    );
};

export default Services;