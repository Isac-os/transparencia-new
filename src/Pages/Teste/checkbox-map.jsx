import React from 'react';
import Brazil from '@svg-maps/brazil';
import { CheckboxSVGMap } from 'react-svg-map';
import { getLocationName } from './utils';

class CheckboxMap extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			pointedLocation: null,
			focusedLocation: null,
			selectedLocations: []
		};

		this.handleLocationMouseOver = this.handleLocationMouseOver.bind(this);
		this.handleLocationMouseOut = this.handleLocationMouseOut.bind(this);
		this.handleLocationFocus = this.handleLocationFocus.bind(this);
		this.handleLocationBlur = this.handleLocationBlur.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleLocationMouseOver(event) {
		const pointedLocation = getLocationName(event);
		this.setState({ pointedLocation: pointedLocation });
	}

	handleLocationMouseOut() {
		this.setState({ pointedLocation: null });
	}

	handleLocationFocus(event) {
		const focusedLocation = getLocationName(event);
		this.setState({ focusedLocation: focusedLocation });
	}

	handleLocationBlur() {
		this.setState({ focusedLocation: null });
	}

	handleOnChange(selectedNodes) {
		this.setState(prevState => {
			return {
				...prevState,
				selectedLocations: selectedNodes.map(node => node.attributes.name.value)
			};
		});
	}


	render() {
		return (
			<article className="examples__block">
				<div className="examples__block__info">
					<div className="examples__block__info__item">
						Focused location: {this.state.focusedLocation}
					</div>
				</div>
				<div className="examples__block__map">
					<CheckboxSVGMap
						map={Brazil}
						onLocationFocus={this.handleLocationFocus} />
				</div>
			</article>
		);
	}
}

export default CheckboxMap;
