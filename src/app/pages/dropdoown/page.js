'use client'
import { useState } from 'react';

const DropdownForm = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subCategories, setSubCategories] = useState([]);

  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);

    // Set sub-categories based on the selected category
    if (selectedValue === 'mammals') {
      setSubCategories(['Lion', 'Elephant', 'Giraffe']);
    } else if (selectedValue === 'reptiles') {
      setSubCategories(['Snake', 'Turtle', 'Lizard']);
    } else if (selectedValue === 'birds') {
      setSubCategories(['Eagle', 'Owl', 'Sparrow']);
    } else {
      setSubCategories([]);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Category Dropdowns</h1>
      <div>
        <label htmlFor="category" className="block mb-2">Select Category:</label>
        <select
          id="category"
          name="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border rounded p-2 w-full"
        >
          <option value="">Select...</option>
          <option value="mammals">Mammals</option>
          <option value="reptiles">Reptiles</option>
          <option value="birds">Birds</option>
        </select>
      </div>

      {subCategories.length > 0 && (
        <div className="mt-4">
          <label htmlFor="subCategory" className="block mb-2">Select Sub-Category:</label>
          <select
            id="subCategory"
            name="subCategory"
            className="border rounded p-2 w-full"
          >
            <option value="">Select...</option>
            {subCategories.map((subCategory, index) => (
              <option key={index} value={subCategory}>{subCategory}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default DropdownForm;
