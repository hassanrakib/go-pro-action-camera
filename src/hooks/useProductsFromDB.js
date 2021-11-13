import { useEffect, useState } from "react"

const useProductsFromDB = (poke) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://glacial-headland-75671.herokuapp.com/products`)
            .then(res => res.json())
            .then(products => setProducts(products));
    }, [poke]);

    return { products };
}

export default useProductsFromDB;