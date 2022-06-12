
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';
export const RegisterPage = () => {


const {name, email, password1,password2, onChange, formData, resetForm, isValidEmail } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: ''
});

const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
}

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input name="name" value={name} type="text" placeholder="Name" onChange={onChange} 
        className={`${ !isValidEmail(email) && "has-error"}`} />
        {name.trim().length<=0 && <span>Este campo es necesario</span>}
        <input name="email" value={email} type="email" placeholder="email" onChange={onChange} 
        className={`${ email.trim().length <= 0 && "has-error"}`}/>
        {!isValidEmail(email )&& <span>Email no valido</span>}
        <input name="password1" value={password1} type="password" placeholder="password" onChange={onChange}
        className={`${ password1.trim().length <= 0 && "has-error"}`}/>
        {password1.trim().length<=0 && <span>Este campo es necesario</span>}
        {password1.trim().length<6 && password1.trim().length > 0 && <span>La password debe ser de mas de 6 caracteres</span>}
        <input name="password2" value={password2} type="password" placeholder="repeat password" onChange={onChange}
        className={`${ password2.trim().length <= 0 && "has-error"}`}/>
        {password2.trim().length<=0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password1 !== password2 && <span>La password no coincide.</span>}
        <button type="submit">create</button>
        <button onClick={resetForm} type="button">reset</button>
        
      </form>
    </div>
  );
};
