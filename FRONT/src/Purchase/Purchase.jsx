import React from "react"

const Purchase = ({ img, name_plant, price,plantId ,quantity, decrementQuantity, incrementQuantity}) => {
    
    return (
        <article style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px', backgroundColor: 'white', padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid white', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ borderRadius: '0.5rem', width: '40%' }}>
                <img style={{ objectFit: 'cover', aspectRatio: '1', objectPosition: 'center', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px', borderRadius: '0.5rem', width: '100%', height: '100%' }} src={img} alt=""></img>
            </div>
            <div style={{ width: '55%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p style={{ backgroundColor: 'rgba(85, 168, 33, 0.8)', padding: '0.5rem 0', borderRadius: '0.5rem' }}>{name_plant}</p>
                <p style={{ backgroundColor: 'rgba(85, 168, 33, 0.8)', padding: '0.5rem 0', borderRadius: '0.5rem' }}>Qté: {quantity}</p>
                <p style={{ backgroundColor: 'rgba(85, 168, 33, 0.8)', padding: '0.5rem 0', borderRadius: '0.5rem' }}>{price * quantity}€</p>

            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
                {/* <button onClick={() => setQuantity(quantity - 1)} style={{ border: '2px solid rgba(85, 168, 33, 0.8)', backgroundColor: 'white', borderRadius: '0.5rem', width: '30%', color: 'rgba(85, 168, 33, 0.8)', fontSize: '1.2rem' }}>-</button>
                <button onClick={() => setQuantity(quantity + 1)} style={{ border: '2px solid rgba(85, 168, 33, 0.8)', backgroundColor: 'white', borderRadius: '0.5rem', width: '30%', color: 'rgba(85, 168, 33, 0.8)', fontSize: '1.2rem' }}>+</button> */}
                <button onClick={() => decrementQuantity(plantId)} style={{ border: '2px solid rgba(85, 168, 33, 0.8)', backgroundColor: 'white', borderRadius: '0.5rem', width: '30%', color: 'rgba(85, 168, 33, 0.8)', fontSize: '1.2rem' }}>-</button>
                <button onClick={() => incrementQuantity(plantId)} style={{ border: '2px solid rgba(85, 168, 33, 0.8)', backgroundColor: 'white', borderRadius: '0.5rem', width: '30%', color: 'rgba(85, 168, 33, 0.8)', fontSize: '1.2rem' }}>+</button>
            </div>
        </article>

    )
}
export default Purchase