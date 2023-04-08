import React from 'react';
import { View, Text, TextInput, Platform, TouchableOpacity, Keyboard, KeyboardAvoidingView } from 'react-native';
import { Background } from '../components/Backgroundyellow';
import { BackgroundWhite } from '../components/BckgroundWhite';
import { BackgroundGray } from '../components/Backgroundray';
import { BackgroundWhiteCenter } from '../components/BackgroundWhitecenter';
import { loginStyles } from '../theme/LoginTheme';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack'


interface Props extends StackScreenProps<any, any> { }

export const LoginScreens = ({ navigation }: Props) => {
  const { usuario, contraseña, onChange } = useForm({
    usuario: '',
    contraseña: ''
  });

  const onLogin = () => {
    console.log({ usuario, contraseña });
    Keyboard.dismiss();
  }
  return (
    <>
      <BackgroundWhiteCenter />
      <Background />
      <BackgroundGray />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
      >
        <View style={loginStyles.formContainer}>
          <Text style={loginStyles.title}>Iniciar Sesión</Text>
          <Text style={loginStyles.label}>Usuario</Text>
          <TextInput
            placeholder='Ingrese su Usuario:'
            placeholderTextColor={'rgba(92,92,92,0.4)'}
            keyboardType='default'
            underlineColorAndroid={'black'}
            style={[
              loginStyles.inputField,
              (Platform.OS === 'ios') && loginStyles.inputFieldIOS
            ]}
            selectionColor={'black'}

            onChangeText={(value) => onChange(value, 'usuario')}
            value={usuario}
            onSubmitEditing={onLogin}

            autoCapitalize='none'
            autoCorrect={false}

          />
          <Text style={loginStyles.label}>Contraseña</Text>
          <TextInput
            placeholder='Ingrese su Constraseña:'
            placeholderTextColor={'rgba(92,92,92,0.4)'}
            underlineColorAndroid={'black'}
            secureTextEntry={true}
            style={[
              loginStyles.inputField,
              (Platform.OS === 'ios') && loginStyles.inputFieldIOS
            ]}
            selectionColor={'black'}

            onChangeText={(value) => onChange(value, 'contraseña')}
            value={contraseña}
            onSubmitEditing={onLogin}

            autoCapitalize='none'
            autoCorrect={false}

          />

          {/* Boton login */}

          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.button}
              onPress={onLogin}
            >
              <Text style={loginStyles.buttonText}>Iniciar Sesión</Text>

            </TouchableOpacity>
          </View>
          <View style={loginStyles.newUserContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.replace('RegisterScreen')}
            >
              <Text style={loginStyles.buttonTextRegister}>Registrate</Text>

            </TouchableOpacity>
          </View>
          <View style={loginStyles.newUserContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.replace('MenuScreens')}
            >
              <Text style={loginStyles.buttonTextRegister}>Menu</Text>

            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>


    </>
  )
}


