import React, { useState } from "react";
import Card from "../../UI/Card";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import * as XLSX from "xlsx";
import styles from "./File.module.css";
import Button from "../../UI/Button";

const File = (props) => {
  const [fileData, setFileData] = useState({ columns: [], rows: [] });
  const [pageSize, setPageSize] = useState(5);
  const [filename, setFilename] = useState("");

  const processFile = (e) => {
    const file = e.target.files[0];
    console.log(e.target.files[0].name);
    setFilename(e.target.files[0].name);

    const promise = new Promise((res, rej) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsName = wb.SheetNames[0];
        const ws = wb.Sheets[wsName];

        const data = XLSX.utils.sheet_to_json(ws);

        res(data);
      };
      fileReader.onerror = (error) => {
        rej(error);
      };
    });

    promise.then((d) => {
      setFileData({
        columns: [...Object.keys(d[0])].map((key) => {
          return {
            field: key,
            headerName: key,
            width: key === "id" ? 90 : 110,
          };
        }),
        rows: d,
      });
    });
  };

  const handleClick = () => {
    props.setPage(2);
    setTimeout(() => {
      props.setPage(0);
    }, 2000);
    // fetch('http://localhost:3001/data')
    //   .then(response => response.json())
    //   .then(data => props.setResp(data));
  };

  return (
    <div>
      <Card className={styles["available-files"]}>
        <h1>Available files</h1>
        <div className={styles["btn-container"]}>
          <label className={styles.uploadFile} htmlFor="upload">
            Upload file
            <input id="upload" type={"file"} onChange={processFile} />
          </label>
          <Button className={styles.btn} onClick={handleClick}>
            Run analysis
          </Button>
        </div>
        <ul>
          <li>{filename}</li>
        </ul>
      </Card>
      <Card>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={fileData.rows}
            columns={fileData.columns}
            pageSize={pageSize}
            rowsPerPageOptions={[5, 10, 15]}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </Card>
    </div>
  );
};

export default File;
