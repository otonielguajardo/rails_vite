import { useState } from 'react'

function Counter() {

	const [count, setCount] = useState(0)

	return (
		<fieldset>
			<legend>React Counter Component</legend>
			<button type="button" onClick={() => setCount((count) => count + 1)}>
				Counter: {count}
			</button>
		</fieldset>
	)
}

export default Counter
