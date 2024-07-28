

function Button() {
    
  return (
    <div>
       <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        style={{fontFamily:'"Raleway", sans-serif'}}
      >
        Login
      </button>
    </div>
  )
}

export default Button;
