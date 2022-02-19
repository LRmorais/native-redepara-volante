import React from 'react';
import {
  Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView,
} from 'react-native';

// import { useAuth } from '../../contexts/auth';

const customDrawerContent = (props) => {
  // const { logout } = useAuth();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#303233' }}>

      <View style={{
        height: 200, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column',
      }}
      >
        <Image source={require('../../assets/profile.png')} style={{ height: 110, width: 110, borderRadius: 20, tintColor: "#EF3C35" }} />
        <Text style={{
          fontSize: 18,
          color: '#EF3C35',
        }}
        >
          {/* {props.name} */}
        Admin
        </Text>
      </View>

      <ScrollView style={{ marginLeft: 5, paddingHorizontal: 20 }}>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => props.navigation.navigate('ChangeUserInfo')}>
          <Text style={{ color: '#fff', fontSize: 20 }}>Ver Cadastro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => props.navigation.navigate('ChangePassword')}>
          <Text style={{ color: '#fff', fontSize: 20 }}>Alterar Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => props.navigation.navigate('completeRegister')}>
          <Text style={{ color: '#fff', fontSize: 20 }}>Editar Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => props.navigation.navigate('MenuTab')}>
          <Text style={{ color: '#fff', fontSize: 20 }}>Ver Ganhos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => props.navigation.navigate('MenuTab')}>
          <Text style={{ color: '#fff', fontSize: 20 }}>Atendimento WhatsApp</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* <TouchableOpacity style={{ marginTop: 20, paddingHorizontal: 20 }} onPress={logout}> */}
      <TouchableOpacity style={{ marginBottom: 20, paddingHorizontal: 20 }}>
        <Text style={{ color: '#fff', fontSize: 20 }}>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default customDrawerContent;