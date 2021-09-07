import { Fragment } from "react"
import MainFooter from "./MainFooter"
import MainNavigation from "./MainNavigation"

const Layout = (props) =>{
    return(
        <Fragment>
            <MainNavigation />
            <main>
                {props.children}
            </main>
            <MainFooter />
        </Fragment>
    )
}

export default Layout