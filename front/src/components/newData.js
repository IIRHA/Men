import {useState} from 'react'

const AddData = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [DOB, setDOB] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = { name, age, DOB }
        const response = await fetch('/api/data', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setName('')
            setAge('')
            setDOB('')
            setError(null)
            console.log('new added')
        }
    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add Data</h3>

            <label>Enter Name:</label>
            <input
                type='text'
                onChange={(e) => setName(e.target.value)}
                value={name}
            />

            <label>Enter Age (Number):</label>
            <input
                type='number'
                onChange={(e) => setAge(e.target.value)}
                value={age}
            />

            <label>Enter Date of Birth (DD/MM/YYY)</label>
            <input
                type='text'
                onChange={(e) => setDOB(e.target.value)}
                value={DOB}
            />

            <button>Add Data</button>
            {error && <div className='error-msg'>{error}</div>}
        </form>
    )
}

export default AddData
