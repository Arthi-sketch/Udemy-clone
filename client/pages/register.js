import Header from "../components/Header";
import { Input } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
  MailOutlined,
  LockOutlined,
  // SyncOutlined,
} from "@ant-design/icons";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";

const Register = () => {
  const [name, setName] = useState("Ryan");
  const [email, setEmail] = useState("ryan@gmail.com");
  const [password, setPassword] = useState("rrrrrr");
  const [loading, setLoading] = useState(false);

  const {
    state: { user },
  } = useContext(Context);

  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/register`, {
        name,
        email,
        password,
      });
      // console.log("REGISTER RESPONSE", data);
      toast("Registration successful. Please login.");
      setLoading(false);
    } catch (err) {
      toast(err.response.data);
      setLoading(false);
    }
  };

  return (
    <>
      <Header name="Register" />
      <form class="col-md-4 container offset-md-4 pb-2 text-center" onSubmit={handleSubmit} >
        <Input
          prefix={<UserOutlined />}
          className="mb-4 p-2 rounded"
          placeholder="Username"
          allowClear
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          disabled={!name || !password || !email || loading}
        >
          {loading ? <SyncOutlined spin /> : "Submit"}
        </button>
        <br/>
        <br/>
        
        <div>
          Already registered? <Link href="/login">Login</Link>
        </div>
        
      </form>
    </>
  );
};

export default Register;
