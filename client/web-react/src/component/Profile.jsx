import React, {useState, useEffect}from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import {post} from "../utils/rest";

const Profile = (props) => {

    const [email, setEmail] = useState(props.user.email);
    const [fullname, setFullname] = useState(props.user.fullname);
    const [title, setTitle] = useState(props.user.title);

    useEffect(() => {
        setEmail(props.user.email);
        setFullname(props.user.fullname);
        setTitle(props.user.title)
    }, [props.user])

    const onClickEdit = () =>{
        const user={
            email,fullname,title,id:props.user.id
        }
        post("/save-user",user).then(()=>{
            localStorage.clear();
            window.location.reload();
        })
    };
    return (
        <div className="container ">
            <div className="row  d-flex justify-content-center form-group ">
                <TextField variant="outlined" margin="normal" required fullWidth id="fullname" label="fullname"
                           name="fullname" value={fullname} autoFocus onChange={(e)=>setFullname(e.target.value)}
                />
            </div>
            <div className="row  d-flex justify-content-center form-group ">
                <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email" name="Email"
                    value={email} autoFocus onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className="row  d-flex justify-content-center  form-group ">
                <TextField variant="outlined" margin="normal" required fullWidth id="title" label="Title" name="Title"
                    value={title} autoFocus onChange={(e)=>setTitle(e.target.value)}
                />
            </div>
            <div className="row  d-flex justify-content-center form-group ">
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={onClickEdit}
                >
                    Edit
                </Button>
            </div>
        </div>
    );
}

Profile.propTypes = {};
Profile.defaultProps = {};

export default Profile;
