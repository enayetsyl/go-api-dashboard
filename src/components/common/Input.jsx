const Input = ({ label, placeholder, className, type, value, onChange} ) => {
  
  return (
    <div className='flex flex-col gap-2 w-full'>
      <label htmlFor="" className='text-base text-white '>{label}</label>
      <input type={type} placeholder={placeholder}
      required
      value={value}
      onChange={onChange}
      className={`rounded-lg p-2.5 bg-white text-sm text-black focus:outline-none ${className}`}
      
      />
    </div>
  )
}

export default Input