import React, { Component } from 'react';

class Septi extends Component {
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
                            <img src="images/septi.png" className="img-fluid" alt="septi"></img>
                        </div>
                    </div> 
					 <div className="col-lg-8 advantage-grid-info">
                        <div className="advantage_left">
                             <h1 className="heading text-capitalize mb-sm-5 mb-4">Hi. I'm <span>Septiya Kristin T.</span></h1>
							<p className="mt-4 t">Kita menjadi dewasa karena pengalaman bukan karena 
                                umur, so jangan kebanyakan ngeluh saat nyari pengalaman</p><br />
                            <table>
                                <tbody>
                                <tr>
                                    <td className="pb-1 pr-5"><p className="t">Email</p></td>
                                    <td><p className="t">septiyakristintamara747@gmail.com</p></td>
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
                                    <td><p className="t">082257639671</p></td>
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

export default Septi;