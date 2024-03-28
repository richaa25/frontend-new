import React, { useState } from 'react';

function Cart({ cartItems }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
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
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src={item.b_photo} alt={item.b_name} />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm leading-5 font-medium text-gray-900">{item.b_name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <img className="h-20 w-20" src={item.b_photo} alt={item.b_name} />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">{item.b_desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cart;
