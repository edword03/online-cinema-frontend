import { FC } from 'react';

interface HeadingProps {
	title: string;
}

export const SubHeading: FC<HeadingProps> = ({ title }) => {
	return (
		<h2 className={`text-white text-xl mb-5 font-semibold`}>{title}</h2>
	);
};
