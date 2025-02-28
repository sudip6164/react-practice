import UserRow from "./UserRow";
import UserTableHeader from "./UserTableHeader";
import { useNavigate } from "react-router";

const Users = (props) => {
  const navigate=useNavigate();
  const users=[
    {id:1,name:'John',age:25,email:"jhon@a.com"},
    {id:2,name:'Jane',age:30,email:"jane@a.com"},
    {id:3,name:'Bob',age:26,email:"bob@a.com"},
    {id:4,name:'Sam',age:29,email:"sam@a.com"},
    {id:5,name:'Will',age:36,email:"will@a.com"},
  ]
  const handleUserAdd = () => {
    navigate('/admin/user/add')
  }
  return (
    <div className="v-col users">
      <button className="btn" onClick={handleUserAdd}>Create</button>
      <h1>{props.title}</h1>
      <table id="users">
        <thead>
          <UserTableHeader></UserTableHeader>
        </thead>
        <tbody>
          {/* {users.map((item) => (
            <UserRow
            id={item.id}
            name={item.name}
            age={item.age}
            email={item.email}/>
          ))} */}
          {users.map((user) => <UserRow users={user}/>)}
        </tbody>
      </table>
    </div>
  );
}
export default Users;