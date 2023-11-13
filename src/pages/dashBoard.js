// import axios from "axios";
import { useEffect, useState } from "react";
import TopButton from "../components/Common/BackToTop/topButton";
import Footer from "../components/Common/Footer/footer";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import PaginationComponent from "../components/Dashboard/Pagination/pagination";
import SearchComponent from "../components/Dashboard/Search/search";
import TabsComponent from "../components/Dashboard/Tabs/tab";
import { get100Coins } from "../functions/get100Coins";

function DashboardPage() {
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);

  const handlePageChange = (event, value) => {
    setPageNumber(value);
    var startingIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(startingIndex, startingIndex + 10));
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  var filteredCoins = coins.filter((coin) => {
    if (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    ) {
      return coin;
    }
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const data = await get100Coins();
    if (data) {
      setCoins(data);
      setPaginatedCoins(data.slice(0, 10));
      setLoading(false);
    }
  };

  return (
    <>
      <TopButton />
      {loading ? (
        <Loader />
      ) : (
        <div style={{ minHeight: "90vh" }}>
          <Header />
          <SearchComponent search={search} onChange={onChange} />
          <TabsComponent
            coins={search ? filteredCoins : paginatedCoins}
            setSearch={setSearch}
          />
          {!search && (
            <PaginationComponent
              pageNumber={pageNumber}
              handleChange={handlePageChange}
            />
          )}
        </div>
      )}
      <Footer />
    </>
  );
}

export default DashboardPage;
// fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
//         .then(response=>response.json())
//         .then(ans=> console.log(ans))
// axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
// .then(response=> {
//     console.log(response.data)
//     setcoins(response.data)
// })







// fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
//         .then(response=>response.json())
//         .then(ans=> {
//              setcoins(ans)
//              SetPaginatedCoins(ans.slice(0,10))
//              SetIsLoading(false)
//             })
//         .catch(err=> {console.log(err)
//         SetIsLoading(false)})