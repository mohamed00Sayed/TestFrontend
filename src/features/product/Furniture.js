import Dimensions from "./Dimensions"

const Furniture = ({furniture}) =>{
    return (
        <li>
            <div>{furniture.sku}</div>
            <div>{furniture.name}</div>
            <div>{furniture.price}</div>
            <Dimensions dimensions={furniture.dimensions}/>
        </li>
    )
}

export default Furniture;