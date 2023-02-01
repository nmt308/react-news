interface propTypes {
    name: string;
    title: string;
    message: string;
    image: string;
}
export default function SlideItem(props: propTypes) {
    return (
        <div className="item">
            <div className="row slider-info">
                <div className="col-lg-8 message-info align-self">
                    <span className="label-blue mb-sm-4 mb-3">{props.name}</span>
                    <h3 className="title-big mb-4">{props.title}</h3>
                    <p className="message">{props.message}</p>
                </div>
                <div className="col-lg-4 col-md-8 img-circle mt-lg-0 mt-4">
                    <img src={props.image} className="img-fluid radius-image-full" alt="clientimage" />
                </div>
            </div>
        </div>
    );
}
