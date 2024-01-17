// comps 
import Nav from '../Home/Nav';

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
            <Nav props={{width: "100%", marginTop: "2%", marginBottom: "2%", color: "#05C3DD", marginLeft: "2%"}}/>
        </div>
    )
};

export default Showcase;