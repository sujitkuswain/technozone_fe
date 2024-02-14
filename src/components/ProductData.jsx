const ProductData = ({products}) => {
    return(
        <>
            {
                products.map((curProduct) => {
                    const {id, name, quantity} = curProduct;
                    return(
                        <tr key={id}>
                            <td>
                                {name}
                            </td>
                            <td>
                                {quantity}
                            </td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default ProductData;