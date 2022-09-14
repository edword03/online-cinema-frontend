import { FC } from 'react';

interface HeadingProps {
	title: string;
	className?: string;
}

export const SubHeading: FC<HeadingProps> = ({ title, className }) => {
	return (
		<h2
			className={`text-white text-xl mb-5 font-semibold ${
				className ? className : ''
			}`}
		>
			{title}
		</h2>
	);
};
