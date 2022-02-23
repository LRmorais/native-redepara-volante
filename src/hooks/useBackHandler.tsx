import React, { createContext, ReactNode, useContext } from 'react';
import { Alert, BackHandler } from 'react-native';

interface BackHandlerProviderProps {
  children: ReactNode;
}

interface BackHandlerContextData {
  gestureBackHandler : (screenProps: string) => void
}

const BackHandlerContext = createContext<BackHandlerContextData>(
  {} as BackHandlerContextData
);

export function BackHandlerProvider({children}:BackHandlerProviderProps) {
// conteudo do context
  function gestureBackHandler(screenProps: string, navigation){
console.log('')
    // const backAction = () => {
    //   if(screenProps == 'Home'){
    //     // console.log('ta entrando aqui')
    //     console.log(screenProps)
    //     Alert.alert("Sair do app!", "Deseja realmente sair do app?", [
    //       {
    //         text: "Não",
    //         onPress: () => null,
    //         style: "cancel"
    //       },
    //       { text: "Sim", onPress: () => navigation.navigate('Signin') }
    //     ]);
    //     return true;
    //   }else{
    //     // console.log('falhou')
    //   }

    // };

    // const backHandler = BackHandler.addEventListener(
    //   "hardwareBackPress",
    //   backAction
    // );

    // return () => backHandler.remove();

  }

  return (
    <BackHandlerContext.Provider value={{gestureBackHandler}}>
      {children}
    </BackHandlerContext.Provider>
  )
}

export function useBackHandler(){
  const context = useContext(BackHandlerContext)

  return context;
}