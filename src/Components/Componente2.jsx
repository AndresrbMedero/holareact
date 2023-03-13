import './Componente2.css'

export const Componente2 = () => {

    return (

        <div class="container">
            <div class="imagenes">
                <div className='fb' id='img'>
                    <a href="https://www.facebook.com/andres.medero.1/" target="_blank">
                        <img src="./src/assets/fb.png" alt="" width="50px" height="50px"/>
                    </a>
                </div>
                <div className='ig' id='img'>
                    <a href="https://www.instagram.com/andres_medero/" target="_blank">
                        <img src="./src/assets/ig.png" alt="" width="50px" height="50px"/>
                    </a>
                </div>
                <div className='twt' id='img'>
                    <a href="https://twitter.com/Andres__Medero" target="_blank">
                        <img src="./src/assets/tt.png" alt="" width="50px" height="50px"/>
                    </a>
                </div>
            </div>
        </div>

    )
    
}