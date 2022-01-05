import React, {useState} from "react";
import { useForm, Controller } from "react-hook-form";


const Form = () => {

    const {value, setValue} =  useState("")
    const { control, formState: { errors } } = useForm();
  
    const handleSubmit = () => {
        setValue(value + 1)
        console.log("ÇA MARCHEEE, HANDLESUBMIT")
    }
    return (
        <div className="grid">
            {/* <form action="/" method="post" className="form login">
      <header className="login__header">
        <h3 className="login__title">Login</h3>
      </header>
      <div className="login__body">
        <div className="form__field">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="form__field">
          <input type="password" placeholder="Mot de passe" required />
        </div>
      </div>
      <footer className="login__footer">
        <input type="submit" value="Login" />
        <p><span className="icon icon--info">?</span><a href="#">Mot de passe oublié</a></p>
      </footer>
    </form> */}
            <form onSubmit={handleSubmit}>
                <Controller
                    control={control}
                    name="ReactDatepicker"
                    render={({ field: { onChange, value, ref } }) => (
                        <input
                        
                            onChange={onChange}
                            selected={value}
                        />
                    )}
                />

                <input type="submit" />
            </form>
        </div>
    )
}

export default Form




