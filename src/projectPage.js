import './index.css';
import { Link } from 'react-router-dom';
import Footer from './footer';
import { useState, useEffect } from 'react';

const ProjectPage = (props) => {
    //console.log(props.location.itemProp);

    let item = props.location;
    return (
        <div className="content">
            <Link to="./projects" className="project-back">
                <div className="back-arrow"></div>Back
            </Link>
            <div className="project-name">
                {item.itemName}
            </div>
            <div className="project-description">
                {item.itemDescription}
            </div>

            <div className="project-page">

                <div className="project-images">
                    {/* {item.itemImages.map((item, i) =>
                        <img className="project-image" alt={item.itemName} key={i} src={process.env.PUBLIC_URL + item} />
                    )} */}
                    {Gallery(item.itemImages)}
                </div>
                <div className="project-block">
                    <div className="project-heading">Objectives</div>
                    {item.itemObjectives.map((item, i) =>
                        <li className="project-list-item" key={i}>{item}</li>
                    )}
                </div>
                <div className="project-block">
                    <div className="project-heading">Technicals</div>
                    {item.itemTechnicals.map((item, i) =>
                        <li className="project-list-item" key={i}>{item}</li>
                    )}
                </div>
                <div className="project-block">
                    <div className="project-heading">Results/Progress</div>
                    {item.itemResults.map((item, i) =>
                        <li className="project-list-item" key={i}>{item}</li>
                    )}
                </div>
                <div className="project-block">
                    <div className="project-heading">Related Links</div>
                    {item.itemLinks.map((item, i) =>
                        <li className="project-list-item" key={i}><a href={item}>{item}</a></li>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

function Gallery(images_src) {
    const { viewportHeight, viewportWidth } = useWindowDimensions();
    let maxHeight = viewportHeight * 0.7;

    // Aspect Ratios 
    let image_ar = []
    images_src.forEach(image_src => {
        let image = new Image();

        image.onload = function () {
            image_ar.push({ width: image.width, height: image.height });
        }
        image.src = image_src;

    });
    console.log(image_ar)
    var layoutGeometry = require('justified-layout')([image_ar])
    console.log(layoutGeometry)

    const imageContainerStyle = {
        width: '1060px', 
        height: layoutGeometry.containerHeight, 
        display: 'flex', 
        flexFlow: 'row wrap', 
        justifyContent: 'center'
    }

    const imageStyle = {
        width: '200px',
    }

    return (
        <div style={imageContainerStyle}>
            {images_src.map((item, i) =>
                <img style={imageStyle} alt={item.itemName} key={i} src={process.env.PUBLIC_URL + item} />
            )}
        </div>
    )
}


// Viewport Dims
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}


export default ProjectPage;