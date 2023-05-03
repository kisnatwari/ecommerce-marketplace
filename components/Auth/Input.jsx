export default function Input({ label, id, type, autoComplete = "false", required = "false", placeholder = null }) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {label}
            </label>
            <div className="mt-1">
                <input
                    id={id}
                    name={id}
                    type={type}
                    autoComplete={autoComplete}
                    required={required}
                    placeholder={placeholder}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-slate-700 dark:bg-opacity-50"
                />
            </div>
        </div>
    )
}
