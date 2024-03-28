// Breakfast.jsx
import React, { useEffect, useState } from 'react';
import { getAllBreakfasts } from '../../utils/ApiFunctions';


function Breakfast() {
  const [breakfasts, setBreakfasts] = useState([]);

  useEffect(() => {
    fetchBreakfasts();
  }, []);

  const fetchBreakfasts = async () => {
    try {
      const data = await getAllBreakfasts();
      setBreakfasts(data);
    } catch (error) {
      console.error('Error fetching breakfasts:', error);
    }
  };

  return (
    <div>
    <h1 className="text-2xl font-bold mb-4">Breakfast Menu</h1>
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Photo
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 bg-gray-50"></th> {/* Empty header for the Add to Cart button */}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {breakfasts.map((breakfast) => (
            <tr key={breakfast.b_id}>
              <td className="px-6 py-4 whitespace-no-wrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img className="h-10 w-10 rounded-full" src={breakfast.b_photo} alt={breakfast.b_name} />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm leading-5 font-medium text-gray-900">{breakfast.b_name}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">
                <img className="h-20 w-20" src={breakfast.b_photo} alt={breakfast.b_name} />
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">{breakfast.b_desc}</td>
              <td className="px-6 py-4 whitespace-no-wrap">
                <button
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  onClick={() => handleAddToCart(breakfast)}
                >
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default Breakfast;
