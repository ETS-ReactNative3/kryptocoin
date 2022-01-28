<h1 align="center">
   <img alt="sigma" src="github/logo.svg" width="250px" />
</h1>

<h1 align="center">
   <img alt="cryptocoin" src="github/crypto.gif" width="250px" />
</h1>

# Kryptocoin

<p>Crypto Price Tracker App Developed with <code>React Native</code>, <code>Recoil</code>,<code>ContextAPI</code>,</br><code>Axios</code>, <code>Coin Gecko API</code></p>  

## About the project and how it works

<p>

  Kryptocoin tell us about cryptocurrency prices, very similar to the application available on the market "coinMakertCap", The API used was Coin Gecko. On the home are shown several cryptocurrencies and their respective details such as name, price, market value, etc. By clicking on any of them, you are directed to more specific details of that currency, in addition to the name and value, we also have an animated and minimalistic chart (rainbow-me/react-native-animated-charts library) showing price variations in 24h, 7d intervals , 30d and 1 year.

  On the portfolio screen, the user is able to track their cryptocurrencies that have been "bought" and how they are performing, check balance, add and delete new assets. Concepts like Navigation, Fetching data with Axios, Bottom Navigation Menu, Context API, Recoil, React Memo and Async Storage were implemented.

  On the WatchList screen the user can favorite desired cryptocurrencies.
To have access to the data on this screen without having to pass it as props, `ContextAPI` was used. Roughly speaking, the Context API provides a way to pass data from components without having to manually pass through every level. The WatchListProvider function returns the created context, which was named as WatchListContext, with `<WatchListContext.Provider value={}/>`. 
  Everything that is rendered in this provider is called "childreen", then we ensure that `WatchListProvider` is "parent" of all components thus rendering all childreen, which in this case is the entire application. That way we can use the "provider data" that was defined in the value of the WatchListContext without having to pass as props from the top to the lowest level component. As said, the `WatchListContext.Provider` needs to be a parent of the entire application, so in the `App.js component` and we ensure that all other components, with the exception of the navigationContainer, are "children" of the WatchListContext. To access the data in any component, the `useWatchList Hook was created`, which simplifies some steps, imports, etc. That way, just call `useWatchList()` which will have access to the data.

</p>
## Getting started

1. Clone this repo using `git@github.com:eulazzo/kryptcoin_app.git`
2. Move yourself to the appropriate directory: `cd kryptcoin_app`<br />
3. Run `npm install` to install dependencies<br />
4- Run `yarn run dev` to start up the app  

 
## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.
<!-- <h4>Techs:</h4>

![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  
![image](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

  -->

 

 
 

