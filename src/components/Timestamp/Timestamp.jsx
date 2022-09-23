const Timestamp = (props) => {

    const { timestamp } = props

    const separateDate = timestamp.slice(0, 10);
    const separateTime = timestamp.slice(11, 19);

    return (
        <>{separateDate}/{separateTime}</>
    )

}

export default Timestamp;