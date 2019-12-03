import Carousel from 'react-bootstrap/Carousel';

export default function PortfolioImages (props) {

	return(
		<div>
			<div className="card">
				<img className="card-img-top" src={props.imgs} alt={props.imgsAlt} />
				<div className="card-body">
					<p className="card-text">{props.textInside}</p>
				</div>
				<button type="button" className="btn btn-primary" data-toggle="modal" data-target={props.modalID}>
					{props.buttonText}
				</button>
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
										src={props.carousel1}
										alt={props.imgsAlt}
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={props.carousel2}
										alt={props.imgsAlt}
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={props.carousel3}
										alt={props.imgsAlt}
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={props.carousel4}
										alt={props.imgsAlt}
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={props.carousel5}
										alt={props.imgsAlt}
									/>
								</Carousel.Item>
							</Carousel>
							<div className="container">
								<div className="row">
									<div className="col-12 gallery-description">
										<h3 className="modal-title" id="exampleModalLongTitle">
											{props.PopupTitle}
										</h3>
										{props.PopupDescription}
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
