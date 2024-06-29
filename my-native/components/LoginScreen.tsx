import { Colors } from '@/constants/Colors'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native'
import { Image } from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'
import React from 'react'

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    if (Platform.OS !== 'web') {
      // Warm up the android browser to improve UX
      // https://docs.expo.dev/guides/authentication/#improving-user-experience
      void WebBrowser.warmUpAsync()
      return () => {
        void WebBrowser.coolDownAsync()
      }
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()

const LoginScreen = () => {
  useWarmUpBrowser()

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL('/dashboard', { scheme: 'myapp' }),
        })

      if (createdSessionId) {
        setActive!({ session: createdSessionId })
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [startOAuthFlow])

  return (
    <View>
      <View style={styles.subContainer1}>
        <Image
          source={require('../assets/images/login.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.subContainer2}>
        <Text style={styles.text2}>
          Your Ultimate{' '}
          <Text style={styles.text1}>Community Business Directory</Text>
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: Colors.GRAY,
            marginTop: 10,
          }}
        >
          Find your favorite business near you and post your own business to
          your community
        </Text>

        <TouchableOpacity onPress={onPress} style={styles.btn}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontFamily: 'Outfit',
            }}
          >
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  subContainer1: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 100,
  },
  subsubContainer: {},
  text2: {
    fontSize: 30,
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
    marginTop: 20,
  },
  text1: {
    color: Colors.PRIMARY,
  },
  subContainer2: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: -30,
  },
  image: {
    width: 220,
    height: 450,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#000',
  },
  btn: {
    backgroundColor: Colors.PRIMARY,
    padding: 20,
    borderRadius: 99,
    marginTop: 20,
  },
})
