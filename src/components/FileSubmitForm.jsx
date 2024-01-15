import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { ChevronRight } from '@mui/icons-material';
import './AiButton.css'
import { Box } from '@mui/material';

const validationSchema = Yup.object({
	drawingType: Yup.string().required('Please select a drawing type'),
	contactName: Yup.string().required('Contact Name is required'),
	contactEmail: Yup.string().email('Invalid email address').required('Email is required'),
	contactPhone: Yup.string().matches(/^\d*$/, 'Invalid phone number').optional(),
	additionalNotes: Yup.string().optional(),
});

const initialValues = {
	drawingType: '',
	contactName: '',
	contactEmail: '',
	contactPhone: '',
	additionalNotes: '',
};

function FileDetailsSubmitForm({ submittedFiles }) {
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
      console.log('Form Data:', values);
      console.log('Dropped Files:', submittedFiles);
		},
	});

	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<FormControl fullWidth margin="normal">
					<InputLabel id="drawingType-label">Drawing Type</InputLabel>
					<Select
						labelId="drawingType-label"
						id="drawingType"
						name="drawingType"
						label="Drawing Type"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.drawingType}
						error={formik.touched.drawingType && Boolean(formik.errors.drawingType)}
					>
						<MenuItem value="Construction drawings">Construction drawings</MenuItem>
						<MenuItem value="Steel detailing drawings">Steel detailing drawings</MenuItem>
						<MenuItem value="Shop drawings">Shop drawings</MenuItem>
					</Select>
				</FormControl>

				<TextField
					fullWidth
					id="contactName"
					name="contactName"
					label="Contact Name"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.contactName}
					error={formik.touched.contactName && Boolean(formik.errors.contactName)}
					helperText={formik.touched.contactName && formik.errors.contactName}
					margin="normal"
				/>

				<TextField
					fullWidth
					id="contactEmail"
					name="contactEmail"
					label="Contact Email"
					type="email"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.contactEmail}
					error={formik.touched.contactEmail && Boolean(formik.errors.contactEmail)}
					helperText={formik.touched.contactEmail && formik.errors.contactEmail}
					margin="normal"
				/>

				<TextField
					fullWidth
					id="contactPhone"
					name="contactPhone"
					label="Contact Phone (Optional)"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.contactPhone}
					error={formik.touched.contactPhone && Boolean(formik.errors.contactPhone)}
					helperText={formik.touched.contactPhone && formik.errors.contactPhone}
					margin="normal"
				/>

				<TextField
					fullWidth
					multiline
					rows={4}
					id="additionalNotes"
					name="additionalNotes"
					aria-label="Additional Notes"
					placeholder="Additional Notes (Optional)"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.additionalNotes}
					sx={{ mt: 2 }}
				/>

				<Box className="button-container">
					<Button className="try-ai-button" type="submit" variant="contained" style={{ marginTop: '16px', fontSize: '1.2em' }} endIcon={<ChevronRight />}>
						Submit files to A.I.
					</Button>
				</Box>
			</form>
		</>
	);
};

export default FileDetailsSubmitForm;