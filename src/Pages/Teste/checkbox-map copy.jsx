import React, { useState, useEffect } from 'react';
import Brazil from '@svg-maps/brazil';
import { CheckboxSVGMap } from 'react-svg-map';
import { getLocationName } from './utils';

export default function Map() {
	const [teste, setTeste] = useState("")


	function handleLocationFocus(event) {
		const focusedLocation = getLocationName(event);
		setTeste({ focusedLocation: focusedLocation });
	}


	return (
		<article className="examples__block">
			<h1>{teste.focusedLocation}</h1>
			<div className="examples__block__info">
				<div className="examples__block__info__item">
				</div>
			</div>
			<div className="examples__block__map">
				<CheckboxSVGMap
					map={Brazil}
					onLocationFocus={handleLocationFocus} />
			</div>
		</article>
	)

}
