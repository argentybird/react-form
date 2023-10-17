import _ from "./Form.module.css";
import { useForm } from "react-hook-form";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={_.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={_.wrap}>
        <label className={_.label} htmlFor="email">
          Email
        </label>
        <input
          {...register("email", {
            required: {
              value: true,
              message: "Поле не должно быть пустым",
            },
            pattern: {
              value: /^.+@.+\..+$/,
              message: "Некорректный email",
            },
          })}
          type="text"
          className={_.input}
          id="email"
        />
        {errors.email && <p className={_.error}>{errors.email.message}</p>}
      </div>

      <div className={_.wrap}>
        <label className={_.label} htmlFor="password">
          Пароль
        </label>
        <input
          {...register("password", {
            required: {
              value: true,
              message: "Поле не должно быть пустым",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/,
              message: "Недопустимый пароль",
            },
          })}
          type="password"
          className={_.input}
          id="password"
        />
        {errors.password && (
          <p className={_.error}>{errors.password.message}</p>
        )}
      </div>

      <div className={_.wrapCheckbox}>
        <input
          {...register("save")}
          type="checkbox"
          className={_.checkbox}
          id="save"
          name="save"
        />
        <label className={_.labelCheckbox} htmlFor="save">
          Запомнить пароль
        </label>
      </div>

      <button className={_.submit} type="submit">
        Войти
      </button>
    </form>
  );
};
