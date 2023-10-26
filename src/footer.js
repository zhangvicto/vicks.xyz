import github from './github.png'
import linkedin from './linkedin.png'

const Footer = () => {
    return (
        <div className="footer">
            <hr />
            <div className="footer-logo-container">
                <a href="https://www.linkedin.com/in/victor-zhang-9a1510146/">
                    <img class="footer-logo" alt="linkedin" src={linkedin} />
                </a>
                <a href="https://github.com/zhangvicto">
                    <img class="footer-logo" alt="github" src={github} />
                </a>
            </div>

            <div className="footer-text">Portfolio 2023 Victor Zhang</div>
        </div>
    );
}

export default Footer