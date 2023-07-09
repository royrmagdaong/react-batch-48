// function Cat(props){ props.age, props.name
function Cat({ name, age}){
    return(
        <div>
            <h1 className="text-xl text-red-500">
                Name: { name }
            </h1>
            <h1 className="text-xl text-red-500">
                Age: { age }
            </h1>
        </div>
    )
}

export default Cat