import React, { forwardRef } from "react";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { API_URL, createPolicy, updatePolicy, deletePolicy } from "../services";

import axios from "axios";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const PoliciesPage = (props) => {
  return (
    <div>
      <MaterialTable
        title="Remote Data Preview"
        icons={tableIcons}
        columns={[
          { title: "Id", field: "id", editable: "never" },
          { title: "Client Id", field: "clientId" },
          { title: "Type", field: "type" },
          { title: "Price", field: "price" },
        ]}
        editable={{
          onRowDelete: (oldData) => {
            return deletePolicy(oldData.id);
          },
          onRowUpdate: (newData, oldData) => {
            let localData = { ...newData };
            delete localData["tableData"];
            return updatePolicy(oldData.id, localData);
          },
          onRowAdd: (newData) => {
            return createPolicy(newData);
          },
        }}
        options={{
          paging: false,
          search: false,
          sorting: false,
        }}
        data={(query) =>
          new Promise((resolve, reject) => {
            let url = `${API_URL}api/policies`;
            fetch(url)
              .then((response) => response.json())
              .then((result) => {
                resolve({
                  data: result,
                });
              });
          })
        }
      />
    </div>
  );
};

export default PoliciesPage;
