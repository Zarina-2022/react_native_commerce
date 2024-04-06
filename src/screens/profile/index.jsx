import {View, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import {StoreContext} from '../../context/provider';
import UserInfo from '../../components/profile-screen/user-info';
import ProfileMenu from '../../components/profile-screen/profile-menu';
import {screenstyles} from '../../styles/screen-styles';
import EmptyItemList from '../../components/ui/empty-item-list';
import { UserCirlceAdd } from 'iconsax-react-native';
import { SCREENS } from '../../utils/routes';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const {isLogin} = useContext(StoreContext);
  const navigation = useNavigation();
  const {login} = SCREENS;

  return (
    <View style={screenstyles.container}>
      {isLogin ? (
        <ScrollView>
          <UserInfo />
          <ProfileMenu />
        </ScrollView>
      ) : (
        <EmptyItemList
        icon={<UserCirlceAdd size="295" color="#FF8A65" variant="Bulk" />}
          title1={'Welcome !'}
          title2={'To continue you need to login first.'}
          btn={'LOGIN'}
          onPress={() => navigation.navigate(login)}
        />
      )}
    </View>
  );
};

export default Profile;
