// comps 
import FooterNav from '../Library/FooterNav';

// css 
import '../../CSS/Showcase/Showcase.css';
import Case from './Case';

const Showcase = (props) => {
    const pf = props.props

    return (
        <div className='Showcase'>
            <div className='Showcase__caseLable'>
                <h1 className='caseLable__title'>{pf.title}</h1>
                <p className='caseLable__desc'>{pf.desc}</p>
            </div>
            {pf.list.map((item) => {
                return(
                    <Case props={item} key={`showcase_${item.key}`}/>
                )
            })}
            <FooterNav props={{color: "#05C3DD" }}/>
        </div>
    )
};

export default Showcase;