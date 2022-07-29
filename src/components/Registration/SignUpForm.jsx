import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function SignUpForm({ setAuthUser }) {
  const navigate = useNavigate();
  const [input, setInput] = useState({ username: '', password: '', repeat: '' });
  const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const submitHandler = (e) => {
    e.preventDefault();
    if (input.password !== '' && input.username !== '' && input.repeat === input.password) {
      axios.post('/api/signup', input)
        .then((res) => {
          setAuthUser(res.data);
          navigate('/');
        });
    }
  };
  return (
    <div className="col">
      <div className="row w-50 d-flex p-2 d-flex justify-content-centers mx-auto">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label"
            >
              Имя пользователя
            </label>
            <input
              value={input.username}
              onChange={changeHandler}
              type="text"
              name="username"
              className="form-control"
              id="InputUserName"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="Password1"
              className="form-label"
            >
              Пароль
            </label>
            <input
              value={input.password}
              onChange={changeHandler}
              type="password"
              name="password"
              className="form-control"
              id="Password1"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="InputPassword2"
              className="form-label"
            >
              Повторите пароль
            </label>
            <input
              value={input.repeat}
              onChange={changeHandler}
              type="password"
              name="repeat"
              className="form-control"
              id="Password2"
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#449532' }}>Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
}
