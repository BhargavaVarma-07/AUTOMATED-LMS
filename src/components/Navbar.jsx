function Navbar(props){
    return (
        <div className="bg-blue-800 text-white p-4">
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        
        </div>
    )
}
export default Navbar