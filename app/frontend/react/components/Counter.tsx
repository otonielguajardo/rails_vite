import { useState } from 'react'

function Counter() {

	const [count, setCount] = useState(0)

	return (
		<fieldset>
			<legend>React Button Component</legend>
			<button type="button" onClick={() => setCount((count) => count + 1)}>
				React button: {count}
			</button>
		</fieldset>
	)
}

export default Counter
