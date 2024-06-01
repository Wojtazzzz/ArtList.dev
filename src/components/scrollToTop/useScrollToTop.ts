import { useEffect, useState } from 'react';

export const useScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			// behavior: 'smooth', test
			// there is a bug on Chrome that causes this method does not scroll to the top of the document
			// because of the disabled=true on button
		});
	};

	useEffect(() => {
		if (!window) {
			return;
		}

		const eventHandler = () => {
			if (window.scrollY >= 550 && !isVisible) {
				setIsVisible(() => true);
			} else if (window.scrollY < 550 && isVisible) {
				setIsVisible(() => false);
			}
		};

		window.addEventListener('scroll', eventHandler);

		return () => {
			window.removeEventListener('scroll', eventHandler);
		};
	}, [isVisible]);

	return {
		isVisible,
		scrollToTop,
	};
};
