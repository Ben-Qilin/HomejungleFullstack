
import React from "react"
import Card from "../Card/Card"

import './products.css';


const Products = ({filteredProducts , addToPurchase}) => {



    return(
        <section className="products" style={{borderRadius: '0.5rem',boxShadow: 'inset 0px 0px 34px 24px rgba(255,255,255,0.65)',overflow: 'auto',border: '1px solid rgba(224, 224, 224, 0.24)',width: '100%', height: '100%', padding: '1rem', boxSizing: 'border-box', display: 'flex', flexWrap: 'wrap', gap: '3rem',alignItems: 'center', justifyContent: 'center'}}>
{filteredProducts.map((product) => (
        <Card key={product.plantId} {...product} addToPurchase={addToPurchase} product={product}/>
      ))}
        </section>
    )
}
export default Products