import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toastify = () => {
	return (
		<ToastContainer
			position="top-right"
			newestOnTop={false}
			pauseOnHover
			closeOnClick
			autoClose={5000}
			draggable
			theme="colored"
		/>
	);
};
