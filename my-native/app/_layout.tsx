import { Stack } from 'expo-router'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo'
import { Text } from 'react-native'

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env'
  )
}

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <SignedIn>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SignedIn>
      <SignedOut>
        <Text>Sign-out</Text>
      </SignedOut>
    </ClerkProvider>

    //
  )
}
