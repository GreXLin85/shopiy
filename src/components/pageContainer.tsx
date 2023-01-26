import styled from 'styled-components';


const PageContainer = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px auto;
    gap: 2rem;
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