export default function TopicItem() {
    return (
        <div className="topics">
            <h3 className="section-title-left mb-4"> Topics</h3>
            <a href="beauty.html" className="topics-list">
                <div className="list1">
                    <span className="fa fa-bath"></span>
                    <h4>Beauty</h4>
                </div>
            </a>
            <a href="fashion.html" className="topics-list mt-3">
                <div className="list1">
                    <span className="fa fa-female"></span>
                    <h4>Fashion and style</h4>
                </div>
            </a>
            <a href="#food" className="topics-list mt-3">
                <div className="list1">
                    <span className="fa fa-cutlery"></span>
                    <h4>Food and wellness</h4>
                </div>
            </a>
            <a href="#lifestyle" className="topics-list mt-3">
                <div className="list1">
                    <span className="fa fa-pie-chart"></span>
                    <h4>Lifestyle</h4>
                </div>
            </a>
        </div>
    );
}
