const Input = ({ type = "text", placeholder, className, ...props }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        {...props}
      />
    );
  };
  
  export default Input;
  