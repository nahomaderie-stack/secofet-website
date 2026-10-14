import { Helmet } from "react-helmet-async";
import CookiePolicy from "../components/CookiePolicy";
function CookiePolicyPage() {
    return (
        <>
            <Helmet>
                <title>Cookie Policy | Secofet</title>
                <meta name="description" content="See how Secofet uses cookies and similar technologies on our website." />
                <link rel="canonical" href="https://secofet.com/cookie/" />
            </Helmet>
            <CookiePolicy />
        </>
    )
}
export default CookiePolicyPage;
