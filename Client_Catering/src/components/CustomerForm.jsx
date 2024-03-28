import React, { useState } from 'react';
import { createCustomer } from '../utils/ApiFunctions';
import {useNavigate} from 'react-router-dom'

export default function CustomerForm() {
    const [formData, setFormData] = useState({
        cust_name: '',
        cust_phone: '',
        venue: '',
        occasion: '',
        func_date: '',
        numberofperson: 0
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const navigate = useNavigate(); // Initialize useNavigate
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await createCustomer(formData); // Call createCustomer function with formData
          console.log('Customer created:', response);
          // Optionally, you can reset the form after successful submission
          setFormData({
            cust_name: '',
            cust_phone: '',
            venue: '',
            occasion: '',
            func_date: '',
            numberofperson: 0
          });
          // Navigate back to the dashboard page after successful submission
      navigate('/');
        } catch (error) {
          console.error('Error creating customer:', error);
        }
      };
    

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Enter your Details
          </h2>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="cust_name" className="text-base font-medium text-gray-900">
                  {' '}
                  Full Name{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    id="cust_name"
                    name="cust_name"
                    value={formData.cust_name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="cust_phone" className="text-base font-medium text-gray-900">
                  {' '}
                  Phone Number{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Phone Number"
                    id="cust_phone"
                    name="cust_phone"
                    value={formData.cust_phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="venue" className="text-base font-medium text-gray-900">
                  {' '}
                  Venue{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Venue"
                    id="venue"
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="occasion" className="text-base font-medium text-gray-900">
                  {' '}
                  Occasion{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Occasion"
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="func_date" className="text-base font-medium text-gray-900">
                  {' '}
                  Function Date{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="date"
                    id="func_date"
                    name="func_date"
                    value={formData.func_date}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="numberofperson" className="text-base font-medium text-gray-900">
                  {' '}
                  Number of Persons{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number"
                    id="numberofperson"
                    name="numberofperson"
                    value={formData.numberofperson}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                    
                  Submit
                  
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
