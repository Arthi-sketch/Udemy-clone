import Header from "../comps/Header";
import { Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export default function Register() {
  return (
    <>
      <Header name="Register" />
      <div class="col-md-4 container offset-md-4 pb-2">
        <Input.Group>
          <Input className="mb-4 p-2" placeholder="Username" allowClear />
          <Input className="mb-4 p-2" placeholder="Password" />
          <Input.Password
            className="mb-4 p-2"
            placeholder="Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Input.Group>
      </div>
    </>
  );
}
