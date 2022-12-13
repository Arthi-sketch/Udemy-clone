import Header from "../comps/Header";
import { Input } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
  MailOutlined,
  LockOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";

export default function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setloading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setloading(true);
      const { data } = await axios.post(`http://localhost:8000/api/register`, {
        name,
        email,
        password,
      });

      toast(data);
      // console.log(data);
      setloading(false);
    } 
    catch (err) {   
      toast(err.response.data);
      // console.log(err.response);
      setloading(false);
    }
    setName("");
    setPassword("");
    setEmail("");
  }

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
}
