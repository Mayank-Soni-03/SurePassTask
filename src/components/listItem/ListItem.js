import React from "react";
import { Table } from "react-bootstrap";
import { FaEdit, FaBook } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import './listItem.scss';

function ListItem({ lists, onHandleEdit, onDelete, onChecked,
  AnyChecked, handleAllChecked, deleteAll }) {

  const isCheckedMoreThanOne = lists.filter(list => list.completed)?.length <= 1;

  return (
    <>
      <Table responsive className="table"
        style={{ display: lists.length < 1 && 'none' }}>
        <thead>
          <tr>
            <th><FaBook /></th>
            <th>ID</th>
            <th>Name</th>
            <th>Contact Number</th>
            <th>email</th>
            <th>Age</th>
            <th>DOB</th>
            <th>Image</th>
            <th>
              <span className="action">Action</span>
              <span className={AnyChecked ? 'check-all action-border' : 'check-all'}>
                {AnyChecked && <span>All</span>}
                <input type="checkbox" onChange={handleAllChecked}
                  checked={AnyChecked} />
                {AnyChecked && <MdDelete className="delete" onClick={deleteAll}
                alt="delete"/>}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {lists &&
            lists.map((list) => (
              <tr key={list.id} className={list.completed ? 'selected' : ''}>
                <td><FaBook /></td>
                <td>{list.id}</td>
                <td>{list.firstName} {list.lastName}</td>
                <td>{list.contactNumber}</td>
                <td>{list.email}</td>
                <td>{list.age}</td>
                <td>{list.dob}</td>
                <td><img src={list.imageUrl} /></td>
                <td className="table_edit">
                  <div>
                    {isCheckedMoreThanOne && <FaEdit onClick={() => onHandleEdit(list)} />}
                    <input key={list.id} onChange={onChecked} type="checkbox" checked={list.completed} value={list.title} />
                    {list.completed && <MdDelete className="delete" onClick={() => onDelete(list)} alt="delete"/>}
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div className="table_no-content">
        {lists.length < 1 &&
          'All Items are deleted'
        }
      </div>
    </>
  );
}

export default ListItem;