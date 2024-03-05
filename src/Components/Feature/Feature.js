import './Feature.scss'

function Feature(props) {
    return (
        <div class="feature-item">
            <img src={props.element.image} alt={props.element.alt} class="feature-icon" />
            <h3 class="feature-item-title"> {props.element.title} </h3>
            <p>
                {props.element.description}
            </p>
        </div>

    )
}
export default Feature;