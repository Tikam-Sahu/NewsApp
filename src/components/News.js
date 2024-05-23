import React, { Component } from 'react'
import NewsItem from './NewsItem';

export default class News extends Component {


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            // totalResults: 1,
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=b83bd278be004d2f90208b7880fb9adb&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json()
        // console.log(parseData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })

    }

    handlePreviousClick = async () => {
        console.log("previous");

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b83bd278be004d2f90208b7880fb9adb&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parseData = await data.json()
        // console.log(parseData);


        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles
        })
    }
    handleNextClick = async () => {
        console.log("Next");

        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
            console.log("no next condition true");

        } else {

            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b83bd278be004d2f90208b7880fb9adb&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parseData = await data.json()
            // console.log(parseData);


            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles
            })
            console.log("next page else")
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center'>NewsApp - Today Top HeadLines </h2>
                <div className="row">

                    {this.state.articles.map((element) => {
                        const title = element.title || ""; // Ensure title is not null
                        const trimmedTitle = title.length > 50 ? title.slice(0, 50) + '...' : title;

                        const description = element.description || ""; // Ensure description is not null
                        const trimmedDescription = description.length > 50 ? description.slice(0, 50) + '...' : description;

                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem
                                    title={trimmedTitle}
                                    description={trimmedDescription}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                />
                            </div>
                        );
                    })}


                </div>
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className='btn btn-primary' onClick={this.handlePreviousClick}>&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" className='btn btn-primary' onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}
