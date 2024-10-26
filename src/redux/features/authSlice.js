// // src/store/authSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'

// // Thunk for handling login
// export const loginUser = createAsyncThunk(
//   'auth/loginUser',
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', {
//         email,
//         password,
//       })
//       // Store token in local storage
//       localStorage.setItem('token', response.data.token)
//       return response.data
//     } catch (error) {
//       return rejectWithValue(error.response.data.message || 'Login failed')
//     }
//   }
// )

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     token: localStorage.getItem('token') || null,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     logout: (state) => {
//       state.user = null
//       state.token = null
//       localStorage.removeItem('token')
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true
//         state.error = null
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false
//         state.user = action.payload.user
//         state.token = action.payload.token
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false
//         state.error = action.payload
//       })
//   },
// })

// export const { logout } = authSlice.actions
// export default authSlice.reducer
