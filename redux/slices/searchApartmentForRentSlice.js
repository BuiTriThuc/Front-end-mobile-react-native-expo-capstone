import {PayloadAction, createAsyncThunk, createSlice, createStore} from "@reduxjs/toolkit";
import ApartmentForRentsApis from "../../apis/apartment/ApartmentForRentsApis";

// export const fetchApartmentForRent = createAsyncThunk("apartment/fetchApartmentForRent", async (data, thunkApi) => {
//     try {
//         return await ApartmentForRentsApis.getAllBySearchParams(data);
//     } catch (error) {
//         thunkApi.dispatch(removeSearchData());
//         return Promise.reject(error);
//     }
// });
export const fetchApartmentForRent = createAsyncThunk("apartment/fetchApartmentForRent", async (_, thunkApi) => {
    try {
        return await ApartmentForRentsApis.getAll();
    } catch (error) {
        thunkApi.dispatch(removeSearchData());
        return Promise.reject(error);
    }
});

const initialState = {
    loading: true,
    searchParams: {
        locationName: "",
        resortId: null,
        checkIn: null,
        checkOut: null,
        guest: null,
        listOfInRoomAmenity: [],
        listOfPropertyView: [],
        listOfPropertyType: [],
        sortBy: "id",
        sortDirection: "asc",
    },
    data:{},
};

export const searchApartmentForRentSlice = createSlice({
    name: "apartment",
    initialState,
    reducers: {
        setApartmentForRentLoading: (state, action) => {
            state.loading = action.payload;
        },
        setApartmentForRentParams: (state, action) => {
            state.searchParams = action.payload;
        },
        fetchApartments: (state, action) => {
            state.data = action.payload;
        },
        removeSearchParams: (state) => {
            state.searchParams = {
                ...initialState.searchParams,
            };
        },
        removeSearchData: (state) => {
            state.data = {
                ...initialState.data,
            };
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(fetchApartmentForRent.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchApartmentForRent.rejected, (state) => {
                state.loading = true;
                state.data = {
                    ...initialState.data,
                };
            });
    },
});

// Action creators are generated for each case reducer function
export const { setApartmentForRentLoading, setApartmentForRentParams,removeSearchParams , removeSearchData, fetchApartments } = searchApartmentForRentSlice.actions;


export default searchApartmentForRentSlice.reducer;