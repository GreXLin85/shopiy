import styled from "styled-components";

// add shadow to product container
const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const ProductInput = styled.input`
    width: 20rem;
    padding: 15px 32px;
    border: none;
    padding-left: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const ProductButton = styled.button`
    background-color: #FF8A00;  
    border: none;   
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    width: 10rem;
    height: 100%;
`;

export default function Search() {
    return (
        <ProductContainer>
            <ProductInput placeholder="Search something..."></ProductInput>
            <ProductButton>Search</ProductButton>
        </ProductContainer>
    );
}