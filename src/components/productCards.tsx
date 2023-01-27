import styled from "styled-components";
import ProductCard from "./productCard";

const ProductCardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 1200px;
    gap: 20px;
`;

const ProductCards = ({ products }: { products: {
    image: string;
    title: string;
    description: string;
    price: string;
}[] }) => {
    return (
        <ProductCardsContainer>
            {products.map((product: any) => (
                <ProductCard product={product} />
            ))}
            {products.map((product: any) => (
                <ProductCard product={product} />
            ))}
        </ProductCardsContainer>
    );
};

export default ProductCards;