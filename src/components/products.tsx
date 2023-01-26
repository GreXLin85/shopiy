import styled from "styled-components";

const ProductCategoryButton = styled.button`
    background-color: #FF8A00;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    width: 20rem;
    height: 100%;
`;

const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
`;

// There is a product card with product picture and product name inside. The product card should be in the column direction with flexbox. The product card must be 10rem long and 10rem wide. The product image should be centered on the product card. The product name should be placed just below the product image with a z-index.

const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 10rem;
    background-color: #FF8A00;
    border-radius: 1rem;
`;

const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
`;

const ProductName = styled.h3`
    position: inherit;
    z-index: 1;
    color: white;
    bottom: 3.5rem;
`;

export default function Products() {
    return (
        <>
            <ProductCategoryButton>Product Category</ProductCategoryButton>
            
            <ProductContainer>
                <ProductCard>
                    <ProductImage src="https://random.imagecdn.app/500/150"></ProductImage>
                    <ProductName>Computers</ProductName>
                </ProductCard>
                <ProductCard>
                    <ProductImage src="https://random.imagecdn.app/500/150"></ProductImage>
                    <ProductName>Telephones</ProductName>
                </ProductCard>
                <ProductCard>
                    <ProductImage src="https://random.imagecdn.app/500/150"></ProductImage>
                    <ProductName>Gaming</ProductName>
                </ProductCard>
                <ProductCard>
                    <ProductImage src="https://random.imagecdn.app/500/150"></ProductImage>
                    <ProductName>Something</ProductName>
                </ProductCard>
                <ProductCard>
                    <ProductImage src="https://random.imagecdn.app/500/150"></ProductImage>
                    <ProductName>Another Thing</ProductName>
                </ProductCard>
            </ProductContainer>
        </>
    )
}