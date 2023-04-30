import { useEffect, useState } from "react";
import axios from 'axios';

const Products = ({ userData }) => {
    const [productsList, setProductsList] = useState([]);
    useEffect(() => {
        axios.get(process.env.REACT_APP_FETCH_DOMAIN + '/tshirt')
            .then((response) => {
                setProductsList(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const addToCart = (element) => {
        if(userData?.email===undefined){
            alert("please Login First");
            return;
        }
        const headers = {
            'Content-Type': 'application/json'
        };
        const data={
            ...userData,
            productId:element._id
        }
        axios.post(process.env.REACT_APP_FETCH_DOMAIN + '/cart/addProd', data, { headers })
            .then((response) => {
                const status = response;
                console.log(status);
                alert("added successfully");
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <>
            <div className="mainProductsFrame m-4 d-flex flex-wrap justify-content-evenly">
                {
                    productsList.map((element) => {
                        return (
                            <div key={element._id} className="card m-3" style={{ maxWidth: "540px" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={element.image} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{element.Name}</h5>
                                            <p className="card-text">{element.description}</p>
                                            <p className="card-text">Price: ${element.price}</p>
                                            <p className="card-text">Sizes: {element.sizes.join(', ')}</p>
                                            <p className="card-text">Purchases: {element.purchases}</p>
                                            <button type="button" className="btn btn-primary" onClick={() => { addToCart(element) }}>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}
export default Products;