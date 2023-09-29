const Dropdown = ({icon,dropdownEnd,children}) => {
  return (
    <div className={`mx-2 dropdown ${dropdownEnd?"dropdown-end":""}`}>
      <label tabIndex={0} className="btn btn-ghost btn-circle text-white">
      {icon}
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {children?children:<li><p>Nothing is here ... </p></li>}
      </ul>
    </div>
  )
}

export default Dropdown