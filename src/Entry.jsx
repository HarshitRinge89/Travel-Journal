export default function Entry(props){
    return (
        <article className="journalEntry">
            <div className="main-image-container">
                <img 
                className="main-image" src={props.img} alt={props.title}
                />
            </div>
            <div>
                <img 
                className="marker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEteukpdNz42T9OmUM_xVxXg_7xfKqeC4kIq-AsDDMpy0_fYrBi-2JoZjT&s=10" alt ="marker icon"
                />
                <span className="country">
                    {props.country}
                </span>
                <a  className="loc" href={props.loc}>
                View on Google Maps
                </a>
                <h2 className="title">{props.title}</h2>
                <p className="date">{props.date}</p>
                <p className="description">
                    {props.description}
                </p>
            </div>
        </article>
    )

}