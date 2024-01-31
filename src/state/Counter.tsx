import { useState } from "react"

interface ICount {
    type: string
    count: number
}

const Counter: React.FC = () => {
    // Initialize the count state as an object
    const [countNumber, setCountNumber] = useState<ICount>({ type: "even", count: 0 })

    const isOdd = countNumber.count % 2 === 1

    // Function to increment the count 
    const handleIncrement = () => {
        setCountNumber({ type: isOdd ? 'odd' : 'even',
        count: countNumber.count + 1})
    }

    // Function to Decrement the count 
    const handleDecrement = () => {
        setCountNumber({ type: isOdd ? 'odd' : 'even',
        count: countNumber.count - 1})
    }


    return (
        <div>
            <h1>Count: {countNumber.count}</h1>
            <p>Type: {countNumber.type}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Counter