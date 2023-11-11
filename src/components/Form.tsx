import { useForm } from "react-hook-form";

import { useAuth } from "../hooks";

interface FormProps {
  name: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormProps>();
  const { handleLogin } = useAuth();

  const onLogin = (data: FormProps) => {
    console.log(data);
    const response = handleLogin({
      email: "",
      password: "",
    });
    console.log(response);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onLogin)}>
        <div>
          <input
            className="border border-gray-600 text-sm p-2 outline-none rounded-sm"
            type="text"
            {...register("name")}
            placeholder="Nombre"
          />
          {errors.name && <span>Este campo es requerido</span>}
        </div>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-300 ease-in-out"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
