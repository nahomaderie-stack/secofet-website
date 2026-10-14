import { Helmet } from 'react-helmet-async';
import NotFound from "../components/NotFound";
function NotFoundPage() {
    return (
        <>
            <Helmet>
                <title>Page not found | Secofet</title>
                <meta name="robots" content="noindex" />
            </Helmet>
            <NotFound />
        </>
    )
}
export default NotFoundPage;
