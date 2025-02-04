const Card = ({ children, className }) => {
    return (
      <div className={`rounded-xl border border-gray-200 bg-white p-6 shadow-md ${className}`}>
        {children}
      </div>
    );
  };
  
  export default Card;
  