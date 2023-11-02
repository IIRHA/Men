import { useEffect, useState } from 'react'
//componentsc
import SubData from '../components/subData'
import AddData from '../components/newData'

const Home = () => {
    const [data, setdata] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/data/')
            const json = await response.json()

            if (response.ok) {
                setdata(json)
            }
        }

        fetchData()
    }, [])

    return (
        <div className="home">
            <div className="data">
                {data && data.map((data) => (

                    <SubData key={data._id} data={data} />

                )) }
            </div>
            <AddData/>
        </div>
    )
}

export default Home