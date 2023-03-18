const ControlPane = ({
  title,
  options,
  currentOption,
  handleSelectOption,
}) => {
  return (
    <div className="mb-4 rounded-md bg-blue-50 p-4">
      <h1 className="mb-3 flex items-baseline gap-4">
        <span className="text-2xl font-bold">{title}</span>
        <span className="text-xs">{options.length} options</span>
      </h1>
      <div className="flex gap-2">
        {options.map(({ id, label, color, children }) => (
          <button
            key={id}
            onClick={() => handleSelectOption(id)}
            label={label}
            color={color}
            className={`rounded border py-2 px-3
              ${
                currentOption === id
                  ? 'bg-blue-900 text-blue-50'
                  : ''
              }`}
          >
            {children}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ControlPane
