Setup
    npx create-next-app route-tours
    npx next dev    ->  localhost:3000

I.      pages/
        1.  index.js                 HomePage                    /

        2.  tours/index.js           AllToursPage                /tours
        3.  tours/[tourid].js        TourPage                    /tours/[tourid]
        4.  tours/[...date].js       FilteredToursPage           /tours/[...dates]

II.     components/layout
        1.  layout.js                Layout
        2.  main-header.js           MainHeader
        3.  update _app.js           MyApp

III.    data/dummy-tours.js          DUMMY_TOURS

IV.     components/tours/
        1.  tours-list.js            ToursList               
        2.  tour-item.js             TourItem
                i.   button -> exploreLink = `/tours/${tourid}` -> components/tour-detail/logistics.js

V.      pages/tour[tourid].js   |
                                V
        i.   components/tours-detail/logistics.js       Logistics   
                title, dates, price, desc

VI.     component/ui/
        1.  buttons/
            button.js               Button
            link-button.js          LinkButton
            
        2.  icons/                  https://heroicons.com/

VI.     Filter Tours
        1.      pages/tours/[...date].js
                i.      extract date from router.query.date
                ii.     call DUMMY_TOURS.filterTours(year, month)
                iii.    return components/tours/tours-list.js                 <ToursList>
        
        2.      components/tours/search-form.js  <SearchForm>
        3.      update pages/index.js <AllToursPage> to include <SearchForm> 
                <AllToursPage> --> <SearchForm> --> <AllToursPage> --> <FilteredToursPage>
        4.      style components

VII.    Polish
        1.      https://icons8.com/icons/
                i.      add ui/icons/search-icon.js


Nextify 
I.      _app.js                                 MyApp
        1.      Add meta applicable to all pages: default title, meta viewport

II.     pages/index.js                          HomePage
        1.      Add meta: title, name/content 
        2.      Replace img with Image
        3.      Make the page responsive
        @media queries:
                https://www.folkstalk.com/2022/09/media-query-for-mobile-and-tablet-with-code-examples.html

III.    Live data
        1.      replace dummy-tours with the backend api: https://tours-f1b12-default-rtdb.firebaseio.com/ 
                i.      pages/tours/index.js                            AllToursPage
                ii.     pages/tours/[...data].js                        FilteredToursPage
                iii.    pages/tours/[tourid].js                         TourPage
        2.      Test all modified pages

Cleanup
        1.      add LinkButton to TourPage as 'Go Back'
        2.      Make MainHeader responsive @media query

      






