import dynamic from 'next/dynamic';
import { MouseEvent } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Meta } from '@/components/SEO/Meta';
import styles from '@/components/shared/admin/adminForm.module.scss';

import { Heading } from '@/ui/Heading/Heading';
import { SkeletonLoader } from '@/ui/SkeletonLoader';
import { AdminNav } from '@/ui/admin-nav/AdminNav';
import { Button } from '@/ui/form-field/Button';
import { Field } from '@/ui/form-field/Field';
import { SlugField } from '@/ui/form-field/SlugField';
import { UploadField } from '@/ui/form-field/UploadField';

import { generateSlug } from '@/utils/string/generateSlug';

import { MovieEditInput } from '@/types/edit-types/edit-movie';

import { useAdminActors } from './useAdminActors';
import { useAdminGenres } from './useAdminGenres';
import { useEditMovie } from './useEditMovie';

const DynamicSelect = dynamic(() => import('@/ui/select'), {
	ssr: false,
});

export const EditMovie = () => {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
		getValues,
		control,
	} = useForm<MovieEditInput>({
		mode: 'onChange',
	});
	const { isLoading, onSubmit } = useEditMovie(setValue);
	const { data: actors, isLoading: isActorsLoading } = useAdminActors();
	const { data: genres, isLoading: isGenresLoading } = useAdminGenres();

	const generateSlugValue = (event: MouseEvent) => {
		event.preventDefault();
		setValue('slug', generateSlug(getValues('title')));
	};
	return (
		<>
			<Meta title="Edit movie" />
			<AdminNav />
			<Heading title="Edit movie" />
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={styles.fields}>
							<Field
								{...register('title', {
									required: 'Title is required!',
								})}
								placeholder="Title"
								error={errors.title}
							/>
							<SlugField register={register} generate={generateSlugValue} />
							<Field
								{...register('parameters.country', {
									required: 'Country is required!',
								})}
								placeholder="Country"
								error={errors.parameters?.country}
								style={{ width: '31%' }}
							/>
							<Field
								{...register('parameters.duration', {
									required: 'Duration is required!',
								})}
								placeholder="Duration (min.)"
								error={errors.parameters?.duration}
								style={{ width: '31%' }}
							/>
							<Field
								{...register('parameters.year', {
									required: 'Year is required!',
								})}
								placeholder="Year"
								error={errors.parameters?.year}
								style={{ width: '31%' }}
							/>

							{/* selects*/}

							<Controller
								name="genres"
								control={control}
								rules={{
									required: 'Please select at least one genre!',
								}}
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										error={error}
										field={field}
										placeholder="Genres"
										options={genres || []}
										isLoading={isGenresLoading}
										isMulti
									/>
								)}
							/>
							<Controller
								name="actors"
								control={control}
								rules={{
									required: 'Please select at least one actor!',
								}}
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										error={error}
										field={field}
										placeholder="Actors"
										options={actors || []}
										isLoading={isActorsLoading}
										isMulti
									/>
								)}
							/>

							{/* uploads */}
							<Controller
								control={control}
								name="poster"
								rules={{
									required: 'Poster is required!',
								}}
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										placeholder="Poster"
										error={error}
										folder="movies"
									/>
								)}
							/>

							<Controller
								control={control}
								name="bigPoster"
								rules={{
									required: 'Big poster is required!',
								}}
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										placeholder="Big poster"
										error={error}
										folder="movies"
									/>
								)}
							/>
							<Controller
								control={control}
								name="videoUrl"
								rules={{
									required: 'Video is required!',
								}}
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										placeholder="Video"
										error={error}
										folder="movies"
										style={{ marginTop: -25 }}
										isNoImage
									/>
								)}
							/>
						</div>
						<Button>Update</Button>
					</>
				)}
			</form>
		</>
	);
};
