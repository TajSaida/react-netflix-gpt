import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import {  addTopRatedMoviesList } from '../utils/movieSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMoviesList =async ()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1",
    API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMoviesList(json?.results))
    }
    
    useEffect(()=>{
      getPopularMoviesList()
    },[])
  
}

export default usePopularMovies