import React from 'react';
import './App.css';
import {products, categories} from './data';
import {Header} from './components/Header';
import {Categories} from './components/Categories';
import {Products} from './components/Products';

export default function App() {
  const [search, setSearch] = React.useState('');
  const [displayProducts, setDisplayProducts] = React.useState([])
  const [checkedCat, setChekedCat] = React.useState([]);
  const [filteredPrice, setFilteredPrice] = React.useState({})

  React.useEffect(() => {
    if (checkedCat.length === 0) {
      setDisplayProducts(products);
      return
    }
    let selectedProds = [];
    checkedCat.forEach(catId => {
      const  filteredProds = products.filter(prod => prod.categoryId === Number(catId));
      selectedProds = [...selectedProds, ...filteredProds];
    })
    setDisplayProducts(selectedProds)
  }, [checkedCat])

  const handlePriceFilter = () => {
    const miniProd = displayProducts.sort((prod1, prod2) => prod1.price - prod2.price)
    setFilteredPrice({min: miniProd [0].price, max: miniProd[miniProd.length - 1].price})
  }
  
  const handlePriceSort = () => {
    const sortedProd = displayProducts.sort((prod1, prod2) => prod1.price - prod2.price)
    setDisplayProducts(sortedProd)
  }

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <main className="main">
        <div className="sidebar">
          <Categories items={categories} setSelectedCat={setChekedCat} />
          <div className='filter'>
            <h4>Filter By Price</h4>
            Min /Max
            {
              filteredPrice.min && <div className='filter'>
                <div className="minmax-wrapper">
                  <span className='min-max'>${filteredPrice.min}</span>
                  <span className='min-max'>${filteredPrice.max}</span>
                </div>
              </div>
            }
            <button className='filter-button' onClick={handlePriceFilter}>Go</button>
          </div>
          <div className="sort">
            <h4>Sort By Price</h4>
            Low to High
            <button className='sort-button' onClick={handlePriceSort}>Sort By Price</button>
          </div>
        </div>
        <div className="content">
          <Products items={displayProducts} search={search} />
        </div>
      </main>
    </>
  );
}
