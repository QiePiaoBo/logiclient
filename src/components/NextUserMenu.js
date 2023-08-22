import React, { useContext } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Link} from "@nextui-org/react";
import GlobalContext from "../resources/GlobalContext";

function  NextUserMenu(props) {

    const {setUserName} = useContext(GlobalContext);

    const dealingWithKey = (key) => {
        if(key === 'userinfo'){
            alert("Ok, let's go to user info page.")
        }else if(key === 'changepwd'){
            alert("Ok, let's go to change your password.")
        }else if(key === 'logout'){
            setUserName('');
        }
    }
    
    return (
        <Dropdown>
          <DropdownTrigger>
            <Link size="lg">
              {props.name}
            </Link>
          </DropdownTrigger>
          <DropdownMenu 
            aria-label="Action event example" 
            onAction={(key) => dealingWithKey(key)}
          >
            <DropdownItem key="userinfo">ManageInfo</DropdownItem>
            <DropdownItem key="changepwd">ChangePassword</DropdownItem>
            <DropdownItem key="logout"className="text-danger" color="danger">Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
}


export default NextUserMenu;
