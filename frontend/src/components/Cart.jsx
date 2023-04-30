import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Cart = ({ userData }) => {
    const [cartList, setCartList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if(userData.email===undefined) {
            navigate('/login');
            return;
        }
        axios.post(process.env.REACT_APP_FETCH_DOMAIN + '/cart/allProd', { userData }, { 'Content-Type': 'application/json' })
            .then((response) => {
                setCartList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        // eslint-disable-next-line
    }, []);

    const buyNow = (element) => {
        console.log("to be continued...")
    }
    if(userData.email===undefined) return <h1>Please Login First</h1>
    return (
        <>
            <div className="mainProductsFrame m-4 d-flex flex-wrap justify-content-evenly">
                {console.log(cartList)}
                {
                    cartList.map((element) => {
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
                                            <button type="button" className="btn btn-primary" onClick={() => { buyNow(element) }}>Buy Now</button>
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
export default Cart;