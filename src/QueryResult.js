import React from 'react';
import './styles.css';

function QueryResult({ result }) {
  try {
    const data = JSON.parse(result);

    if (!data || !data.results || !data.results.bindings || data.results.bindings.length === 0) {
      return <div>No results found</div>;
    }

    const headers = data.head.vars;
    const rows = data.results.bindings;

    return (
      <div className='result-container'>
        <h2 className='result-header'>Query Result</h2>
        <table className='result-table'>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, index) => {
                  // Extract the last part of the URL
                  const urlParts = row[header].value.split('/');
                  const oscaraward = urlParts[urlParts.length - 1];
                  return <td key={index}>{oscaraward}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } catch (error) {
    return <div>Error: Unable to parse query result</div>;
  }
}

export default QueryResult;
