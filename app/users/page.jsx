import React from 'react';

async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  return res.json();
}

export default async function Users() {
  const users = await fetchUsers();

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: 'white' }}>User List (SSR)</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {users.map(user => (
          <li
            key={user.id}
            style={{
              backgroundColor: '#f4f4f4',
              borderRadius: '5px',
              padding: '10px',
              margin: '5px 0',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div style={{ fontWeight: 'bold',color: '#555' }}>{user.name}</div>
            <div style={{ color: '#555' }}>{user.email}</div>
            <div style={{ color: '#888' }}>{user.website}</div>
            <div style={{ color: '#777' }}>{user.company.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
