import React from 'react';
import { useRecordContext } from 'react-admin';

const UrlField = ({ source }) => {
  const record = useRecordContext();

  return record ? (
    <a href={`https://${record[source]}`}>
      {record[source]}
    </a>
  ) : null;
};

export default UrlField;