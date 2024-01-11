'use client'
import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    comments: false,
    candidates: false,
    offers: false
  });

  const changeHandler = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">This is a form</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={changeHandler}
            className="border rounded p-2 w-full"
            placeholder="First Name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={changeHandler}
            className="border rounded p-2 w-full"
            placeholder="Last Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            className="border rounded p-2 w-full"
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="country" className="block">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={changeHandler}
            className="border rounded p-2 w-full"
            placeholder="Country"
          />
        </div>
        <div>
          <label htmlFor="streetAddress" className="block">Street Address</label>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={changeHandler}
            className="border rounded p-2 w-full"
            placeholder="Street Address"
          />
        </div>
        <div>
          <label htmlFor="city" className="block">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={changeHandler}
            className="border rounded p-2 w-full"
            placeholder="City"
          />
        </div>
        <div>
          <label htmlFor="state" className="block">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={changeHandler}
            className="border rounded p-2 w-full"
            placeholder="State"
          />
        </div>
        <div>
          <label htmlFor="zipCode" className="block">Zip Code</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={changeHandler}
            className="border rounded p-2 w-full"
            placeholder="Zip Code"
          />
        </div>
        <fieldset>
          <legend>Preferences</legend>
          <div>
            <label htmlFor="comments">Comments</label>
            <input
              type="checkbox"
              name="comments"
              checked={formData.comments}
              onChange={changeHandler}
              className="mr-2"
            />
          </div>
          <div>
            <label htmlFor="candidates">Candidates</label>
            <input
              type="checkbox"
              name="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
              className="mr-2"
            />
          </div>
          <div>
            <label htmlFor="offers">Offers</label>
            <input
              type="checkbox"
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}
              className="mr-2"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
