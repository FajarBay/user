import React, { Component } from 'react';

class Rara extends Component {
    state = { }
    render() {
    return (
        <React.Fragment>
        <section className="banner-bottom" id="about">
		<div className="container">
            <div className="inner-sec">
                <div className="row middle-grids">
                    <div className="col-lg-4 advantage-grid-info1">
                        <div className="advantage_left1 text-center">
                            <img src="images/rara.png" className="img-fluid" alt=""></img>
                        </div>
                    </div> 
					 <div className="col-lg-8 advantage-grid-info">
                        <div className="advantage_left">
                             <h1 className="heading text-capitalize mb-sm-5 mb-4">Hi. I'm <span>Azzahra.</span></h1>
							<p className="mt-4">Integer porttitor <span>mollisar </span>lorem, at molestie arcu pulvinar ut. Proin ac fermentum est. Cras mi ipsum, consectetur.</p><br />
							<table>
                                <tr>
                                    <td className="pb-1 pr-5"><p>Email</p></td>
                                    <td><p>example@mail.com</p></td>
                                </tr>
                                <tr>
                                    <td className="pb-1 pr-5"><p>Address</p></td>
                                    <td><p>Yogyakarta</p></td>
                                </tr>
                                <tr>
                                    <td className="pb-1 pr-5"><p>Telephone</p></td>
                                    <td><p>0987654321</p></td>
                                </tr>
                            </table>
						</div>
                    </div>
                </div>
            </div>
		</div>
    </section>
    </React.Fragment>
    );
}
}

export default Rara;