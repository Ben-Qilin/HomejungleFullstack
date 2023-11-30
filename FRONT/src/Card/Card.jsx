import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const Card = ({img, water, sun, price, name_plant, addToPurchase, product}) => {
    return(
    <article style={{fontFamily: 'mountain',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',border: '1px solid grey', width: '15vw',height: '45vh', borderRadius: '1rem',display:'flex', flexDirection: 'column',alignItems: 'center', gap: '1rem', padding:' 0.5rem'}}>
            <div style={{position: 'relative',height: '70%',width: '100%',  borderTopLeftRadius: '0.8rem', borderTopRightRadius: '0.8rem', }}>
                <img src={img} alt="" style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',width: '100%', height: '100%', borderRadius: '0.8rem ',objectFit: 'cover', aspectRatio: '1', objectPosition: 'center'}}></img>
                <div style={{position: 'absolute',right: '0',top: "0",height: '3rem',width: '3rem', border: '3px solid white', borderRadius: '0.8rem 0.8rem 0.8rem 0', display: 'flex',justifyContent: 'center',alignItems: 'center',zIndex: '10',backgroundColor: 'rgba(85, 168, 33, 0.8)',color: 'white'}}><p>{price}€</p></div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column',width: '100%', gap: '0.5rem'}}>
                <h3 style={{textAlign: 'start', fontSize: '1.2rem'}}>{name_plant}</h3>
                <p style={{textAlign: 'start'}}>{'💧'.repeat(water)}</p>
                <p style={{textAlign: 'start'}}>{'🌞'.repeat(sun)}</p>
            </div>
            <button onClick={() => addToPurchase({ ...product })} style={{fontSize: '1.2rem', fontFamily: 'mountain',color: 'white',width: '50%', border: '1px solid gray', borderRadius: '1rem', padding: '0.2rem 0.5rem', backgroundColor: 'rgba(85, 168, 33, 0.8)'}}>Ajouter <FontAwesomeIcon icon={faCartShopping} style={{color: 'white'}}/></button>
        </article>
        )
        
    
}
export default Card