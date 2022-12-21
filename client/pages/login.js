import Header from "../components/Header";
import { Input } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  MailOutlined,
  LockOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("ryan@gmail.com");
  const [password, setPassword] = useState("rrrrrr");
  const [loading, setLoading] = useState(false);

  // state
  const {
    state: { user },
    dispatch,
  } = useContext(Context);
  // const { user } = state;

  // router
  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      });
      // console.log("LOGIN RESPONSE", data);
      dispatch({
        type: "LOGIN",
        payload: data,
      });
      // save in local storage
      window.localStorage.setItem("user", JSON.stringify(data));
      // redirect
      router.push("/");
      // setLoading(false);
    } catch (err) {
      toast(err.response.data);
      setLoading(false);
    }
  };

  return (
    <>
      <Header name="Login" />
      <form class="col-md-4 container offset-md-4 pb-2 text-center" onSubmit={handleSubmit} >
        <Input
          prefix={<MailOutlined />}
          className="mb-4 p-2 rounded"
          placeholder="Email"
          allowClear
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input.Password
          prefix={<LockOutlined />}
          className="mb-4 p-2 rounded"
          placeholder="Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          class="btn btn-primary rounded col-12"
          disabled={ !password || !email || loading}
        >
          {loading ? <SyncOutlined spin /> : "Submit"}
        </button>
        <br/>
        <br/>
        
        <div>
          Not yet registered? <Link href="/register">SIGN UP</Link>
        </div>
      </form>
    </>
  );
};

export default Login;
