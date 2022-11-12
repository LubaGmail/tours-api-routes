Setup
    npx create-next-app route-tours
    npx next dev    ->  localhost:3000
        npm run build
        npm start

I.      Add x-icon to _api and public/images/
                https://icons8.com/icons/set/close-x

II.     AllToursPage              pages\tours\index.js
        getStaticProps -> getTours (props) -> setState (props) -> <ToursList tours={tours} />

        IMPORTANT: combines pre-fetching with client-side fetching      5.114
 
        i.      create pages/api/tours/index.js                 handler
        ii.     replace `const tours = await getTours()` in getStaticProps with a call to the API 

III.    SearchForm                  components\tours\search-form.js
        pages\tours\index.js        
            <SearchForm handleSearch={handleSearch} />  
                router.push(`/tours/${year}/${month}`)
                    FilteredToursPage      pages/tours/[...date].js
                         tours = filterTours(nYear, nMonth)

IV.     FilteredToursPage       pages\tours\[...date].js
        i.      create pages/api/tours/getFilteredTours(nYear, nMonth)
        ii.     replace filterTours with fetch to the API handler

V.      TourPage        pages\tours\[tourid].js
        i.      Add client side fetching
        ii.     Add new API handler - pages/api/tours[tourid].js

VI.     Add meta to each page

VII.    Beautify pages 



