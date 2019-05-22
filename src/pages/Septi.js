import React, { Component } from 'react';

class Septi extends Component {
    state = { }
    render() {
    return (
        <React.Fragment>
        <section className="banner-bottom" id="about">
		<div className="container-fluid">
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
                            <table className="table-responsive">
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

    <div className="agileits-services" id="services">
		<div className="container">
		   <h2 className="heading text-capitalize"> Services </h2>
		   <p className="subs mt-4">What I Offer.</p>
            <div className="agileits-services-row row pt-md-5 pb-5  text-center">
                <div className="col-lg-4">
                    <div className="agileits-services-grids mt-lg-0 mt-md-0 mt-5">
                        <h4 className="mt-4 mb-4">Web Developer</h4>
                        <p>I build customized cross-browser, cross-platform web sites and web applications. 
                            I use a wide array of the latest front end technologies. </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="agileits-services-grids mt-lg-0 mt-5">
                        <h4 className="mt-4 mb-4">Photography</h4>
                        <p>Good quality photography is often the very first thing a prospective client or customer sees about your business.</p>
                    </div>
                </div>
                <div className="col-lg-4  mt-lg-0 mt-5">
                    <div className="agileits-services-grids">
                       <h4 className="mt-4 mb-4">Web Design</h4>
                        <p>I make design of layouts, design of web-pages, redesign of existing projects, 
                            responsive web-design, design of Wordpress themes.</p>
                    </div>
                </div>
            </div>
    </div>
	</div>
    </React.Fragment>
    );
}
}

export default Septi;