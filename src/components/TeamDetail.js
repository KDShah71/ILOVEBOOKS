import React, { Component } from "react";
import $ from "jquery";

export default class TeamDetail extends Component {
    componentDidMount() {
        $(document).ready(function() {
            $('.writers-accordion').click(function(event) {
                if(event.target.id.split('-')[0] === 'button') {
                    $('#book-1').attr('src', 'assets/img/writers/' + event.target.id.split('-')[1] + '-book1.jpg');
                    $('#book-2').attr('src', 'assets/img/writers/' + event.target.id.split('-')[1] + '-book2.jpg');
                }

            });
        });
    }
    render() {
        return (
            <section className="famous-writers pb-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col text-center py-5">
                            <h1 className="text-secondary text-uppercase font-italic common-title">The most famous writers</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 text-center align-self-center">
                            <a href="#"><img src="assets/img/writers/William_Shakespeare-book1.jpg" className="img-fluid" id="book-1" alt="" /></a>
                        </div>
                        <div className="col-lg-4">
                            <div id="accordion" className="writers-accordion">
                                <div className="card">
                                    <div className="card-header p-5">
                                        <button type="button" className="btn btn-block btn-outline-danger" data-toggle="collapse" data-target="#collapseOne" id="button-William_Shakespeare">William Shakespeare</button>
                                    </div>
                                    <div className="collapse show" id="collapseOne" data-parent="#accordion">
                                        <div className="card-body">
                                            <div className="card">
                                                <img src="assets/img/writers/William_Shakespeare.jpg" className="card-img-top img-fluid" alt="" />
                                                    <div className="card-body">
                                                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, ducimus!</p>
                                                        <a href="#" className="btn btn-primary btn-block">More Books</a>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header p-5">
                                        <button type="button" className="btn btn-block btn-outline-danger" data-toggle="collapse" data-target="#collapseTwo" id="button-Jane_Austen">Jane Austen</button>
                                    </div>
                                    <div className="collapse" id="collapseTwo" data-parent="#accordion">
                                        <div className="card-body">
                                            <div className="card">
                                                <img src="assets/img/writers/Jane_Austen.jpg" className="card-img-top img-fluid" alt="" />
                                                    <div className="card-body">
                                                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, ducimus!</p>
                                                        <a href="#" className="btn btn-primary btn-block">More Books</a>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header p-5">
                                        <button type="button" className="btn btn-block btn-outline-danger" data-toggle="collapse" data-target="#collapseThree" id="button-Charles_Dickens">Charles Dicken</button>
                                    </div>
                                    <div className="collapse" id="collapseThree" data-parent="#accordion">
                                        <div className="card-body">
                                            <div className="card">
                                                <img src="assets/img/writers/Charles_Dickens.jpg" className="card-img-top img-fluid" alt="" />
                                                    <div className="card-body">
                                                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, ducimus!</p>
                                                        <a href="#" className="btn btn-primary btn-block">More Books</a>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header p-5">
                                        <button type="button" className="btn btn-block btn-outline-danger" data-toggle="collapse" data-target="#collapseFour" id="button-Victor_Hugo">Victor Hugo</button>
                                    </div>
                                    <div className="collapse" id="collapseFour" data-parent="#accordion">
                                        <div className="card-body">
                                            <div className="card">
                                                <img src="assets/img/writers/Victor_Hugo.jpg" className="card-img-top img-fluid" alt="" />
                                                    <div className="card-body">
                                                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, ducimus!</p>
                                                        <a href="#" className="btn btn-primary btn-block">More Books</a>

                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-3 more-option">
                                <a href="#" className="btn btn-outline-info btn-block">More Writers</a>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center align-self-center">
                            <a href="#"><img src="assets/img/writers/William_Shakespeare-book2.jpg" className="img-fluid" id="book-2" alt="" /></a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
