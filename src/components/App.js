import React from 'react';

// import Header from './Header';
// import Nav from './Nav';
// import HomePage from './HomePage';
import HomePage from './HomePage';

function App() {

    const UnsplashData = new HomePage();
    console.log(UnsplashData.apiData);
   return <HomePage />
   // return null;
  return (
      <HomePage/>

  );
  //   <Router>
  //     <Header>Moja Aplikacja</Header>
  //     <Nav />
  //
  //     <Switch>
  //       <Route path="/waluty">
  //         <Currency />
  //       </Route>
  //       {/* <Route path="/" component={HomePage} /> */}
  //       <Route path="/">
  //         <HomePage />
  //       </Route>
  //     </Switch>
  //   </Router>
  // );
}

export default App;
