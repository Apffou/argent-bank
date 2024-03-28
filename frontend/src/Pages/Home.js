import Banner from '../Components/Banner/Banner.js';
import Feature from '../Components/Feature/Feature.js';
import data from '../feature.json';

function Home() {
    return (
        <div className="main-contain" >
            <Banner />
            <section className='features'>
                <h2 className="sr-only">Features</h2>
                {data.map((element) => <Feature element={element} key={element.title} />)}
            </section>
        </div>
    )
}
export default Home;