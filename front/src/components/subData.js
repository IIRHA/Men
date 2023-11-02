const SubData = ({ data }) => {
    return <div className='sub-data'>
        <h4><strong>Name: </strong>{data.name}</h4>
        <p><strong>Age: </strong>{data.age}</p>
        <p><strong>Date of Birth: </strong>{data.DOB}</p>
        <p><strong>Date Added: </strong>{data.createdAt}</p>
    </div>
}

export default SubData