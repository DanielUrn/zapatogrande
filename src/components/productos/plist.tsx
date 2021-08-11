import React, { useEffect, useState } from 'react'
import axios from 'axios'



const Plist = () => {
    
    const [productos, setproductos] = useState([])
    
    const getProducts = async () => {
        const res = await axios.get('http://localhost:3001/productos')
        setproductos(res.data)
    }

    useEffect(() => {
        getProducts()
    }, [])


        return (
            <div className="container mt-5">
                <h1 className="text-center">BIENVENIDO A ZAPATOGRANDE MARKETPLACE</h1> <br />
                
                <h2 className="text-center mb-5">Nuestros productos recomendados!</h2>
                <div className="row">
                   {productos.map((producto:any) => {
                    return( 
                        <div className="col sm-6">
                            <div className="card text-center m-4" style={{width: '18rem'}}>
                                <img src={producto.imgpath} className="card-img-top" alt="..." />
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

export default Plist