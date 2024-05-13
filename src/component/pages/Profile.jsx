import { useContext, useEffect } from "react";
import { UserContext } from "../../context/User";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user , session } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!session) {
        navigate('/login',{replace : true})
    }
  }, [session]);
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}
