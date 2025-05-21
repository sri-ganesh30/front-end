const Welcome = ({ name }) =>{
    return(
        <>
            <h1>Welcome {name}</h1>
        </>
    );
}

function NestedComponent () {
    return (
        <>
            <h1>I'm nested</h1>
            <Welcome name={"Ram"}/>
            <Welcome name={"Yogesh"}/>
            <Welcome name={"karthi"}/>

        </>
    )
}
export default NestedComponent