import "./footer.css"

const Footer = () => {


    return (
        <>
            <div className="bg-color-footer padding">
                <h4 >Questions? Call 000-800-919-1694</h4>
                <div className="flex flex-direction-row space-between ">
                    <div className="flex flex-direction-column clr">
                        <a href="#" >FAQ</a>
                        <a href="#">Media center</a>
                        <a href="#">Ways to Watch</a>
                        <a href="#">Cookie Preferences</a>
                        <a href="#">Speed Test</a>
                    </div>
                    <div className="clr flex flex-direction-column">
                        <a href="#">Help Center</a>
                        <a href="#">Investors Relation</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Corporate Information</a>
                        <a href="#">Legal Notices</a>
                    </div>
                    <div className="clr flex flex-direction-column">
                        <a href="#">Account</a>
                        <a href="#">Jobs</a>
                        <a href="#">Privacy</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Only on Netflix</a>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Footer