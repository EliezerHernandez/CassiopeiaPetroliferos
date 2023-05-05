import { IStaticImageProps } from 'gatsby-plugin-image/dist/src/components/static-image.server';
import * as React from 'react';

interface Props {
	title: string;
}

export const AccordeonItem: React.FunctionComponent<Props> = ({
	title,
	children,
}) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const toggle = () => setIsOpen((prev) => !prev);

	return (
		<article className="fadeable bg-white rounded shadow ">
			<div
				onClick={toggle}
				className={`cursor-pointer p-8  flex justify-between items-center ${
					isOpen && 'bg-neutral-200'
				}`}>
				<p>{title}</p>
				<p className="font-bold text-xl">{isOpen ? '-' : '+'}</p>
			</div>
			{isOpen && <div className="p-8">{children}</div>}
		</article>
	);
};