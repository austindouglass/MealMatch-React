import React from "react";
import Background from '../images/menu-with-food.png';

function Jumbotron() {
    const styles = {
        bgImage: {
            backgroundImage: `url(${Background})`
        }
    };
    return (
        <div className="jumbotron" style={styles.bgImage} >
            <div className="container">
                <h1>Food is Love,<br />Let us help you find it!</h1>
                <p className="lead">Use 🍔MealMatch to view all the restaurants near you so finding your perfect meal is fast and easy.</p>
                <a className="btn btn-primary btn-lg lead-button" data-toggle="modal" data-target="#leadModal" role="button">Find Your Meal Now</a>
            </div>
            <div className="modal fade" id="leadModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Oops! Sorry about that!</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <p>Thank you for your interest in MealMatch! Unfortunately, this website is still a work in progress and this doesn't work yet. Please try again another time.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;