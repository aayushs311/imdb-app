import axios from "axios";

const API_READ_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGVhOWMxYTcyZWNiY2RiMzRkNjNjMTY3YmMzMjZmZiIsIm5iZiI6MTcyODUwODYwNi4wNjQ2MSwic3ViIjoiNjcwNmYwZjczYWJlZGMxZDNiNmEyNzkzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.E66-M3NujHi8bYYzMRof-zPWtYgT2Oo-fKKj0MNFeD4";

export const TMDBInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`
  }
});