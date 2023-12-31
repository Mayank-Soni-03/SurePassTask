import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { v4 as uuidv4 } from 'uuid';
import ListItem from "../listItem/ListItem";
import {
  getItems, addItem, updateItem,
  deleteItem, checkItem, allChecked,
  deleteItems
} from "../../actions/crudActions";
import Header from "../header/Header";
import { Jumbotron } from "react-bootstrap";
import Update from "../update/Update";
import Create from "../create/Create";
import Spinner from "../loader/Loader";
import './home.scss';
import axios from "axios";

toast.configure({
  autoClose: 8000,
  draggable: false,
  position: toast.POSITION.BOTTOM_RIGHT
});
function Home() {
  const [state, setState] = useState({
    id: "",
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    age: "",
    dob: "",
    imageUrl: ""
  });
  const [status, setStatus] = useState({
    edit: false,
    add: false
  });
  const dispatch = useDispatch();
  const { lists } = useSelector(state => state.lists);
  const list = useSelector(state => state);

  async function getUser() {
    try {
      const response = await axios.get("https://hub.dummyapis.com/employee?noofRecords=200&idStarts=1001");
      console.log('@#@#@# Home Fetch API', response.data);
      dispatch(getItems(response.data));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
getUser();
  }, [dispatch]);

  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const submitCreateForm = e => {
    const { id, firstName, lastName, contactNumber, email, age, dob, imageUrl } = state;

    e.preventDefault();
    let obj = {
      id: id,
      firstName,
      lastName,
      contactNumber,
      email,
      age,
      dob,
      imageUrl
    };
    if (state.id !== '' && state.firstName !== '' && state.lastName !== ''  && state.contactNumber !== '' && state.email !== '' && state.age !== '' && state.dob !== '' && state.imageUrl !== '') {
      setState({ ...state, loading: true });
      dispatch(addItem(obj));
      setTimeout(() => {
        if (!list.loading) {
          setState({ ...state, id: "", firstName: "", lastName: "",  contactNumber: "", email: "", age: "", dob: '', imageUrl: "" });
          toast.success("Added Successfully");
        }
      }, 1000);
    } else {
      toast.warning("Title & Description is Empty");
    }
    setStatus({ ...status, add: false });
  }
  const submitUpdateForm = e => {
    e.preventDefault();

    setState({ ...state, loading: true });
    dispatch(updateItem(state));
    setTimeout(() => {
      if (!list.loading) {
        setState({ ...state, id: "", firstName: "", lastName: "",  contactNumber: "", email: "", age: "", dob: '', imageUrl: "" });
        toast.success("Successfully Updated");
      }
    }, 1000);
    setStatus({ ...status, edit: false });
  };
  const onHandleEdit = (list) => {
    const {id, firstName, lastName, contactNumber, email, age, dob, imageUrl } = list;
    setState({
      ...state,
      id: id,
      firstName: firstName,
      lastName: lastName,
      contactNumber: contactNumber,
      email: email,
      age: age,
      dob: dob,
      imageUrl: imageUrl
    });
    setStatus({ ...status, edit: true });
  };
  const addHandle = () => {
    setStatus({ ...status, add: true });
  }
  const onDelete = (list) => {
    dispatch(deleteItem(list));
    toast.success(`(${list.title}) deleted Successfully`);
  }
  const handleClose = () => {
    setStatus({ ...status, add: false, edit: false });
    setState({ ...state, title: "", description: "", loading: false });
  }

  const onChecked = (e) => {
    dispatch(checkItem(e.target.value, e.target.checked))
  }
  const handleAllChecked = (e) => {
    dispatch(allChecked(e.target.checked));
  }
  const deleteAll = () => {
    dispatch(deleteItems());
  }
  let AnyChecked = lists.some(list => list.completed === true);

  return (
    <div>
      <Header addHandle={addHandle} />
      {state.loading && <Spinner />}
      <div>
        {/* <Container> */}
          <Jumbotron>
            <ListItem lists={lists}
              onHandleEdit={onHandleEdit}
              loading={true}
              onDelete={onDelete}
              deleteAll={deleteAll}
              onChecked={onChecked}
              AnyChecked={AnyChecked}
              handleAllChecked={handleAllChecked}
            />
          </Jumbotron>
        {/* </Container> */}
      </div>
      {status.edit ?
        <Update
          status={status.edit}
          handleClose={handleClose}
          handleChange={handleChange}
          submitUpdateForm={submitUpdateForm}
          state={state}
        /> :
        <Create
          status={status.add}
          handleClose={handleClose}
          handleChange={handleChange}
          submitCreateForm={submitCreateForm}
          state={state}
        />
      }
    </div>
  )}

export default Home;