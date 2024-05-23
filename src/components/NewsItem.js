import React, { Component } from 'react';

export default class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div>
                <div className="card my-3" style={{ width: "18rem", height: "20rem", position: "relative" }}>
                    <img src={!imageUrl ? "https://www.cartoq.com/wp-content/uploads/2023/06/hyundai-exter-bookings-open-featured.jpg" : imageUrl} className="card-img-top" alt="..." style={{ width: "18rem", height: "10rem" }} />
                    <div className="card-body" style={{ height: "8rem", overflow: "hidden" }}>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm" style={{ position: "absolute", bottom: "5px", right: "5px" }}>Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}
