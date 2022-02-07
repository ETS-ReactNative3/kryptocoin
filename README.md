<h1 align="center">
   <img alt="kryptocoin" src="github/logo.svg" width="250px"  />
</h1>
  
<div align="center">
  <h1>kryptocoin - Is about cryptocurrency prices and some others features</h1>
</div>

<p align="center" >
  <a href="#about-the-project-and-how-it-works"> About </a> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;
  <a href="#portfolio-screen">Portfolio screen</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#watchlist-screen">WatchList screen</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#getting-started"> Getting started </a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

<p align="center">
  <a href="https://github.com/eulazzo" target="_blank">
    <img src="https://img.shields.io/static/v1?label=author&message=eulazzo&color=000&labelColor=16c784" alt="Github"> 
  </a>
    <img src="https://img.shields.io/github/stars/eulazzo/kryptocoin?color=000&labelColor=16c784" alt="Stars">
  <img src="https://img.shields.io/github/last-commit/eulazzo/kryptocoin?color=000&labelColor=16c784" alt="Commits">
  <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=000&labelColor=16c784" alt="License">
</p>


<h1 align="center">
   <img alt="cryptocoin" src="github/crypto.gif" width="250px" />
</h1>


# About the project

### Kryptocoin
<p>Developed with <code>React Native</code>, <code>Axios</code>,<code>Context Api</code>,</br><code>Recoil</code>, <code>React Memo</code> <code>Async Storage</code>  and  <code>Coin Gecko API</code></p></p> 

### Features:
- [X] See several cryptocurrencies and their respective details such as name, price, market value, etc
- [X] By clicking on any of them, you are directed to more specific details of that currency, in addition to the name and value, we also have an animated and minimalistic chart
- [X] track their cryptocurrencies that have been "bought" and how they are performing, check balance,</br> <code>add and delete new assets</code>.
 
## About the project and how it works

<p>

  Kryptocoin tell us about cryptocurrency prices, very similar to the application available on the market `coinMakertCap`, The API used was Coin Gecko. On the home are shown several cryptocurrencies and their respective details such as name, price, market value, etc. By clicking on any of them, you are directed to more specific details of that currency, in addition to the name and value, we also have an animated and minimalistic chart (rainbow-me/react-native-animated-charts library) showing price variations in 24h, 7d intervals , 30d and 1 year.
</p>
   
### Portfolio Screen
<p>
On the portfolio screen, the user is able to track their cryptocurrencies that have been "bought" and how they are performing, check balance,</br> <code>add and delete new assets</code>. Concepts like  <code>Navigation</code> ,<code>Fetching data with Axios</code>, <code>Bottom Navigation Menu</code> ,<code>Context API</code>  ,<code>Recoil</code>   , <code>React Memo</code>and <code>Async Storage</code> were implemented.
</p>
   
### WatchList Screen
<p>
On the WatchList screen the user can favorite desired cryptocurrencies.
To have access to the data on this screen without having to pass it as props,<code>ContextAPI</code> was used. Roughly speaking, the Context API provides a way to pass data from components without having to manually pass through every level. That being said,  The WatchListProvider function returns the created context, which was named as WatchListContext, something like WatchListContext.Provider.
  Everything that is rendered in this provider is called childreen, then we ensure that <code>WatchListProvider</code>  is parent of all components thus rendering all childreen, which in this case is the entire application. That way we can use the "provider data" that was defined in the value of the WatchListContext without having to pass as props from the top to the lowest level component. As said, the <code> WatchListContext.Provider</code> needs to be a parent of the entire application, so in the <code>App.js component</code>  and we ensure that all other components, with the exception of the navigationContainer, are children of the WatchListContext. To access the data in any component, the <code>AuseWatchList Hook was created</code>  , which simplifies some steps, imports, etc. That way, just call  <code>useWatchList()</code>  which will have access to the data.
<p/>
  
</p>

## Getting started

1. Clone this repo using `git@github.com:eulazzo/kryptocoin.git`
2. Move yourself to the appropriate directory: `cd kryptcoin`
3. Run `npm install` to install dependencies </br>
4- Run `yarn run dev` to start up the app  

 
## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.


