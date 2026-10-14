import { Helmet } from "react-helmet-async";
import PrivacyPolicy from "../components/PrivacyPolicy";
function PrivacyPolicyPage() {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | Secofet</title>
                <meta name="description" content="Learn how Secofet collects, uses, and protects information when you use our website." />
                <link rel="canonical" href="https://secofet.com/privacy/" />
            </Helmet>
            <PrivacyPolicy />
        </>
    )
}
export default PrivacyPolicyPage;
