import Carousel from 'react-bootstrap/Carousel';

const PortfolioImages = (props) => {

	return(
		<div>
			<div className="card" data-toggle="modal" data-target={props.modalID}>
				<img className="card-img-top" src={props.mainImg} alt={props.imgsAlt} />
				<div className="card-body">
					<p className="card-text" dangerouslySetInnerHTML={{__html: props.jobDescription}} />
				</div>
				<button type="button" className="btn btn-primary" data-toggle="modal" data-target={props.modalID}  dangerouslySetInnerHTML={{__html: props.buttonName}} />
			</div>
			<div className="modal fade modal" id={props.PopupID} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<Carousel pauseonhover="true" interval="4000">
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={props.firstImg}
										alt={props.imgsAlt}
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={props.secondImg}
										alt={props.imgsAlt}
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={props.thirdImg}
										alt={props.imgsAlt}
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={props.fourthImg}
										alt={props.imgsAlt}
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={props.fifthImg}
										alt={props.imgsAlt}
									/>
								</Carousel.Item>
							</Carousel>
							<div className="container">
								<div className="row">
									<div className="col-12 gallery-description">
										<h3 className="modal-title" id="exampleModalLongTitle" dangerouslySetInnerHTML={{__html: props.jobTitle}}/>
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