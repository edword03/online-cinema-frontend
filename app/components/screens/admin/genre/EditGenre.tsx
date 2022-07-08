import dynamic from 'next/dynamic';
import { FC, MouseEvent } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { stripHtml } from 'string-strip-html';

import { Meta } from '@/components/SEO/Meta';
import { useEditGenre } from '@/components/screens/admin/genre/useEditGenre';
import styles from '@/components/shared/admin/adminForm.module.scss';

import { Heading } from '@/ui/Heading/Heading';
import { SkeletonLoader } from '@/ui/SkeletonLoader';
import { AdminNav } from '@/ui/admin-nav/AdminNav';
import { Button } from '@/ui/form-field/Button';
import { Field } from '@/ui/form-field/Field';
import { SlugField } from '@/ui/form-field/SlugField';

import { generateSlug } from '@/utils/string/generateSlug';

import { EditGenreInput } from '@/types/edit-genre';

const EditorDynamic = dynamic(() => import('@/ui/form-field/Editor'), {
	ssr: false,
});

export const EditGenre: FC = () => {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
		getValues,
		control,
	} = useForm<EditGenreInput>({
		mode: 'onSubmit',
	});

	const { isLoading, onSubmit } = useEditGenre(setValue);

	const generateSlugValue = (event: MouseEvent) => {
		event.preventDefault();
		setValue('slug', generateSlug(getValues('name')));
	};

	return (
		<>
			<Meta title="Edit genre" />
			<AdminNav />
			<Heading title="Edit genre" />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={styles.fields}>
							<Field
								{...register('name', {
									required: 'Name is required',
								})}
								placeholder="Name"
								error={errors.name}
								style={{ width: '31%' }}
							/>
							<div style={{ width: '31%' }}>
								<SlugField
									register={register}
									generate={generateSlugValue}
									error={errors.slug}
								/>
							</div>
							<Field
								{...register('icon', {
									required: 'Icon is required',
								})}
								placeholder="Icon"
								error={errors.icon}
								style={{ width: '31%' }}
							/>
						</div>

						<Controller
							control={control}
							name="description"
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<EditorDynamic
									onChange={onChange}
									value={value}
									placeholder="Description"
									error={error}
								/>
							)}
							rules={{
								validate: {
									required: (value) =>
										(value && stripHtml(value).result.length > 0) ||
										'Description required',
								},
							}}
						/>

						<Button>Update</Button>
					</>
				)}
			</form>
		</>
	);
};
