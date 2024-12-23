import React, { useState } from 'react';

const AddSubscription: React.FC = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [subscriptionType, setSubscriptionType] = useState('monthly');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subscriptionData = {
      name,
      category,
      subscriptionType,
      amount,
      currency,
    };
    console.log(subscriptionData);
    // Handle form submission (e.g., send data to server or add it to the state)
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-xl mx-auto mt-8">
      <h1 className="text-xl font-bold text-[#0d151c] mb-4">Add Subscription</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="text-sm font-medium text-[#49779c]">
            Subscription Name
          </label>
          <input
            id="name"
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-[#cedde8] rounded-md text-sm text-[#0d151c]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter subscription name"
            required
          />
        </div>

        {/* Category Field */}
        <div>
          <label htmlFor="category" className="text-sm font-medium text-[#49779c]">
            Category
          </label>
          <select
            id="category"
            className="mt-1 block w-full px-3 py-2 border border-[#cedde8] rounded-md text-sm text-[#0d151c]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select category</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Music">Music</option>
            <option value="Shopping">Shopping</option>
            <option value="Video Streaming">Video Streaming</option>
            <option value="Gaming">Gaming</option>
            <option value="News">News</option>
            <option value="Software">Software</option>
          </select>
        </div>

        {/* Subscription Type (Radio Buttons) */}
        <div>
          <span className="text-sm font-medium text-[#49779c]">Subscription Type</span>
          <div className="flex items-center mt-2 gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="subscriptionType"
                value="monthly"
                checked={subscriptionType === 'monthly'}
                onChange={() => setSubscriptionType('monthly')}
                className="text-[#0d151c]"
              />
              <span className="ml-2 text-sm text-[#0d151c]">Monthly</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="subscriptionType"
                value="yearly"
                checked={subscriptionType === 'yearly'}
                onChange={() => setSubscriptionType('yearly')}
                className="text-[#0d151c]"
              />
              <span className="ml-2 text-sm text-[#0d151c]">Yearly</span>
            </label>
          </div>
        </div>

        {/* Amount Field */}
        <div>
          <label htmlFor="amount" className="text-sm font-medium text-[#49779c]">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            className="mt-1 block w-full px-3 py-2 border border-[#cedde8] rounded-md text-sm text-[#0d151c]"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </div>

        {/* Currency Field */}
        <div>
          <label htmlFor="currency" className="text-sm font-medium text-[#49779c]">
            Currency
          </label>
          <select
            id="currency"
            className="mt-1 block w-full px-3 py-2 border border-[#cedde8] rounded-md text-sm text-[#0d151c]"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            {/* Add more currencies as needed */}
          </select>
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button
            type="submit"
            className="w-full bg-[#2094f3] text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-[#0d84d9] transition-colors"
          >
            Add Subscription
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSubscription;
