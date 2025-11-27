import React, { forwardRef } from "react";

const Input = forwardRef(({ labelText, textArea, idText, ...props }, ref) => {
  const clasess =
    "w-full p-1 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label
        className="text-sm font-bold uppercase text-stone-500"
        htmlFor={idText}
      >
        {labelText}
      </label>
      {textArea ? (
        <textarea ref={ref} className={clasess} {...props} id={idText} />
      ) : (
        <input ref={ref} className={clasess} {...props} id={idText} />
      )}
    </p>
  );
});

export default Input;
