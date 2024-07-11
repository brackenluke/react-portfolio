import { useState } from 'react';
import PortfolioForm from './PortfolioForm';
import Portfolio from './Portfolio';

function Portfolio() {
  const [Portfolio, setPortfolio] = useState([]);

  // Function to add a Portfolio list item
  const addPortfolioItem = (item) => {
    console.log(
      'File: Portfolio.js ~ line 10 ~ addPortfolioItem ~ item',
      item
    );
    // Check to see if the item text is empty
    if (!item.text) {
      return;
    }

    // Add the new Portfolio list item to the existing array of objects
    const newPortfolio = [item, ...portfolio];
    console.log(newPortfolio);

    // Call setPortfolio to update state with our new set of Portfolio list items
    setPortfolio(newPortfolio);
  };

  // Function to mark Portfolio list item as complete
  const completePortfolioItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedPortfolio = portfolio.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    console.log(updatedPortfolio);
    setPortfolio(updatedPortfolio);
  };

  // Function to remove Portfolio list item and update state
  const removePortfolioItem = (id) => {
    const updatedPortfolio = [...Portfolio].filter((item) => item.id !== id);

    setPortfolio(updatedPortfolio);
  };

  // Function to edit the Portfolio list item
  const editPortfolioItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the if of the item that was clicked and if so we set it to a new value
    setPortfolio((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>What is on your Portfolio list?</h1>
      <PortfolioForm onSubmit={addPortfolioItem} />
      <Portfolio
        Portfolio={Portfolio}
        completePortfolioItem={completePortfolioItem}
        removePortfolioItem={removePortfolioItem}
        editPortfolioItem={editPortfolioItem}
      ></Portfolio>
    </div>
  );
}

export default Portfolio;
