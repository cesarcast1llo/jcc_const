import Carousel from 'react-bootstrap/Carousel';

const PortfolioImages = (props) => {

	return(
		<div>
			<div className="card" data-toggle="modal" data-target={props.data.modalID}>
				<img className="card-img-top" src={props.data.mainImg} alt={props.data.imgsAlt} />
				<div className="card-body">
					<p className="card-text" dangerouslySetInnerHTML={{__html: props.jobDescription}} />
				</div>
				<button type="button" className="btn btn-primary" data-toggle="modal" data-target={props.data.modalID}  dangerouslySetInnerHTML={{__html: props.buttonName}} />
			</div>
			<div className="modal fade modal" id={props.data.PopupID} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-body">
							<Carousel pauseonhover="true" interval="4000">
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={props.data.firstImg}
										alt={props.data.imgsAlt}
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={props.data.secondImg}
										alt={props.data.imgsAlt}
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={props.data.thirdImg}
										alt={props.data.imgsAlt}
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={props.data.fourthImg}
										alt={props.data.imgsAlt}
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={props.data.fifthImg}
										alt={props.data.imgsAlt}
									/>
								</Carousel.Item>
							</Carousel>
							<div className="container">
								<div className="row">
									<div className="col-12 gallery-description">
										<h2 className="modal-title" id="exampleModalLongTitle" dangerouslySetInnerHTML={{__html: props.jobTitle}}/>
										<p className="job-img-description" dangerouslySetInnerHTML={{__html: props.jobSubTitle}} />
									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PortfolioImages