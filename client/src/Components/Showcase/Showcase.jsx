// comps 
import Nav from '../Home/Nav';

// css 
import '../../CSS/Showcase/Showcase.css';

const Showcase = (props) => {
    
    const pf = props.props
    var bulletcounter = 0;
    console.log(pf)

    return (
        <div className='Showcase'>
            <div className='Showcase__caseLable'>
                <h1 className='caseLable__title'>{pf.title}</h1>
                <p className='caseLable__desc'>{pf.desc}</p>
            </div>
            {pf.list.map((item) => {
                return(
                    <div className='Showcase__case' key={item.key} id={item.key}>
                        <div className='case__coverContainer'>
                            <img src={item.cover} className='coverContainer__cover' />
                        </div>
                        <div className='case__infoContainer'>
                            <h2 className='case__title'>{item.title}</h2>
                            <span className='title__year'>{item.year}</span>
                            <p className='case__desc'>{item.desc}</p>
                            <div className='case__bulletContainer'>
                                {item.bullets.map((item) => {
                                    bulletcounter += 1
                                    return(
                                        <p className='bulletContainer__bullet' key={`bc_${bulletcounter}`}><p>&#8277;</p>{item}</p>
                                    )
                                })}    
                            </div> 
                        </div>
                        <div className='Showcase__sampleContainer'>
                            {item.samples.map((item) => {
                                <div className='sampleContainer__pieceContainer'>
                                        <img className='imgCont__img' src={item} />
                                </div>
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default Showcase;