function Login({setIsLoggedIn}){
    return (
        <div className="p-10">
            <h1 classNAme="text-3xl mb-5">Login Page</h1>
            <button onClick={()=>setIsLoggedIn(true)}
                className="bg-blue-500 text-white px-4 py-2">
                Login
            </button>
        </div>
    );
}
export default Login;