import Header from 'components/header'
import Footer from 'components/footer'

// @ts-ignore
const Layout = ({ children }) => {
    return(
        <div className={'content'}>
            <Header/>
                {children}
            <Footer/>
        </div>
    )
}

export default Layout;