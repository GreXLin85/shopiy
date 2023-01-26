import styled from 'styled-components';

const Navbar = styled.div`
    background-color: #FFFFFF;
    height: 80px;
    display: flex;
    justify-content: space-evenly;

    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const SiteTitle = styled.p`
    font-size: 1rem;
    color: #2C2C2C;
    font-weight: bold;
`;

const Pages = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 0 20px;
`;

const Page = styled.p`
    font-size: 1rem;
    color: #2C2C2C;
    cursor: pointer;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 0 20px;
`;

const SignInButton = styled.button`
    background-color: #FFF6E4;
    border: none;
    color: #FF8A00;
    font-size: 1rem;
    padding: 10px 20px;
    cursor: pointer;
`;

const SignUpButton = styled.button`
    background-color: #FF8A00;
    border: none;
    color: #FFF;
    font-size: 1rem;
    padding: 10px 20px;
    cursor: pointer;
`;

export default function NavigationBar(){
    return (
        <Navbar>
            <SiteTitle>E-Commerce Demo</SiteTitle>
            <Pages>
                <Page>Home</Page>
                <Page>Electronic Components</Page>
                <Page>Software</Page>
                <Page>Arduino</Page>
            </Pages>
            <Buttons>
                <SignInButton>Sign In</SignInButton>
                <SignUpButton>Sign Up</SignUpButton>
            </Buttons>
        </Navbar>
    );
}