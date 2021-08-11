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
        
            <div>
                {productos.map((producto:any) => {
                    return( 
                        <div>
                            <h1>{producto.nombre}</h1>
                            <img src="{producto.imgpath}" alt="" />
                        </div>
                    )
                })}
            </div>
        )
    
}

export default Plist