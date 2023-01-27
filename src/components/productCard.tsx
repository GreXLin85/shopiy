import styled from "styled-components";

const ProductCardContainer = styled.div`d
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 250px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
`;

const ProductImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 20px;
`;

const ProductContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
`;

const ProductTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0;
`;

const ProductDescription = styled.p`
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
`;

const ProductPrice = styled.p`
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
`;

const ProductBuyButton = styled.button`
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    background-color: #FF8A00;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #FFB866;
    }
`;

const ProductCard = ({ product }: {
    product: {
        image: string;
        title: string;
        description: string;
        price: string;
    };
}) => {
    return (
        <ProductCardContainer>
            <ProductImage src={product.image} />
            <ProductContent>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductPrice>{product.price}</ProductPrice>
            </ProductContent>
            <ProductBuyButton>Buy</ProductBuyButton>
        </ProductCardContainer>
    );
};

export default ProductCard;