const Footer = () => {
    return(
        <footer style={{height: '7vh', borderTop: '1px solid green',display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(85, 168, 33, 0.8)' }}>
            <div style={{zIndex: '1', backgroundColor: 'rgba(255, 255, 255, 0.11)', backdropFilter:' blur(15px)', padding:' 0.2rem 0.1rem', borderRadius: '0.5rem'}}>
            <h2>
                Pour les passioné(e)s des plantes
            </h2>
            <form style={{display:' flex', flexDirection: 'column', gap: '0.3rem'}}>
                <label>Laissez nous votre E-mail:</label>
                <input type="email"></input>
            </form>
            </div>
        </footer>
    )
}
export default Footer