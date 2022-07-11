import cn from 'classnames';
import Image from 'next/image';
import { CSSProperties, FC } from 'react';
import { FieldError } from 'react-hook-form';

import { SkeletonLoader } from '@/ui/SkeletonLoader';

import { useUploads } from '@/hooks/useUploads';

import styles from './form.module.scss';

interface UploadField {
	folder?: string;
	value?: string;
	onChange: (...event: any[]) => void;
	placeholder: string;
	error?: FieldError;
	style?: CSSProperties;
	isNoImage?: boolean;
}

export const UploadField: FC<UploadField> = ({
	value,
	isNoImage,
	error,
	folder,
	style,
	placeholder,
	onChange,
}) => {
	const { uploadFile, isLoading } = useUploads(onChange, folder);

	return (
		<div className={cn(styles.field, styles.uploadField)} style={style}>
			<div className={styles.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type="file" onChange={uploadFile} />
					{error && <div className={styles.error}>{error.message}</div>}
				</label>
				{!isNoImage && (
					<div className={styles.uploadImageContainer}>
						{isLoading ? (
							<SkeletonLoader count={1} className="w-full h-full" />
						) : (
							value && (
								<Image src={`/${value}`} alt="" layout="fill" unoptimized />
							)
						)}
					</div>
				)}
			</div>
		</div>
	);
};
