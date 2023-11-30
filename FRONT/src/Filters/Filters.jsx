import React, { useState, useEffect } from "react"


const Filters = ({products, setFilteredProducts }) => {
    const [selectFilter, setSelectFilter] = useState('all');
    const [waterFilter, setWaterFilter] = useState('all');
    const [sunFilter, setSunFilter] = useState('all');

    useEffect(() => {
        console.log('selectFilter:', selectFilter);
        const filtered = products.filter(product => {
            return (selectFilter === 'all' || product.type === selectFilter) &&
                (waterFilter === 'all' || product.water === waterFilter) &&
                (sunFilter === 'all' || product.sun === sunFilter);
        });
        console.log('filtered:', filtered);
        setFilteredProducts(filtered);

    }, [selectFilter, waterFilter, sunFilter, setFilteredProducts])
    return (
        <section style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px', height: '5vh', width: '80%', backgroundColor: 'rgba(85, 168, 33, 0.8)', display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center', borderRadius: '0.5rem' }}>
            <select style={{ padding: '0.2rem', height: '80%', borderRadius: '0.5rem' }} onChange={e => setSelectFilter(e.target.value)}>
                <option value='all'>Tous les produits</option>
                <option value="Grasse">Plante grasse</option>
                <option value="Intérieur">Plante d'intérieur</option>
                <option value="Extérieur">Plante d'extérieur</option>
            </select>
            <select style={{ height: '80%', borderRadius: '0.5rem' }} onChange={e => setWaterFilter(e.target.value)}>
                <option value='all'>Hydratation</option>
                <option value="1">💧</option>
                <option value="2">💧💧</option>
                <option value="3">💧💧💧</option>
            </select>
            <select style={{ height: '80%', borderRadius: '0.5rem' }} onChange={e => setSunFilter(e.target.value)}>
                <option value='all'>Ensoleillement</option>
                <option value="1">🌞</option>
                <option value="2">🌞🌞</option>
                <option value="3">🌞🌞🌞</option>
            </select>
        </section>
    )
}
export default Filters