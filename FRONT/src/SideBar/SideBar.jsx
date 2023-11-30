import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import Purchase from "../Purchase/Purchase";

const SideBar = ({ isOpen, toggleOpen, purchases, handleRemove, incrementQuantity, decrementQuantity}) => {
    
    return (
        <section className="sideBar" style={{
            position: 'absolute',
            overflow: 'auto',
            zIndex: 10,
            width:  '16rem',
            height: '100%',
            backgroundColor: 'rgba(85, 168, 33, 0.8)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            color: 'white',
            transition: 'all 0.2s ease-in-out',
            transform: isOpen ? 'translateX(0)' : 'translateX(calc(-100% + 3rem))',
          }}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'end'}}>
        <button onClick={toggleOpen} style={{position: 'relative',display: 'block', padding: '10px 16px', borderRadius: '4px', transition: 'all 0.2s ease-in-out', backgroundColor: isOpen ? 'rgba(85, 168, 33, 0.8)' : 'rgba(85, 168, 33, 0.8)', color:'white', border: '1px solid white'}}>
          {isOpen ? <FontAwesomeIcon icon={faArrowLeft} /> : <FontAwesomeIcon icon={faBasketShopping} />}
          {!isOpen && <p style={{position: 'absolute',border: '1px solid red', height: '0.8rem', width:'0.8rem', borderRadius: '1rem', backgroundColor: 'red', top: '0.1rem', right: '0.1rem', fontSize: '0.7rem'}}>{Object.keys(purchases).length}</p>}
        </button>
        </div>
            {isOpen && ( // Ajoutez ceci
                <section  style={{padding: '0.5rem', display: 'flex', flexDirection: 'column', gap:'1rem'}}>
                    <h2 style={{fontSize: '1.5rem',fontFamily: 'mountain'}}>Panier</h2>
                    <div style={{fontFamily: 'mountain', display: 'flex', flexDirection: 'column', gap:'1rem',overflow: 'auto', height: '60vh', padding: '1rem 0.5rem',flexGrow: '1'}}>
                        {/* {purchases.map((purchase) => ( */}
                        {Object.values(purchases).map((purchase) => (
                            <Purchase key={purchase.plantId} {...purchase} handleRemove={handleRemove} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
                                
                           
                        ))}
                    </div>
                    <section style={{height: '10vh',padding: '1rem', boxSizing: 'border-box', display: 'flex', flexWrap: 'wrap'}}>
                        <div style={{width: '50%'}}>
                        <p style={{fontFamily: 'mountain'}}>Total:</p>
                        </div>
                        <div style={{width: '50%'}}>
                            <p style={{fontFamily: 'mountain'}}>{Object.values(purchases).reduce((total, purchase) => total + purchase.price * purchase.quantity, 0)}€</p>
                        </div>
                        <button style={{fontFamily: 'mountain', color: 'white',fontSize: '1.2rem', width: '100%', border: '2px solid white',borderRadius: '1rem', backgroundColor: 'rgba(85, 168, 33, 0.8)'}}>Payer 💸</button>
                    </section>
                </section>
            )}
        </section>
    );
}

export default SideBar;