import styled from 'styled-components';


const PageContainer = styled.div`
    background-color: #9C9C9C;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function pageContainer({children}: {
    children: React.ReactNode
}){
    return (
        <PageContainer>
            {children}
        </PageContainer>
    )
}