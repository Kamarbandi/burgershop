import Link from 'next/link'

const NotFoundPage = () => {
    return(
        <div className={'not-found'}>
            <h1>Uuups ...</h1>
            <h2>Such of page does not exit here!</h2>
            <p>Redirect to <Link href={'/'}>home page</Link></p>
        </div>
    )
}

export default NotFoundPage;