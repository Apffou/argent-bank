import Banner from '../Components/Banner/Banner.js';
import Feature from '../Components/Feature/Feature.js';
import data from '../feature.json';

function Home() {
    return (
        <body>
            <Banner />
            <section className='features'>
                <h2 class="sr-only">Features</h2>
                {data.map((element) => <Feature element={element} key={element.title} />)}
            </section>
        </body>
    )
}
export default Home;