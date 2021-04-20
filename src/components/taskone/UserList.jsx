import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border: 1px solid #000;
  padding: 20px;
  
  span {
    display: block;
    margin-bottom: 5px;
  }
`;

const UserInfo = styled.div`
  border-right: 1px solid #000;
  text-align: left;
  width: 260px;
`;

const Users = styled.div`
  max-height: 300px;
  overflow: scroll;
  margin-top: 15px;
`;

let timeout = null;

const debounce = (func, wait = 5000) => {
  const cleanup = () => {
    if (timeout) {
      console.log('clear');
      clearTimeout(timeout);
    }
  };

  return () => {
    cleanup();

    timeout = setTimeout(func, wait);
  };
};

const Filter = (props) => {
  const { value, handleFilter } = props;

  return (
    <div>
      Filter:
      <input
        type="text"
        onChange={handleFilter}
        value={value}
        placeholder="Enter username"
        data-testid="filter-input"
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

const UserList = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [value, setValue] = useState('');

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users${filter ? `?username=${encodeURIComponent(filter)}` : ''}`);
      const dataFromResponse = await response.json();
      setData(dataFromResponse);
    } catch (error) {
      console.error(error);
    }
  }, [filter]);

  const handleFilter = (e) => {
    const filteredValue = e.target.value;
    setValue(filteredValue);

    const debounceFn = debounce(() => {
      setFilter(filteredValue);
      fetchData();
    });

    debounceFn();
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (data === null) {
    return (
      <>
        <Filter value={value} handleFilter={handleFilter} />
        <h3>Loading...</h3>
      </>
    );
  }

  if (data.length === 0) {
    return (
      <>
        <Filter value={value} handleFilter={handleFilter} />
        <h3>We can&apos;t find username that match your search criteria.</h3>
      </>
    );
  }

  return (
    <div>
      <Filter value={value} handleFilter={handleFilter} />
      <Users>
        {data.map((user) => (
          <Row key={user.id}>
            <UserInfo>
              <span>{`Name: ${user.name}`}</span>
              <span>{`Username: ${user.username}`}</span>
            </UserInfo>
            <div>
              <div>
                <span>{user.address.street}</span>
                <span>{user.address.suite}</span>
                <span>{user.address.city}</span>
                <span>{user.address.zipcode}</span>
              </div>
              <div>
                <span>{user.email}</span>
                <span>{user.phone}</span>
              </div>
            </div>
          </Row>
        ))}
      </Users>
    </div>
  );
};

export default UserList;
