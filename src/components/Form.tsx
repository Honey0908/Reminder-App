import React from 'react';

const Form: React.FC<FormProps> = ({ formFieldData, handleChange, handleSubmit, formData }) => {

    return (
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
            {formFieldData.fields.map((field: FormField) => (
                <React.Fragment key={field.name}>
                    {field.type === 'textarea' ? (
                        <textarea onChange={handleChange} value={formData[field.name as keyof typeof formData] as string} rows={Number(field?.rows)} required className=" shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none" name={field.name} id={field.name} placeholder={field.placeholder} />
                    ) : (
                        <input onChange={handleChange} value={formData[field.name as keyof typeof formData] as string} required className=" shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none" name={field.name} id={field.name} type={field.type} placeholder={field.placeholder} />
                    )}
                </React.Fragment>
            ))}
            <button className="bg-danger hover:bg-red-700 text-white font-bold py-1.5 px-4 rounded focus:outline-none" type="submit">
                {formFieldData.title}
            </button>
        </form>
    );
};

export default Form;
