const BASE_URL = 'https://connections-api.goit.global/';

const fetchWithToken = async (url, options) => {
  const token = localStorage.getItem('token');
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

// User API
export const signupUser = async (name, email, password) => {
  const response = await fetch(`${BASE_URL}/users/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
  return response.json();
};

export const loginUser = async (email, password) => {
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  // Store token in localStorage
  localStorage.setItem('token', data.token);
  return data;
};

export const logoutUser = async () => {
  await fetch(`${BASE_URL}/users/logout`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  localStorage.removeItem('token');
};

export const getCurrentUser = async () => {
  return fetchWithToken(`${BASE_URL}/users/current`, {
    method: 'GET',
  });
};

// Contacts API
export const getContacts = async () => {
  return fetchWithToken(`${BASE_URL}/contacts`, {
    method: 'GET',
  });
};

export const createContact = async (name, number) => {
  return fetchWithToken(`${BASE_URL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, number }),
  });
};

export const deleteContact = async (contactId) => {
  return fetchWithToken(`${BASE_URL}/contacts/${contactId}`, {
    method: 'DELETE',
  });
};

export const updateContact = async (contactId, name, number) => {
  return fetchWithToken(`${BASE_URL}/contacts/${contactId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, number }),
  });
};