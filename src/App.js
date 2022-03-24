import React from 'react';
import './App.css';
import {products, categories} from './data';
import {Header} from './components/Header';
import {Categories} from './components/Categories';
import {Products} from './components/Products';

// console.log(products)

export default function App() {
  const [search, setSearch] = React.useState('');
  const [displayProducts, setDisplayProducts] = React.useState([])
  const [checkedCat, setChekedCat] = React.useState([]);

  React.useEffect(() => {
    if (checkedCat.length === 0) {
      setDisplayProducts(products);
      return
    }
    let selectedProds = [];
    checkedCat.forEach(catId => {
      const  filteredProds = products.filter(prod => prod.categoryId === Number(catId));
      // console.log(catId, selectedProds)
      selectedProds = [...selectedProds, ...filteredProds];
    })
    setDisplayProducts(selectedProds)
  }, [checkedCat])

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <main className="main">
        <div className="sidebar">
          <Categories items={categories} setSelectedCat={setChekedCat} />
        </div>
        <div className="content">
          <Products items={displayProducts} search={search} />
          {/* <Products items={products} search={search} /> */}
        </div>
      </main>
    </>
  );
}
