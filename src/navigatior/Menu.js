import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import Home from '../assets/Home.png';
import dicho from '../assets/dicho.png';
import donhang from '../assets/donhang.png';
import acc from '../assets/account.png';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Home', title: 'Trang chủ', icon: Home, color: '#3F51B5'},
    {key: 'Order', title: 'Tin tức', icon: dicho, color: '#009688'},
    {key: 'Market', title: 'Đi chợ', icon: donhang, color: '#607D8B'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Home: MusicRoute,
    Order: AlbumsRoute,
    Market: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;
