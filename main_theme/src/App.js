import MainTemplate from './components/MainTemplate';
import ShowTime from './components/ShowTime';
import NoticePage from './components/NoticePage';
import ShowCom from './components/ShowCom';
import LeftTop from './components/LeftTop';
import ListSearch from './components/ListSearch';
import LeftPage from './components/LeftPage';
import RightPage from './components/RightPage';
import ListPage from './components/ListPage';

const App = () => {
  return (
    <MainTemplate>
      <LeftPage>
        <LeftTop></LeftTop>
        <ShowCom></ShowCom>
        <ShowTime></ShowTime>
        <NoticePage></NoticePage>
      </LeftPage>
      <RightPage>
        <ListSearch></ListSearch>
        <ListPage></ListPage>
      </RightPage>
    </MainTemplate>
  )
}

export default App;