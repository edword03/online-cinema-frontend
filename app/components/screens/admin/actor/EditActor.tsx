import { MouseEvent } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Meta } from '@/components/SEO/Meta';
import { useEditActor } from '@/components/screens/admin/actor/useEditActor';
import styles from '@/components/shared/admin/adminForm.module.scss';

import { Heading } from '@/ui/Heading/Heading';
import { SkeletonLoader } from '@/ui/SkeletonLoader';
import { AdminNav } from '@/ui/admin-nav/AdminNav';
import { Button } from '@/ui/form-field/Button';
import { Field } from '@/ui/form-field/Field';
import { SlugField } from '@/ui/form-field/SlugField';
import { UploadField } from '@/ui/form-field/UploadField';

import { generateSlug } from '@/utils/string/generateSlug';

import { EditActorInput } from '@/types/edit-types/edit-actor';

export const EditActor = () => {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
		getValues,
		control,
	} = useForm<EditActorInput>({
		mode: 'onSubmit',
	});

	const { isLoading, onSubmit } = useEditActor(setValue);

	const generateSlugValue = (event: MouseEvent) => {
		event.preventDefault();
		setValue('slug', generateSlug(getValues('name')));
	};

	return (
		<>
			<Meta title="Edit actor" />
			<AdminNav />
			<Heading title="Edit actor" />
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={styles.fields}>
							<Field
								{...register('name', {
									required: 'Name is required!',
								})}
								placeholder="Name"
								error={errors.name}
							/>
							<SlugField register={register} generate={generateSlugValue} />
							<Controller
								control={control}
								defaultValue=""
								name="photo"
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										placeholder="Photo"
										error={error}
										folder="actors"
									/>
								)}
								rules={{
									required: 'Photo is required!',
								}}
							/>
						</div>
						<Button>Update</Button>
					</>
				)}
			</form>
		</>
	);
};
