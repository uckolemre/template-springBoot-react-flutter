import React, {useState} from 'react';
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import {makeStyles} from "@material-ui/styles";
import TextField from "@material-ui/core/TextField/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {FavoriteBorder} from "@material-ui/icons";
import {post} from "../utils/rest";


const Product = (props) => {
    const [open, setOpen] = useState(false);
    const [editName, setEditName] = useState("");
    const [editId, seteditId] = useState("");
    const [editPrice, seteditPrice] = useState("");
    const [editDescription, seteditDescription] = useState("");
    const [editAvailble, seteditAvailble] = useState("");
    console.log(props)
    const onClickEdit = (index) =>{
        setOpen(true)
        const selected = props.productList[0];
        setEditName(selected.name);
        seteditId(selected.id);
        seteditPrice(selected.price);
        seteditDescription(selected.description);
        seteditAvailble(selected.available);
    }
    const onClickClose = () =>{
        setOpen(false)
    }
    const onClickSaveChange = (index) =>{
        setOpen(true)
        const product={
            id: editId,
            name: editName,
            price: editPrice,
            description: editDescription,
            available: editAvailble,
        };

        post("/save-product",product).then(res=> window.location.reload())
    };

    return (
        <div>
            <div className="modal" tabindex="-1" role="dialog" style={{display:open? "block":"none", zIndex: "999999"}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Product Edit</h5>
                        </div>
                        <div className="modal-body">
                            <div className="row  d-flex justify-content-center form-group ">
                                <TextField variant="outlined" margin="normal" required fullWidth id="product-name" label="name" name="name"
                                           value={editName} autoFocus onChange={(e)=>setEditName(e.target.value)}
                                />
                            </div>
                            <div className="row  d-flex justify-content-center form-group ">
                                <TextField variant="outlined" margin="normal" required fullWidth id="product-price"
                                           label="Price" name="Price" type="number"
                                           value={editPrice} autoFocus onChange={(e)=>seteditPrice(e.target.value)}
                                />
                            </div>
                            <div className="row ">

                                <FormControlLabel
                                    control={<Checkbox checked={editAvailble} name={"product-available"} color="primary"
                                                       onChange={()=>seteditAvailble(!editAvailble)}
                                    />}
                                    label="Available"
                                    labelPlacement="start"
                                />
                            </div>
                            <div className="row  d-flex justify-content-center form-group ">
                                <TextField variant="outlined" margin="normal" required fullWidth id="product-desc" label="Description" name="Description"
                                           value={editDescription} autoFocus onChange={(e)=>seteditDescription(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary"
                                    onClick={onClickSaveChange}
                            >Save changes</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal"
                                    onClick={onClickClose}
                            >Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Avaiable</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.productList.map((product, index) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><Checkbox checked={product.available} name={product.name} color="primary"/></td>
                            <td>
                                <Button type="button" variant="contained" color="primary"
                                        onClick={()=>onClickEdit(index)}
                                >Edit</Button></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

Product.propTypes = {};
Product.defaultProps = {};

export default Product;
