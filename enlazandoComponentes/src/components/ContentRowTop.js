import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import Chart from './Chart';

import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import { Route, Routes } from 'react-router-dom';
import image from '../assets/images/404.jpg';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					
							
					<Routes>
						<Route path="/" element={<ContentRowMovies />} />
						<Route path="/lastmovie" element={<LastMovieInDb />} />
						<Route path="/genres" element={<GenresInDb />} />
						<Route path="/movies" element={<Chart />} />
						<Route path="*" element={
							<div>
								<img className="w-100" src={image} alt="error 404"/>
							</div>
						} />
            		</Routes>					
	
				</div>
				{/*<!--End Content Row Top-->*/}  

        </React.Fragment>
    )

}
export default ContentRowTop;