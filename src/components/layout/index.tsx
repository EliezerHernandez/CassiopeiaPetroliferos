import * as React from 'react';
// import { WhatsappButton } from '../WhatsappButton';
import { MainFooter } from './main-footer';
import { MainHeader } from './main-header';

export const Layout: React.FunctionComponent = ({ children }) => {
	const [fadeableItems, setFadeableItems] = React.useState<Element[]>([]);

	// This function is not mine, is an implementation of Tieme's response on this post: https://stackoverflow.com/questions/5598743/finding-elements-position-relative-to-the-document

	const getYPosition = (elem: Element) => {
		let { top } = elem.getBoundingClientRect();
		let scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;
		let clientTop =
			document.documentElement.clientTop || document.body.clientTop || 0;

		return Math.round(top + scrollTop - clientTop);
	};

	const updateElements = (
		elements: {
			element: Element;
			position: number;
		}[],
		scroll_pos: number
	) => {
		let fadein_offset = window.innerHeight;
		let newElements = [];

		for (let elem of elements) {
			let elementInViewport =
				elem.position < scroll_pos + (fadein_offset * 5) / 6 &&
				elem.position > scroll_pos - fadein_offset / 3;
			if (elementInViewport) {
				elem.element.classList.add('fadein');
			} else {
				newElements.push(elem);
			}
		}

		return newElements;
	};

	React.useEffect(() => {
		let elements = Array.from(document.querySelectorAll('.fadeable')).map(
			(elem) => ({ element: elem, position: getYPosition(elem) })
		);
		let last_scroll_pos = window.scrollY;
		elements = updateElements(elements, last_scroll_pos);

		window.addEventListener('scroll', (e) => {
			last_scroll_pos = window.scrollY;
			elements = updateElements(elements, last_scroll_pos);
		});
	}, []);

	return (
		<>
			<MainHeader />
			<main>{children}</main>
			<MainFooter />
		</>
	);
};