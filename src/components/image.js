import produit from "../produit/produit";


export default function Image(){
    return (
        <div>
            <h1 className={{with:"100px" , height:"100px"}}> Image: {produit.image}</h1>
        </div>
    )
}