// @flow
import React from 'react';

import { Modal} from './Modal'

export function Products({items, search}) {
  const [showModal, setShowModal] = React.useState(false);
  const [detailProd, setDetailProd] = React.useState(null);

  const openModal = (product) => {
    setDetailProd(product);
    setShowModal(!showModal);
  }

  return (
    <>
      <h1>Creams &amp; Gels</h1>
      <div className="products" data-testid="products">
        {items
          .filter(product =>
            product.name.toLowerCase().includes(search.toLowerCase())
          )
          .map(product => (
            <div key={product.id} className="product" onClick={() => openModal(product)}>
              <img src={product.images.medium} alt={product.description} />
              <h3>{product.name}</h3>
              <h3 className="product__price">${product.price}</h3>
              {showModal && <Modal product={detailProd} />}
            </div>
          ))}
      </div>
    </>
  );
}
