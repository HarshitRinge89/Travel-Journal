export default function Entry(props){
    console.log(props)
    return (
        <article className="journalEntry">
            <div className="main-image-container">
                <img 
                className="main-image" src={props.entry.img} alt={props.entry.title}
                />
            </div>
            <div>
                <img 
                className="marker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEteukpdNz42T9OmUM_xVxXg_7xfKqeC4kIq-AsDDMpy0_fYrBi-2JoZjT&s=10" alt ="marker icon"
                />
                <span className="country">
                    {props.entry.country}
                </span>
                <a  className="loc" href={props.entry.loc}>
                View on Google Maps
                </a>
                <h2 className="title">{props.entry.title}</h2>
                <p className="date">{props.entry.date}</p>
                <p className="description">
                    {props.entry.description}
                </p>
            </div>
        </article>
    )

}