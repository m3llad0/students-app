import ChangeName from './changeName'
import ChangeDate from './changeDate';
import GradeToLetter from './gradeToLetter';
import { useState } from 'react';
import Papa from 'papaparse'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // State to store parsed data
  const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
      },
    });
  };

  return (
    <div className='container'>
      {/* File Uploader */}
      <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
      />
      <br />
      <br />
      {/* Table */}
      <table className='table' data-testid = 'initial-table'>
        <thead>
          <tr>
            {tableRows.map((rows, index) => {
              return <th key={index}>{rows}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => {
            return (
              <tr key={index}>
                {value.map((val, i) => {
                  return <td key={i}>{val}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <table className='table' data-testid = 'changed-table'>
        <thead>
          <tr>
            {tableRows.map((rows, indx) => {
              return <th key={indx}>{rows}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => {
            return (
              <tr key={index}>
                {value.map((val, j) => {
                  
                  let newValue = val
                  if(j == 1)
                  {
                    newValue = ChangeName(val)
                  }
                  else if(j == 2)
                  {
                    newValue = val + '@tec.mx'
                  }
                  else if(j == 3)
                  {
                    newValue = ChangeDate(val)
                  }
                  else if(j == 4)
                  {
                    newValue = GradeToLetter(val)
                  }
                  return <td key={j}>{newValue}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
