import React, { useEffect, useState } from 'react';

// ShoppingCartModal Component
const ShoppingCartModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <button onClick={toggleModal} className="p-2">
        {/* Icon component or SVG here */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h12l3 9h-18z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9h6v6H9z" />
        </svg>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-40" aria-hidden="true" onClick={toggleModal}>
          <div className="absolute inset-x-0 top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white z-50">
            <div className="flex justify-between items-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Shopping Cart</h3>
              <button onClick={toggleModal} className="rounded-md text-gray-700 hover:text-gray-500 focus:outline-none">
                <span className="sr-only">Close</span>
                {/* Close icon */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">Items in your cart will be shown here.</p>
              {/* Items can be listed here */}
            </div>
            {/* Footer or additional content can be added here */}
          </div>
        </div>
      )}
    </>
  );
};

// App Component
const App = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <header className="bg-gray-100 p-4 flex justify-between items-center">
        <h1>Your Website</h1>
        <ShoppingCartModal />
      </header>
      <main>
        {/* Main content goes here */}
      </main>
      <footer className="bg-gray-200 p-4 text-center">
        {/* Footer content here */}
      </footer>
    </div>
  );
};

export default App;
