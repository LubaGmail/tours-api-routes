import MainHeader from "./main-header"

const Layout = props => {

    return (

        <>
            <MainHeader />
            {props.children}
        </>
    )
}

export default Layout