import './App.css'
import ScaleInfo from './ScaleInfo/ScaleInfo'
import ScaleMenu from './ScaleMenu/ScaleMenu'
import useScale from './useScale'
/*
    Hi, 2023 Josh here. This code is really, **really** old. There's a
    lot of amateur mistakes here. Please don't judge too harshly.
*/
function App() {
	const scaleState = useScale()
	// console.log(scaleState)
	// eslint-disable-next-line
	return (
		<div className='app'>
			<h1>MusiqTools</h1>
			<p className='tagline'>
				A straightforward app designed to make producing music less of a headache.
			</p>
			<div className='old-note'>
				<h4>!!! IMPORTANT NOTE !!!</h4>
				<p>
					Hi, 2023 Josh here. This code is really, <strong>really</strong> old. There's a
					lot of amateur mistakes here. Please don't judge too harshly.
				</p>
				<p>
					You can find my (superior) reiteration of this idea{' '}
					<a href='https://guitar-visualizer.vercel.app/'>here</a>.
				</p>
			</div>
			<ScaleMenu scaleState={scaleState} />
			<ScaleInfo scaleState={scaleState} />
		</div>
	)
}

export default App
