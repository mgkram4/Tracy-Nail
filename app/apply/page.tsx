"use client"

import React, { useState } from 'react';

const ApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    yearsInBusiness: '',
    annualRevenue: '',
    equipmentType: '',
    equipmentCost: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Application submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="businessName" className="block text-gray-700 font-semibold mb-2">Business Name</label>
        <input
          type="text"
          id="businessName"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>
      {/* Add more form fields here */}
      <div>
        <label htmlFor="equipmentType" className="block text-gray-700 font-semibold mb-2">Equipment Type</label>
        <select
          id="equipmentType"
          name="equipmentType"
          value={formData.equipmentType}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          <option value="">Select Equipment Type</option>
          <option value="medical">Medical Equipment</option>
          <option value="warehouse">Warehouse Racking Equipment</option>
          <option value="manufacturing">Manufacturing Equipment</option>
          <option value="cnc">CNC and Machining Equipment</option>
          <option value="brewery">Brewery Equipment</option>
          <option value="construction">Construction and Concrete</option>
          <option value="vehicle">Titled Vehicle</option>
        </select>
      </div>
      <div>
        <label htmlFor="equipmentCost" className="block text-gray-700 font-semibold mb-2">Equipment Cost</label>
        <input
          type="number"
          id="equipmentCost"
          name="equipmentCost"
          value={formData.equipmentCost}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>
      <button
        type="submit"
        className="bg-pink-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-pink-600 transition duration-300"
      >
        Submit Application
      </button>
    </form>
  );
};

export default ApplicationForm;