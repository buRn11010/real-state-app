import { View, ActivityIndicator } from 'react-native';
import React from 'react';
import { useGlobalContext } from '@/lib/global-provider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Slot, Redirect } from 'expo-router';

export default function AppLayout() {
  const { loading, isLogged } = useGlobalContext();

  // handling loading state and redirecting to sign-in page if not logged in
  // and showing the main app layout if logged in
  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator className="text-primary-300" size="large" />
      </SafeAreaView>
    );
  }

  if (!isLogged) return <Redirect href="/sign-in" />;

  return <Slot />;
}
