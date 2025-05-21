const Rendering = () => {
    const number = 78;
    return (
    
            number > 0 ? <h1>number is positive </h1> : number < 0 ? <h1>number is niegative</h1>: <h1>Number is 0</h1>
    
    );
};

export default Rendering;