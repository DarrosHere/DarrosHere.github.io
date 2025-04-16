
function Link({href, text}){
return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className=" text-white rounded-full px-4 py-2 hover:text-blue-600 transition"
    >
        {text}
    </a>
)}

export default Link;