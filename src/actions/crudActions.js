import { LIST_ITEMS, ADD_ITEM, UPDATE_ITEM, DELETE_ITEMS, DELETE_ITEM, CHECKED_ITEM, ALL_CHECKED } from "../actions/types";

export const getItems = (data) => {
  return {
    type: LIST_ITEMS,
    payload: data
  };
};
export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};
export const updateItem = item => {
  return {
    type: UPDATE_ITEM,
    payload: item
  };
};
export const deleteItem = item => {
  return {
    type: DELETE_ITEM,
    payload: item
  }
}
export const checkItem = (itemName, checked) => {
  let obj = {
    itemName,
    checked
  }
  return {
    type: CHECKED_ITEM,
    payload: obj
  }
}
export const allChecked = (checkedItems) => {
  return {
    type: ALL_CHECKED,
    payload: checkedItems
  }
}
export const deleteItems = () => {
  return {
    type: DELETE_ITEMS
  }
}