import { render } from 'solid-js/web';

const root = document.getElementById('root');

const App = () => {
	return (
		<div>
			<h1>Hello from Hono + SolidJS</h1>
		</div>
	);
};

render(() => <App />, root!);

