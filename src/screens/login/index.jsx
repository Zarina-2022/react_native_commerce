import {Image, ScrollView, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {screenstyles} from '../../styles/screen-styles';
import {Input, Button} from '@ui-kitten/components';
import {loginStyle} from './style';
import {TouchableWithoutFeedback} from '@ui-kitten/components/devsupport';
import {Eye, EyeSlash} from 'iconsax-react-native';
import {COLORS} from '../../thema/colors';
import {postRequest} from '../../api/http-requests';
import {LOGIN_URL} from '../../api/urls';
import {StoreContext} from '../../context/provider';

const Login = ({navigation}) => {
  const [password, setPassword] = useState('83r5^_');
  const [username, setUsername] = useState('mor_2314');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [error, setError] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(true);

  const {setIsLogin} = useContext(StoreContext);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = () => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      {secureTextEntry ? (
        <EyeSlash size="24" color={COLORS.darkGreen} />
      ) : (
        <Eye size="24" color={COLORS.red} />
      )}
    </TouchableWithoutFeedback>
  );

  const handleLogin = () => {
    const form = {
      username,
      password,
    };

    // Validation
    if (username && password) {
      setDisabledBtn(true); // Disable the button before making the request
      postRequest(LOGIN_URL, form)
        .then(res => {
          console.log(res.data);
          setIsLogin(true); // checkout is available
          navigation.goBack();
        })
        .catch(err => setError('Invalid username and/or password.'))
        .finally(() => {
          setDisabledBtn(false); // Re-enable the button after the request is complete
        });
      setUsername('');
      setPassword('');
    }
  };

  // Clear errors after 3 seconds
  setTimeout(() => {
    setError('');
  }, 8000);

  useEffect(() => {
    setDisabledBtn(!(username && password));
  }, [username, password]);

  return (
    <View style={screenstyles.container}>
      <ScrollView>
        <View style={loginStyle.container}>
          <Image
            style={loginStyle.image}
            source={require('../../assets/icons/shopping-cart.png')}
          />
        </View>
        <View>
          <Input
            style={loginStyle.input}
            size="large"
            status={error ? 'danger' : 'success'} // border color
            value={username}
            label="Username"
            placeholder="Place your username"
            onChangeText={nextValue => setUsername(nextValue)}
          />

          <Input
            style={loginStyle.input}
            size="large"
            status={error ? 'danger' : 'success'} // border color
            value={password}
            label="Password"
            placeholder="Place your password"
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setPassword(nextValue)}
          />

          {error ? <Text style={loginStyle.errorText}>{error}</Text> : null}
        </View>
        <View style={loginStyle.buttonWrapper}>
          <Button
            disabled={disabledBtn}
            style={loginStyle.button}
            status="success"
            onPress={handleLogin}>
            LOGIN
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
