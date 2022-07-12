import { EditorProps } from 'draft-js';
import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface FieldProps {
	placeholder: string;
	error?: FieldError;
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> & FieldProps;

export type EditorPropsField = EditorProps & FieldProps;
export interface TextEditor extends Omit<EditorPropsField, 'editorState'> {
	onChange: (...event: any[]) => void;
	value: string;
}
