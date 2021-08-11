import react, {useEffect,useState} from 'react'
import axios from 'axios'

const Male = () =>{
    const [productos, setproductos] = useState([])
        
    const getProducts = async () => {
        const res = await axios.get('http://localhost:3001/male')
        setproductos(res.data)
    }

    useEffect(() => {
        getProducts()
    }, [])


        return (
            <div className="container mt-5">
                <h1 className="text-center">BIENVENIDO A ZAPATOGRANDE MARKETPLACE</h1> <br />
                
                <h2 className="text-center mb-5">Los productos más destacados para caballeros!</h2>
                <div className="row">
                   {productos.map((producto:any) => {
                    return( 
                        <div className="col sm-6">
                            <div className="card text-center m-4" style={{width: '18rem'}}>
                                <img src="C:\Users\Daniel\Documents\web\Zapatogrande\backend\uploads\1d634a22-8639-4c6c-9de1-b1f103adf3c0.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                <h5 className="card-title text-center">{producto.nombre}</h5>
                                <p className="card-text text-center">{producto.descipcion}</p>
                                <a href="#" className="btn btn-primary">{producto.precio}</a>
                                </div>
                            </div>
                        </div>
                    )
                    })}
                </div>
                
            </div>
        )
    
}


export default Male