import './AppDownload.css';
import { assets } from '../../assets/assets';

function AppDownload() {
    return (
        <>
            <div className="app-download">
                <p>For Better Experience Download <br />Tomato App</p>
                <div className="app-download-platforms">
                    <img src={assets.play_store} alt="google playstore icon" />
                    <img src={assets.app_store} alt="apple store icon" />
                </div>
            </div>
        </>
    )
}

export default AppDownload;