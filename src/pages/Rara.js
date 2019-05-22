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
							<p className="mt-4">Time isn't the main thing. Its the only thing.</p><br />
							<table>
                                <tbody>
                                <tr>
                                    <td className="pb-1 pr-5"><p className="t">Email</p></td>
                                    <td><p className="t">azzahrapramata@gmail.com</p></td>
                                </tr>
                                </tbody>
                                <tbody>
                                <tr>
                                    <td className="pb-1 pr-5"><p className="t">Address</p></td>
                                    <td><p className="t">Yogyakarta</p></td>
                                </tr>
                                </tbody>
                                <tbody>
                                <tr>
                                    <td className="pb-1 pr-5"><p className="t">Telephone</p></td>
                                    <td><p className="t">082220513104</p></td>
                                </tr>
                                </tbody>
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