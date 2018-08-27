import React from "react";
import PropTypes from 'prop-types';

const Table = ({ headings, rows }) => {
  return (
    <div className="table">
        <table className="table__table">
            <thead>
                <tr className="table__row">
                    { headings.map((heading) => (
                        <th className="table__heading" key={heading}>
                            <h2>{heading}</h2>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="table__body">
                { rows.map((row, idx) => {
                    let rowClass = 'table__row';
                    if (['info', 'success', 'warning', 'error'].indexOf(row.highlight) !== -1) {
                        rowClass += ` table__row--${row.highlight}`;
                    }
                    return (
                        <tr className={rowClass} key={idx}>
                            {row.data.map((data, idx) => (
                                <td className="table__data" key={idx}>{data}</td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
  );
};

Table.propTypes = {
  rows: PropTypes.array.isRequired,
  headings: PropTypes.array.isRequired,
};

export default Table;

