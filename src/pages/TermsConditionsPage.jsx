import { Helmet } from "react-helmet-async";
import TermsAndConditions from "../components/TermsConditions";
function TermsConditionsPage() {
    return (
        <>
            <Helmet>
                <title>Terms and Conditions | Secofet</title>
                <meta name="description" content="Read Secofet's terms and conditions for using our website and services." />
                <link rel="canonical" href="https://secofet.com/terms/" />
            </Helmet>
            <TermsAndConditions />
        </>
    )
}
export default TermsConditionsPage;
