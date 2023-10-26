import './index.css';
import { Link } from 'react-router-dom';
import Footer from './footer';

const ProjectPage = (props) => {
    console.log(props.location.itemProp);

    let item = props.location;
    return (
        <div class="content">
            <div className="project-page">
                <Link to="./projects" className="project-back">
                    <div className="back-arrow"></div>Back
                </Link>
                <div className="project-name">
                    {item.itemName}
                </div>
                <div className="project-description">
                    {item.itemDescription}
                </div>
                <div className="project-images">
                    {item.itemImages.map((item, i) =>
                        <img className="project-image" alt={item.itemName} key={i} src={process.env.PUBLIC_URL + item} />
                    )}
                </div>
                <div className="project-block">
                    <div class="project-heading">Objectives</div>
                    {item.itemObjectives.map((item, i) =>
                        <li className="project-list-item" key={i}>{item}</li>
                    )}
                </div>
                <div className="project-block">
                    <div class="project-heading">Technicals</div>
                    {item.itemTechnicals.map((item, i) =>
                        <li className="project-list-item" key={i}>{item}</li>
                    )}
                </div>
                <div className="project-block">
                    <div class="project-heading">Results/Progress</div>
                    {item.itemResults.map((item, i) =>
                        <li className="project-list-item" key={i}>{item}</li>
                    )}
                </div>
                <div className="project-block">
                    <div class="project-heading">Related Links</div>
                    {item.itemLinks.map((item, i) =>
                        <li className="project-list-item" key={i}><a href={item}>{item}</a></li>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProjectPage;