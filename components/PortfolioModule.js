import Carousel from 'react-bootstrap/Carousel';

export default function PortfolioImages (props) {

	return(
		<div>
			<div className="card">
				<img className="card-img-top" src={props.img} alt={props.imgsAlt} />
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
							<h5 className="modal-title" id="exampleModalLongTitle">
								{props.PopupTitle}
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<Carousel pauseonhover="true" interval="4000">
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={props.img1}
										alt={props.alt1}
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={props.img2}
										alt={props.alt2}
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={props.img3}
										alt={props.alt3}
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={props.img4}
										alt={props.alt4}
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={props.img5}
										alt={props.alt5}
									/>
								</Carousel.Item>
							</Carousel>
							{props.PopupDescription}
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
