// depends 
import {Link} from 'react-router-dom';

// css 
import "../../CSS/Library/PortfolioCard.css";

const PortfolioCard = (props) => {

    const pf = props.props;
    var count = 0;

    return(
        <div className="PortfolioCard" id="PortfolioCard">
            <div className="PC__introContainer">
                <h1 className="introContainer__title">{pf.title}</h1>
                <p className="introContainer__desc">{pf.desc}</p>
            </div>
            <div className="PC__cardContainer">
                {pf.list.map((item) => {
                    if (count < 2) {
                        count += 1
                        return(
                            <div className="PC__linkCard">
                                <div className="linkCard__image"></div>
                                <p className="linkCard__title">{item.title}</p>
                                <p className="linkCard__year">{item.year}</p>
                            </div>
                        )
                    }
                })}
            </div>
            <Link className='PC__PageLink' to={`/${pf.title}`}>
                <div className='PageLink__block'>See more <span>&#10154;</span></div>
            </Link>
        </div>
    )
}

export default PortfolioCard;