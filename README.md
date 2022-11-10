Setup
    npx create-next-app route-tours
    npx next dev    ->  localhost:3000

I.      Add x-icon to _api and public/images/
                https://icons8.com/icons/set/close-x

II.     AllToursPage                    pages\tours\index.js
        getStaticProps -> getTours (props) -> setState (props) -> <ToursList tours={tours} />
        
        i.      create pages/api/tours/index.js                 handler
        ii.     replace `const tours = await getTours()` in getStaticProps with a call to the API 





